import { useEffect } from 'react'
import { Radar, ShieldCheck, Globe, Wifi, CloudOff, Clock } from 'lucide-react'
import { PageHeader } from '@/components/layout/PageHeader'
import { EmptyState } from '@/components/shared/EmptyState'
import { useThreatMonitorStore } from '@/stores/threat-monitor-store'
import { useSettingsStore } from '@/stores/settings-store'
import type { FlaggedConnection, FlaggedDnsEntry } from '@shared/types'

function formatTime(iso: string): string {
  try {
    return new Date(iso).toLocaleString()
  } catch {
    return iso
  }
}

export function ThreatMonitorPage() {
  const snapshot = useThreatMonitorStore((s) => s.snapshot)
  const loaded = useThreatMonitorStore((s) => s.loaded)
  const load = useThreatMonitorStore((s) => s.load)
  const settings = useSettingsStore((s) => s.settings)
  const isLinked = !!settings.cloud.apiKey

  useEffect(() => {
    if (!loaded) load()
  }, [loaded, load])

  // Cloud not configured
  if (!isLinked) {
    return (
      <div className="p-8">
        <PageHeader
          title="Threat Monitor"
          description="Real-time monitoring of network connections against known threat lists."
        />
        <EmptyState
          icon={CloudOff}
          title="Cloud not configured"
          description="Link your device to Kudu Cloud in Settings to enable threat monitoring. The threat blacklist is provided by the cloud service."
        />
      </div>
    )
  }

  // Loading
  if (!loaded) {
    return (
      <div className="p-8">
        <PageHeader
          title="Threat Monitor"
          description="Real-time monitoring of network connections against known threat lists."
        />
        <div className="flex items-center justify-center py-20">
          <div className="text-[13px]" style={{ color: '#6e6e76' }}>Loading...</div>
        </div>
      </div>
    )
  }

  // No snapshot (threat monitor not active — no blacklist loaded)
  if (!snapshot) {
    return (
      <div className="p-8">
        <PageHeader
          title="Threat Monitor"
          description="Real-time monitoring of network connections against known threat lists."
        />
        <EmptyState
          icon={Radar}
          title="Threat monitor inactive"
          description="No threat blacklist is loaded. The blacklist will be fetched automatically when the cloud agent connects."
        />
      </div>
    )
  }

  const { flaggedConnections, flaggedDns, blacklistVersion, lastConnectionScanAt, lastDnsScanAt } = snapshot
  const totalThreats = flaggedConnections.length + flaggedDns.length

  return (
    <div className="p-8">
      <PageHeader
        title="Threat Monitor"
        description="Real-time monitoring of network connections against known threat lists."
      />

      {/* Status bar */}
      <div
        className="mb-6 flex flex-wrap items-center gap-5 rounded-xl px-5 py-3.5 text-[12px]"
        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        {blacklistVersion && (
          <span style={{ color: '#6e6e76' }}>
            Blacklist <span className="font-medium text-zinc-400">v{blacklistVersion}</span>
          </span>
        )}
        {lastConnectionScanAt && (
          <span className="flex items-center gap-1.5" style={{ color: '#6e6e76' }}>
            <Clock className="h-3 w-3" />
            Connections scanned {formatTime(lastConnectionScanAt)}
          </span>
        )}
        {lastDnsScanAt && (
          <span className="flex items-center gap-1.5" style={{ color: '#6e6e76' }}>
            <Clock className="h-3 w-3" />
            DNS scanned {formatTime(lastDnsScanAt)}
          </span>
        )}
        <span
          className="ml-auto font-medium"
          style={{ color: totalThreats > 0 ? '#ef4444' : '#22c55e' }}
        >
          {totalThreats > 0 ? `${totalThreats} threat${totalThreats > 1 ? 's' : ''} detected` : 'No threats detected'}
        </span>
      </div>

      {/* No threats */}
      {totalThreats === 0 && (
        <EmptyState
          icon={ShieldCheck}
          title="All clear"
          description="No suspicious connections or DNS entries have been detected. The monitor continues scanning in the background."
        />
      )}

      {/* Flagged Connections */}
      {flaggedConnections.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 flex items-center gap-2 text-[14px] font-semibold text-zinc-300">
            <Wifi className="h-4 w-4 text-red-400" strokeWidth={2} />
            Flagged Connections
            <span
              className="ml-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[10px] font-semibold leading-none"
              style={{ background: '#ef4444', color: '#fff' }}
            >
              {flaggedConnections.length}
            </span>
          </h2>
          <div className="space-y-1.5">
            {flaggedConnections.map((conn, i) => (
              <ConnectionRow key={`${conn.remoteAddress}:${conn.remotePort}-${i}`} conn={conn} />
            ))}
          </div>
        </section>
      )}

      {/* Flagged DNS */}
      {flaggedDns.length > 0 && (
        <section>
          <h2 className="mb-3 flex items-center gap-2 text-[14px] font-semibold text-zinc-300">
            <Globe className="h-4 w-4 text-red-400" strokeWidth={2} />
            Flagged DNS Entries
            <span
              className="ml-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[10px] font-semibold leading-none"
              style={{ background: '#ef4444', color: '#fff' }}
            >
              {flaggedDns.length}
            </span>
          </h2>
          <div className="space-y-1.5">
            {flaggedDns.map((entry, i) => (
              <DnsRow key={`${entry.domain}-${i}`} entry={entry} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function ConnectionRow({ conn }: { conn: FlaggedConnection }) {
  return (
    <div
      className="flex items-center gap-4 rounded-lg px-4 py-3 text-[13px]"
      style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.1)' }}
    >
      <div className="min-w-0 flex-1">
        <span className="font-medium text-zinc-200">{conn.remoteAddress}</span>
        <span className="text-zinc-500">:{conn.remotePort}</span>
        {conn.pid != null && (
          <span className="ml-3 text-zinc-600">PID {conn.pid}</span>
        )}
      </div>
      <div className="flex items-center gap-3 text-[12px]">
        <span
          className="rounded px-2 py-0.5 font-medium uppercase"
          style={{
            background: conn.matchType === 'cidr' ? 'rgba(249,115,22,0.1)' : 'rgba(239,68,68,0.1)',
            color: conn.matchType === 'cidr' ? '#f97316' : '#ef4444',
          }}
        >
          {conn.matchType}
        </span>
        <span className="text-zinc-600" title={conn.matchedRule}>
          {conn.matchedRule}
        </span>
        <span className="whitespace-nowrap text-zinc-600">
          {formatTime(conn.detectedAt)}
        </span>
      </div>
    </div>
  )
}

function DnsRow({ entry }: { entry: FlaggedDnsEntry }) {
  return (
    <div
      className="flex items-center gap-4 rounded-lg px-4 py-3 text-[13px]"
      style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.1)' }}
    >
      <div className="min-w-0 flex-1">
        <span className="font-medium text-zinc-200">{entry.domain}</span>
        {entry.resolvedAddress && (
          <span className="ml-3 text-zinc-500">{entry.resolvedAddress}</span>
        )}
      </div>
      <div className="flex items-center gap-3 text-[12px]">
        <span className="text-zinc-600" title={entry.matchedRule}>
          {entry.matchedRule}
        </span>
        <span className="whitespace-nowrap text-zinc-600">
          {formatTime(entry.detectedAt)}
        </span>
      </div>
    </div>
  )
}
