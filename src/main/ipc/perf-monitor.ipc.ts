import { ipcMain } from 'electron'
import { IPC } from '../../shared/channels'
import { PerfMonitorService } from '../services/perf-monitor'

// Critical Windows processes that must never be killed by the user.
// Terminating these can cause a BSOD, logon failure, or system instability.
const PROTECTED_PROCESS_NAMES = new Set([
  'csrss.exe',        // Client/Server Runtime — BSOD if killed
  'smss.exe',         // Session Manager — BSOD if killed
  'wininit.exe',      // Windows Init — BSOD if killed
  'services.exe',     // Service Control Manager
  'lsass.exe',        // Local Security Authority — logon/auth
  'lsaiso.exe',       // LSA Isolated (Credential Guard)
  'svchost.exe',      // Hosts many core OS services
  'winlogon.exe',     // Logon session manager
  'dwm.exe',          // Desktop Window Manager — desktop crashes
  'explorer.exe',     // Windows shell — taskbar/desktop disappears
  'ntoskrnl.exe',     // Kernel image
  'system',           // Kernel-mode system process
  'registry',         // Registry hive process
  'memory compression', // Memory management
  // macOS / Linux equivalents
  'launchd',          // macOS PID 1
  'kernel_task',      // macOS kernel
  'windowserver',     // macOS display server
  'systemd',          // Linux PID 1
  'init',             // Linux PID 1 (SysVinit)
  'kthreadd',         // Linux kernel threads
  'gdm',              // GNOME Display Manager
  'sddm',             // KDE Display Manager
  'lightdm',          // Light Display Manager
  'xorg',             // X11 display server
  'xwayland',         // XWayland display server
])

export function registerPerfMonitorIpc(): void {
  const service = new PerfMonitorService()

  ipcMain.handle(IPC.PERF_GET_SYSTEM_INFO, () => service.getSystemInfo())

  ipcMain.handle(IPC.PERF_START_MONITORING, (event) => {
    return service.startMonitoring(event.sender)
  })

  ipcMain.handle(IPC.PERF_STOP_MONITORING, () => {
    service.stopMonitoring()
  })

  ipcMain.handle(IPC.PERF_KILL_PROCESS, async (_event, pid: number) => {
    // Validate pid is a positive integer and not a critical system process
    if (!Number.isInteger(pid) || pid <= 0) {
      return { success: false, error: 'Invalid process ID' }
    }
    // Block PID 0 (System Idle / kernel), PID 1 (init/launchd), PID 4 (Windows System)
    if (pid <= 4) {
      return { success: false, error: 'Cannot kill critical system process' }
    }
    // Prevent the app from killing itself
    if (pid === process.pid) {
      return { success: false, error: 'Cannot kill own process' }
    }
    // Look up the process name and block protected system processes
    const processName = await service.getProcessName(pid)
    if (processName && PROTECTED_PROCESS_NAMES.has(processName.toLowerCase())) {
      return { success: false, error: `Cannot kill protected system process (${processName})` }
    }
    return service.killProcess(pid)
  })

  ipcMain.handle(IPC.PERF_DISK_HEALTH, () => service.getDiskHealth())
}
