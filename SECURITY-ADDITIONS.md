# Server Security Additions — Health Report

## Overview

The Kudu desktop agent now collects four additional server-hardening checks as part of the periodic health report. These fields are **server-only** — they will be `null` for desktop machines and non-Linux platforms (Windows, macOS). The cloud service should store, display, and alert on these new fields.

All four fields live under `report.securityPosture` in the existing `POST /devices/:deviceId/health-report` payload. No new endpoints or commands are needed.

---

## New Fields

### 1. `fail2ban`

Intrusion prevention status. Checks whether fail2ban is installed, running, which jails are active, and how many IPs are currently banned.

**Type:** `object | null`

```jsonc
// null on desktops / non-Linux
// Example from a hardened server:
"fail2ban": {
  "installed": true,
  "active": true,
  "jails": ["sshd", "apache-auth", "postfix"],
  "totalBannedIps": 47
}

// Example from a server without fail2ban:
"fail2ban": {
  "installed": false,
  "active": false,
  "jails": [],
  "totalBannedIps": 0
}
```

| Field | Type | Description |
|---|---|---|
| `installed` | `boolean` | Whether the `fail2ban-client` binary exists on the system |
| `active` | `boolean` | Whether the `fail2ban` systemd service is currently running |
| `jails` | `string[]` | Names of active jails (e.g. `"sshd"`, `"apache-auth"`) |
| `totalBannedIps` | `number` | Sum of currently banned IPs across all jails |

**Suggested alerts:**
- `installed === false` on a server with SSH exposed → "No intrusion prevention"
- `active === false` when `installed === true` → "Fail2ban installed but not running"
- `jails` does not include `"sshd"` when `sshHardening.sshdInstalled === true` → "SSH jail not configured"

---

### 2. `listeningPorts`

All TCP and UDP ports in LISTEN state. Useful for detecting unexpected services exposed to the network.

**Type:** `array | null`

```jsonc
// null on desktops / non-Linux
"listeningPorts": [
  {
    "address": "0.0.0.0",
    "port": 22,
    "protocol": "tcp",
    "pid": 1234,
    "process": "sshd"
  },
  {
    "address": "0.0.0.0",
    "port": 80,
    "protocol": "tcp",
    "pid": 5678,
    "process": "nginx"
  },
  {
    "address": "127.0.0.1",
    "port": 5432,
    "protocol": "tcp",
    "pid": 9012,
    "process": "postgres"
  },
  {
    "address": "::",
    "port": 443,
    "protocol": "tcp",
    "pid": 5678,
    "process": "nginx"
  },
  {
    "address": "0.0.0.0",
    "port": 53,
    "protocol": "udp",
    "pid": 3456,
    "process": "systemd-resolve"
  }
]
```

| Field | Type | Description |
|---|---|---|
| `address` | `string` | Bind address — `"0.0.0.0"` / `"::"` means all interfaces, `"127.0.0.1"` means localhost only |
| `port` | `number` | Port number |
| `protocol` | `"tcp" \| "udp"` | Transport protocol |
| `pid` | `number \| null` | Process ID (null if not available without root) |
| `process` | `string \| null` | Process name (null if not available without root) |

**Suggested alerts:**
- Database ports (3306, 5432, 6379, 27017) bound to `"0.0.0.0"` or `"::"` → "Database exposed on all interfaces"
- Unexpected high-numbered ports on `0.0.0.0` → "Unknown service exposed"
- Useful as a fleet-wide port inventory for compliance dashboards

---

### 3. `auditd`

Linux Audit Framework status. Important for compliance (PCI-DSS, SOC2, HIPAA).

**Type:** `object | null`

```jsonc
// null on desktops / non-Linux
// Example from a compliant server:
"auditd": {
  "installed": true,
  "active": true,
  "ruleCount": 42
}

// Example from a server without auditing:
"auditd": {
  "installed": false,
  "active": false,
  "ruleCount": 0
}
```

