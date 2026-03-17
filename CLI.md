# CLI Mode

Kudu can run entirely from the command line — no GUI window is opened. This is useful for scripting, IT admin workflows, and scheduled tasks beyond the built-in scheduler.

## Usage

```
kudu --cli [options] [categories...]
```

## Categories

| Flag | Description |
|------|-------------|
| `--system` | System temp files, caches, logs, crash dumps |
| `--browser` | Browser caches (Chrome, Edge, Brave, Firefox, etc.) |
| `--app` | Application caches (Discord, VS Code, npm, etc.) |
| `--gaming` | Game launcher caches, GPU shader caches, redistributables |
| `--recycle-bin` | Windows Recycle Bin |
| `--all` | All categories (default when none specified) |

## Options

| Flag | Description |
|------|-------------|
| `--clean` | Delete found items after scanning (without this flag, scan-only) |
| `--json` | Output results as JSON instead of human-readable text |
| `-h`, `--help` | Show help message |
| `-v`, `--version` | Show version |

## Examples

```bash
# Scan everything (dry run — nothing is deleted)
kudu --cli

# Scan and clean system junk only
kudu --cli --system --clean

# Scan system and browser caches
kudu --cli --system --browser

# Scan everything and clean, output as JSON (for scripting)
kudu --cli --all --clean --json

# Use in a scheduled task (Task Scheduler, cron, etc.)
kudu --cli --all --clean
```

## JSON Output

When `--json` is passed, output is a single JSON object:

```json
{
  "scan": {
    "categories": ["system", "browser"],
    "results": [
      {
        "category": "system",
        "subcategory": "User Temp Files",
        "itemCount": 42,
        "totalSize": 104857600,
        "items": [{ "path": "...", "size": 1024, "lastModified": 1700000000000 }]
      }
    ],
    "totalItems": 42,
    "totalSize": 104857600
  },
  "clean": {
    "totalCleaned": 104857600,
    "filesDeleted": 40,
    "filesSkipped": 2,
    "errors": []
  }
}
```

The `clean` key is only present when `--clean` is used.

## Exit Codes

| Code | Meaning |
|------|---------|
| `0` | Success |
| `1` | Errors occurred during scan or clean |
