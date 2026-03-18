import { homedir, tmpdir } from 'os'
import { join } from 'path'
import type { PlatformPaths, CleanTarget, BrowserPathConfig, AppCacheDef, UninstallLeftoverDir, DatabaseTarget } from '../types'

const HOME = homedir()
const CONFIG = join(HOME, '.config')
const CACHE = join(HOME, '.cache')
const LOCAL_SHARE = join(HOME, '.local', 'share')

export function createLinuxPaths(): PlatformPaths {
  return {
    systemCleanTargets(): CleanTarget[] {
      return [
        { path: tmpdir(), subcategory: 'User Temp Files' },
        { path: '/tmp', subcategory: 'System Temp Files' },
        { path: '/var/tmp', subcategory: 'Persistent Temp Files' },
        { path: join(CACHE, 'thumbnails'), subcategory: 'Thumbnail Cache' },
        { path: '/var/crash', subcategory: 'Crash Reports', needsAdmin: true },
        // Journal logs
        { path: '/var/log/journal', subcategory: 'Journal Logs', needsAdmin: true },
        // Package manager caches
        { path: '/var/cache/apt/archives', subcategory: 'APT Package Cache', needsAdmin: true },
        { path: '/var/cache/dnf', subcategory: 'DNF Package Cache', needsAdmin: true },
        { path: '/var/cache/pacman/pkg', subcategory: 'Pacman Package Cache', needsAdmin: true },
        // Snap caches
        { path: '/var/lib/snapd/cache', subcategory: 'Snap Cache', needsAdmin: true },
        // Flatpak caches — only the cache/ subdir of each app, not config or data
        { path: join(HOME, '.var', 'app'), subcategory: 'Flatpak App Cache', childSubdir: 'cache' },
        // Zypper package cache (openSUSE)
        { path: '/var/cache/zypp/packages', subcategory: 'Zypper Package Cache', needsAdmin: true },
      ]
    },

    singleFileCleanTargets(): { path: string; subcategory: string }[] {
      return [
        { path: join(HOME, '.xsession-errors'), subcategory: 'X Session Errors' },
        { path: join(HOME, '.xsession-errors.old'), subcategory: 'X Session Errors' },
      ]
    },

    protectedEventLogs(): string[] {
      return []
    },

    browserPaths(): BrowserPathConfig {
      return {
        chrome: {
          base: join(CONFIG, 'google-chrome'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        edge: {
          base: join(CONFIG, 'microsoft-edge'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        brave: {
          base: join(CONFIG, 'BraveSoftware', 'Brave-Browser'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        opera: {
          base: join(CONFIG, 'opera'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        operaGX: {
          // Opera GX is not available on Linux
          base: join(CONFIG, 'opera-gx'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        vivaldi: {
          base: join(CONFIG, 'vivaldi'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        arc: {
          base: join(CONFIG, 'arc', 'User Data'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        chromium: {
          base: join(CONFIG, 'chromium'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        firefox: {
          base: join(HOME, '.mozilla', 'firefox'),
          cache: join(CACHE, 'mozilla', 'firefox'),
        },
        safari: null,
      }
    },

    appPaths(): AppCacheDef[] {
      return [
        { id: 'discord', name: 'Discord', paths: [join(CONFIG, 'discord', 'Cache', 'Cache_Data')] },
        { id: 'vscode', name: 'VS Code', paths: [join(CONFIG, 'Code', 'Cache', 'Cache_Data'), join(CONFIG, 'Code', 'CachedData')] },
        { id: 'slack', name: 'Slack', paths: [join(CONFIG, 'Slack', 'Cache', 'Cache_Data')] },
        { id: 'teams', name: 'Microsoft Teams', paths: [join(CONFIG, 'Microsoft', 'Microsoft Teams', 'Cache')] },
        { id: 'spotify', name: 'Spotify', paths: [join(CACHE, 'spotify')] },
        { id: 'npm', name: 'npm Cache', paths: [join(HOME, '.npm', '_cacache')] },
        { id: 'yarn', name: 'Yarn Cache', paths: [join(CACHE, 'yarn')] },
        { id: 'pip', name: 'pip Cache', paths: [join(CACHE, 'pip')] },
        { id: 'zoom', name: 'Zoom', paths: [join(HOME, '.zoom', 'data', 'Cache'), join(HOME, '.zoom', 'data', 'GPUCache'), join(HOME, '.zoom', 'data', 'logs'), join(HOME, '.zoom', 'logs')] },
        { id: 'telegram', name: 'Telegram', paths: [join(LOCAL_SHARE, 'TelegramDesktop', 'tdata', 'user_data'), join(LOCAL_SHARE, 'TelegramDesktop', 'tdata', 'emoji')] },
        { id: 'obs', name: 'OBS Studio', paths: [join(CONFIG, 'obs-studio', 'logs'), join(CONFIG, 'obs-studio', 'profiler_data')] },
        { id: 'jetbrains', name: 'JetBrains IDEs', paths: [join(CACHE, 'JetBrains')] },
        { id: 'pnpm', name: 'pnpm Store', paths: [join(LOCAL_SHARE, 'pnpm', 'store')] },
        { id: 'bun', name: 'Bun Cache', paths: [join(HOME, '.bun', 'install', 'cache')] },
        { id: 'cargo', name: 'Cargo/Rust Cache', paths: [join(HOME, '.cargo', 'registry', 'cache'), join(HOME, '.cargo', 'registry', 'src')] },
        { id: 'go', name: 'Go Module Cache', paths: [join(HOME, 'go', 'pkg', 'mod', 'cache')] },
        { id: 'gradle', name: 'Gradle Cache', paths: [join(HOME, '.gradle', 'caches'), join(HOME, '.gradle', 'daemon')] },
        { id: 'maven', name: 'Maven Cache', paths: [join(HOME, '.m2', 'repository')] },
        { id: 'composer', name: 'Composer Cache', paths: [join(CACHE, 'composer')] },
        { id: 'cursor', name: 'Cursor IDE', paths: [join(CONFIG, 'Cursor', 'Cache', 'Cache_Data'), join(CONFIG, 'Cursor', 'CachedData')] },
        { id: 'signal', name: 'Signal Desktop', paths: [join(CONFIG, 'Signal', 'Cache', 'Cache_Data')] },
        { id: 'postman', name: 'Postman', paths: [join(CONFIG, 'Postman', 'Cache', 'Cache_Data')] },
        { id: 'vlc', name: 'VLC', paths: [join(CACHE, 'vlc')] },
        // Apps added from BleachBit comparison — cache/temp/logs only, never user data
        { id: 'thunderbird', name: 'Thunderbird', paths: [join(CACHE, 'thunderbird')], childSubdir: 'cache2' },
        { id: 'gimp', name: 'GIMP', paths: [join(CACHE, 'gimp')] },
        { id: 'blender', name: 'Blender', paths: [join(CACHE, 'blender')] },
        { id: 'libreoffice', name: 'LibreOffice', paths: [join(CACHE, 'libreoffice')] },
        { id: 'teamviewer', name: 'TeamViewer', paths: [join(HOME, '.teamviewer', 'logs'), join(CACHE, 'TeamViewer')] },
        { id: 'inkscape', name: 'Inkscape', paths: [join(CACHE, 'inkscape')] },
        { id: 'krita', name: 'Krita', paths: [join(CACHE, 'krita')] },
        { id: 'filezilla', name: 'FileZilla', paths: [join(CACHE, 'filezilla')] },
        { id: 'pidgin', name: 'Pidgin', paths: [join(HOME, '.purple', 'icons')] },
        { id: 'transmission', name: 'Transmission', paths: [join(CACHE, 'transmission')] },
        { id: 'audacious', name: 'Audacious', paths: [join(CACHE, 'audacious')] },
        { id: 'rhythmbox', name: 'Rhythmbox', paths: [join(CACHE, 'rhythmbox')] },
        { id: 'wine', name: 'Wine', paths: [join(HOME, '.wine', 'drive_c', 'windows', 'temp')] },
      ]
    },

    gamingPaths(): AppCacheDef[] {
      return [
        { id: 'steam', name: 'Steam', paths: [
          join(HOME, '.steam', 'steam', 'logs'),
          join(LOCAL_SHARE, 'Steam', 'logs'),
        ]},
        { id: 'itch', name: 'itch.io', paths: [join(CONFIG, 'itch', 'Cache', 'Cache_Data'), join(CONFIG, 'itch', 'logs')] },
      ]
    },

    gpuCachePaths(): AppCacheDef[] {
      return [
        { id: 'mesa-cache', name: 'Mesa Shader Cache', paths: [join(CACHE, 'mesa_shader_cache')] },
        { id: 'nvidia-cache', name: 'NVIDIA Shader Cache', paths: [join(CACHE, 'nvidia', 'GLCache')] },
        { id: 'unity-cache', name: 'Unity Shader Cache', paths: [join(CACHE, 'unity3d')] },
      ]
    },

    malwareScanDirs(): string[] {
      return [
        join(HOME, 'Downloads'),
        join(HOME, 'Desktop'),
        join(HOME, 'Documents'),
        '/tmp',
      ]
    },

    malwareSystemDirs(): string[] {
      return ['/usr', '/lib', '/lib64', '/sbin', '/bin', '/opt']
    },

    uninstallLeftoverDirs(): UninstallLeftoverDir[] {
      return [
        { id: 'config', name: 'Config', path: CONFIG },
        { id: 'cache', name: 'Cache', path: CACHE },
        { id: 'local-share', name: 'Data', path: LOCAL_SHARE },
      ]
    },

    steamLibraries(): string[] {
      return [
        join(HOME, '.steam', 'steam', 'steamapps'),
        join(LOCAL_SHARE, 'Steam', 'steamapps'),
      ]
    },

    steamRedistPatterns(): string[] {
      return [
        '_CommonRedist', 'DirectX', 'dotNetFx', 'vcredist',
        'DXSETUP', 'UE4PrereqSetup', 'Redist',
      ]
    },

    trashPath(): string | null {
      return join(LOCAL_SHARE, 'Trash', 'files')
    },

    databaseOptimizeTargets(): DatabaseTarget[] {
      const chromiumDbFiles = ['History', 'Cookies', join('Network', 'Cookies'), 'Favicons', 'Top Sites', 'Web Data', 'Shortcuts', 'Login Data']
      const firefoxDbFiles = ['places.sqlite', 'cookies.sqlite', 'favicons.sqlite', 'formhistory.sqlite', 'webappsstore.sqlite', 'content-prefs.sqlite']

      return [
        // Chromium-based browsers
        { label: 'Google Chrome', basePath: join(CONFIG, 'google-chrome'), dbFiles: chromiumDbFiles, multiProfile: true },
        { label: 'Microsoft Edge', basePath: join(CONFIG, 'microsoft-edge'), dbFiles: chromiumDbFiles, multiProfile: true },
        { label: 'Brave', basePath: join(CONFIG, 'BraveSoftware', 'Brave-Browser'), dbFiles: chromiumDbFiles, multiProfile: true },
        { label: 'Vivaldi', basePath: join(CONFIG, 'vivaldi'), dbFiles: chromiumDbFiles, multiProfile: true },
        { label: 'Opera', basePath: join(CONFIG, 'opera'), dbFiles: chromiumDbFiles },
        { label: 'Chromium', basePath: join(CONFIG, 'chromium'), dbFiles: chromiumDbFiles, multiProfile: true },
        // Firefox
        { label: 'Firefox', basePath: join(HOME, '.mozilla', 'firefox'), dbFiles: firefoxDbFiles, multiProfile: true, profilePattern: ['*.default*', '*.dev-edition*'] },
        // Electron / Chromium-based apps
        { label: 'Discord', basePath: join(CONFIG, 'discord'), dbFiles: [join('Network', 'Cookies')] },
        { label: 'Slack', basePath: join(CONFIG, 'Slack'), dbFiles: [join('Network', 'Cookies')] },
        { label: 'Microsoft Teams', basePath: join(CONFIG, 'Microsoft', 'Microsoft Teams'), dbFiles: [join('Network', 'Cookies')] },
        { label: 'VS Code', basePath: join(CONFIG, 'Code'), dbFiles: [join('Network', 'Cookies'), join('User', 'globalStorage', 'state.vscdb')] },
        { label: 'Cursor IDE', basePath: join(CONFIG, 'Cursor'), dbFiles: [join('Network', 'Cookies'), join('User', 'globalStorage', 'state.vscdb')] },
        // Thunderbird
        { label: 'Thunderbird', basePath: join(HOME, '.thunderbird'), dbFiles: ['global-messages-db.sqlite', 'places.sqlite', 'cookies.sqlite'], multiProfile: true, profilePattern: ['*.default*'] },
      ]
    },
  }
}