| Field | Type | Description |
|---|---|---|
| `installed` | `boolean` | Whether `/usr/sbin/auditd` or `/sbin/auditd` exists |
| `active` | `boolean` | Whether the `auditd` systemd service is currently running |
| `ruleCount` | `number` | Number of active audit rules (from `auditctl -l`) |

**Suggested alerts:**
- `installed === false` on a server → "No audit framework installed"
- `active === false` when `installed === true` → "Audit daemon installed but not running"
- `ruleCount === 0` when `active === true` → "Audit daemon running with no rules configured"

---

### 4. `suidSgidBinaries`

Lists SUID/SGID binaries found in system binary directories that are **not** in the known-safe allowlist. These are potential privilege escalation vectors.

Known-safe binaries (filtered out by the agent): `sudo`, `su`, `passwd`, `chsh`, `chfn`, `newgrp`, `gpasswd`, `mount`, `umount`, `pkexec`, `crontab`, `at`, `ssh-agent`, `fusermount`, `fusermount3`, `unix_chkpwd`, `pam_timestamp_check`, `wall`, `write`, `expiry`, `chage`, and standard dbus/openssh helpers.

**Type:** `array | null`

```jsonc
// null on desktops / non-Linux
// Example with some unexpected suid binaries:
"suidSgidBinaries": [
  {
    "path": "/usr/bin/nmap",
    "suid": true,
    "sgid": false,
    "owner": "root"
  },
  {
    "path": "/usr/local/bin/custom-tool",
    "suid": true,
    "sgid": false,
    "owner": "root"
  },
  {
    "path": "/usr/bin/locate",
    "suid": false,
    "sgid": true,
    "owner": "root"
  }
]

// Clean server (no unexpected suid/sgid):
"suidSgidBinaries": []
```

| Field | Type | Description |
|---|---|---|
| `path` | `string` | Full path to the binary |
| `suid` | `boolean` | Whether the SUID bit (4000) is set |
| `sgid` | `boolean` | Whether the SGID bit (2000) is set |
| `owner` | `string` | File owner name (e.g. `"root"`) |

**Suggested alerts:**
- Any entries at all → "Unexpected SUID/SGID binaries found" (list them)
- `suid === true && owner === "root"` → High severity, potential root escalation vector
- Count trending upward across reports → "New SUID binary appeared"

---

## Full Mock Payload

Below is a complete `securityPosture` payload from a typical Linux server health report, showing all four new fields alongside the existing ones:

```json
{
  "securityPosture": {
    "antivirus": {
      "products": [
        {
          "name": "ClamAV (ClamAV 1.2.1/27150)",
          "enabled": true,
          "realTimeProtection": false,
          "signatureUpToDate": true
        },
        {
          "name": "AppArmor (23 profiles enforcing)",
          "enabled": true,
          "realTimeProtection": true,
          "signatureUpToDate": true
        }
      ],
      "primary": "ClamAV"
    },
    "firewall": {
      "enabled": true,
      "products": [{ "name": "UFW", "enabled": true }],
      "windowsProfiles": { "domain": false, "private": false, "public": false }
    },
    "bitlocker": {
      "volumes": [
        { "mount": "dm-0", "status": "FullyEncrypted", "protectionOn": true }
      ]
    },
    "windowsUpdate": {
      "recentPatches": [
        { "id": "apt", "installedOn": "2026-03-15", "description": "Last APT update" },
        { "id": "auto-updates", "installedOn": "", "description": "Unattended upgrades: enabled" }
      ],
      "lastPatchDate": "2026-03-15",
      "daysSinceLastPatch": 2
    },
    "screenLock": {
      "screenSaverEnabled": false,
      "lockOnResume": false,
      "timeoutSec": null,
      "inactivityLockSec": null
    },
    "passwordPolicy": {
      "minLength": 12,
      "maxAgeDays": 90,
      "minAgeDays": 1,
      "historyCount": 0,
      "complexityRequired": true,
      "lockoutThreshold": 5,
      "lockoutDurationMin": 10,
      "lockoutObservationMin": 0,
      "windowsHello": {
        "enrolled": false,
        "faceEnabled": false,
        "fingerprintEnabled": false,
        "pinEnabled": false
      }
    },
    "sshHardening": {
      "isServer": true,
      "sshdInstalled": true,
      "passwordAuthDisabled": true,
      "rootLoginDisabled": true,
      "pubkeyAuthEnabled": true,
      "emptyPasswordsDisabled": true,
      "protocol2Only": true
    },
    "fail2ban": {
      "installed": true,
      "active": true,
      "jails": ["sshd", "apache-auth"],
      "totalBannedIps": 23
    },
    "listeningPorts": [
      { "address": "0.0.0.0", "port": 22, "protocol": "tcp", "pid": 1234, "process": "sshd" },
      { "address": "0.0.0.0", "port": 80, "protocol": "tcp", "pid": 5678, "process": "nginx" },
      { "address": "::", "port": 443, "protocol": "tcp", "pid": 5678, "process": "nginx" },
      { "address": "127.0.0.1", "port": 5432, "protocol": "tcp", "pid": 9012, "process": "postgres" },
      { "address": "127.0.0.1", "port": 6379, "protocol": "tcp", "pid": 3456, "process": "redis-server" }
    ],
    "auditd": {
      "installed": true,
      "active": true,
      "ruleCount": 42
    },
    "suidSgidBinaries": [
      { "path": "/usr/local/bin/custom-tool", "suid": true, "sgid": false, "owner": "root" }
    ]
  }
}
```

