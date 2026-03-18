import { useEffect, useRef } from 'react'
import { toast } from 'sonner'
import { useScanStore } from '@/stores/scan-store'
import { useHistoryStore } from '@/stores/history-store'
import { ScanStatus } from '@shared/enums'
import type { ScanResult } from '@shared/types'
import { formatBytes, formatNumber } from '@/lib/utils'

/**
 * Hook that listens for scheduled scan triggers from the main process
 * and automatically runs a full scan when triggered.
 */
export function useScheduledScan(): void {
  const scanningRef = useRef(false)

  useEffect(() => {
    if (!window.kudu?.onScheduledScanTrigger) return undefined

    const unsubscribe = window.kudu.onScheduledScanTrigger(async () => {
      // Prevent overlapping scans
      if (scanningRef.current) return
      const store = useScanStore.getState()
      if (store.status === ScanStatus.Scanning || store.status === ScanStatus.Cleaning) return

      scanningRef.current = true
      const startTime = Date.now()
      toast.info('Scheduled scan started', { description: 'Running automatic system scan...' })

      store.setStatus(ScanStatus.Scanning)
      store.setResults([])

      try {
        const scanFns: Array<{ label: string; fn: () => Promise<ScanResult[]> }> = [
          { label: 'System', fn: () => window.kudu.systemScan() },
          { label: 'Browsers', fn: () => window.kudu.browserScan() },
          { label: 'Applications', fn: () => window.kudu.appScan() },
          { label: 'Gaming', fn: () => window.kudu.gamingScan() },
          { label: 'Recycle Bin', fn: () => window.kudu.recycleBinScan() },
          { label: 'Databases', fn: () => window.kudu.databaseScan() }
        ]

        const categoryResults: Record<string, { found: number; size: number }> = {}

        for (const scan of scanFns) {
          try {
            const results = await scan.fn()
            store.addResults(results)
            const found = results.reduce((s, r) => s + r.itemCount, 0)
            const size = results.reduce((s, r) => s + r.totalSize, 0)
            if (found > 0) {
              categoryResults[scan.label] = { found, size }
            }
          } catch {
            // Skip failed categories
          }
        }

        store.setStatus(ScanStatus.Complete)
        store.setProgress(null)

        // Calculate totals for notification
        const results = useScanStore.getState().results
        const totalSize = results.reduce((s, r) => s + r.totalSize, 0)
        const totalItems = results.reduce((s, r) => s + r.itemCount, 0)

        // Log to history
        await useHistoryStore.getState().addEntry({
          id: Date.now().toString(),
          type: 'cleaner',
          timestamp: new Date().toISOString(),
          duration: Date.now() - startTime,
          totalItemsFound: totalItems,
          totalItemsCleaned: 0,
          totalItemsSkipped: 0,
          totalSpaceSaved: 0,
          categories: Object.entries(categoryResults).map(([name, d]) => ({
            name,
            itemsFound: d.found,
            itemsCleaned: 0,
            spaceSaved: d.size
          })),
          errorCount: 0,
          scheduled: true
        })

        // Notify main process for system notification
        window.kudu.notifyScheduledScanComplete?.(totalSize, totalItems)

        toast.success('Scheduled scan complete', {
          description: `Found ${formatNumber(totalItems)} items (${formatBytes(totalSize)}) that can be cleaned.`
        })
      } catch {
        store.setStatus(ScanStatus.Error)
        store.setProgress(null)
        toast.error('Scheduled scan failed', { description: 'An error occurred during the automatic scan.' })
      } finally {
        scanningRef.current = false
      }
    })

    return () => { unsubscribe() }
  }, [])
}