---

## Implementation Prompt for Cloud Service

> **Prompt to give the cloud team / LLM:**
>
> The Kudu desktop agent now sends four new nullable fields inside `securityPosture` on the existing `POST /devices/:deviceId/health-report` endpoint. These are **server-only** (Linux servers where `systemctl get-default` returns `multi-user.target`). They will be `null` for desktops, Windows, and macOS devices.
>
> The four new fields are:
>
> 1. **`fail2ban`** (`{ installed, active, jails[], totalBannedIps } | null`) — Intrusion prevention status. Store and display. Alert when: not installed on an SSH-enabled server, installed but not running, or sshd jail missing when SSH is active.
>
> 2. **`listeningPorts`** (`[{ address, port, protocol, pid, process }] | null`) — All listening TCP/UDP ports. Store and display as a port inventory table. Alert when: database ports (3306, 5432, 6379, 27017) are bound to `0.0.0.0` or `::` instead of `127.0.0.1`. Provide a fleet-wide view of open ports across all devices.
>
> 3. **`auditd`** (`{ installed, active, ruleCount } | null`) — Linux audit framework status. Store and display. Alert when: not installed, installed but not running, or running with zero rules.
>
> 4. **`suidSgidBinaries`** (`[{ path, suid, sgid, owner }] | null`) — Unexpected SUID/SGID binaries (agent already filters known-safe ones like sudo, passwd, mount). Store and display. Alert when: any entries exist (especially `suid && owner === "root"`). Track changes between reports to detect newly-added SUID binaries.
>
> **Database changes needed:**
> - Add columns/fields for all four to the health report storage (all nullable)
> - `listeningPorts` and `suidSgidBinaries` are arrays — store as JSON or in related tables depending on your schema
>
> **API changes needed:**
> - The `POST /devices/:deviceId/health-report` payload already contains these fields — just accept and store them (they're nullable, so old agents that don't send them will just have nulls)
> - Expose them on `GET /devices/:deviceId/health-report` responses
> - Add them to any fleet summary/compliance endpoints
>
> **Dashboard/UI suggestions:**
> - Show fail2ban and auditd as status badges (installed/active/inactive) on the device detail page
> - Show listening ports as a sortable table with columns: Port, Protocol, Process, Bind Address — highlight rows where address is `0.0.0.0`/`::` in yellow/red
> - Show SUID/SGID binaries as a list with severity indicators (SUID+root = high)
> - Fleet compliance view: "X of Y servers have fail2ban active", "X of Y servers have auditd active", "X servers have unexpected SUID binaries"
> - All four should be hidden/omitted when `null` (device is not a server)
>
> **No breaking changes required.** All fields are nullable and additive. Old agents will send `null` (or omit them), new agents will populate them on Linux servers only.
