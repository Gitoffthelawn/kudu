import { homedir, tmpdir } from 'os'
import { join } from 'path'
import type { PlatformPaths, CleanTarget, BrowserPathConfig, AppCacheDef, UninstallLeftoverDir, DatabaseTarget } from '../types'

const HOME = homedir()
const LIBRARY = join(HOME, 'Library')
const CACHES = join(LIBRARY, 'Caches')
const APP_SUPPORT = join(LIBRARY, 'Application Support')

export function createDarwinPaths(): PlatformPaths {
  return {
    systemCleanTargets(): CleanTarget[] {
      return [
        { path: tmpdir(), subcategory: 'User Temp Files' },
        { path: '/private/tmp', subcategory: 'System Temp Files' },
        { path: join(LIBRARY, 'Logs'), subcategory: 'User Logs' },
        { path: '/Library/Logs', subcategory: 'System Logs', needsAdmin: true },
        { path: join(LIBRARY, 'Logs', 'DiagnosticReports'), subcategory: 'Crash Reports' },
        { path: join(CACHES, 'com.apple.QuickLook.thumbnailcache'), subcategory: 'Thumbnail Cache' },
        { path: '/Library/Caches/com.apple.ATS', subcategory: 'Font Cache', needsAdmin: true },
        { path: join(LIBRARY, 'Saved Application State'), subcategory: 'Saved Application State' },
        { path: join(LIBRARY, 'Developer', 'Xcode', 'DerivedData'), subcategory: 'Xcode DerivedData' },
        { path: join(LIBRARY, 'Developer', 'CoreSimulator', 'Caches'), subcategory: 'CoreSimulator Caches' },
      ]
    },

    singleFileCleanTargets(): { path: string; subcategory: string }[] {
      // macOS doesn't have a single memory dump file like Windows
      return []
    },

    protectedEventLogs(): string[] {
      // Not applicable on macOS
      return []
    },

    browserPaths(): BrowserPathConfig {
      return {
        chrome: {
          base: join(APP_SUPPORT, 'Google', 'Chrome'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        edge: {
          base: join(APP_SUPPORT, 'Microsoft Edge'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        brave: {
          base: join(APP_SUPPORT, 'BraveSoftware', 'Brave-Browser'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        opera: {
          base: join(APP_SUPPORT, 'com.operasoftware.Opera'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        operaGX: {
          base: join(APP_SUPPORT, 'com.operasoftware.OperaGX'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        vivaldi: {
          base: join(APP_SUPPORT, 'Vivaldi'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        arc: {
          base: join(APP_SUPPORT, 'Arc', 'User Data'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        chromium: {
          base: join(APP_SUPPORT, 'Chromium'),
          cache: 'Cache',
          codeCache: 'Code Cache',
          gpuCache: 'GpuCache',
          serviceWorker: join('Service Worker', 'CacheStorage'),
        },
        firefox: {
          base: join(APP_SUPPORT, 'Firefox', 'Profiles'),
          cache: join(CACHES, 'Firefox', 'Profiles'),
        },
        safari: { cache: join(CACHES, 'com.apple.Safari') },
      }
    },

    appPaths(): AppCacheDef[] {
      return [
        { id: 'discord', name: 'Discord', paths: [join(APP_SUPPORT, 'discord', 'Cache', 'Cache_Data')] },
        { id: 'vscode', name: 'VS Code', paths: [join(APP_SUPPORT, 'Code', 'Cache', 'Cache_Data'), join(APP_SUPPORT, 'Code', 'CachedData')] },
        { id: 'slack', name: 'Slack', paths: [join(APP_SUPPORT, 'Slack', 'Cache', 'Cache_Data')] },
        { id: 'teams', name: 'Microsoft Teams', paths: [join(APP_SUPPORT, 'Microsoft Teams', 'Cache')] },
        { id: 'spotify', name: 'Spotify', paths: [join(CACHES, 'com.spotify.client')] },
        { id: 'npm', name: 'npm Cache', paths: [join(HOME, '.npm', '_cacache')] },
        { id: 'yarn', name: 'Yarn Cache', paths: [join(CACHES, 'Yarn')] },
        { id: 'pip', name: 'pip Cache', paths: [join(CACHES, 'pip')] },
        { id: 'homebrew', name: 'Homebrew Cache', paths: [join(CACHES, 'Homebrew')] },
        { id: 'zoom', name: 'Zoom', paths: [join(APP_SUPPORT, 'zoom.us', 'data', 'Cache'), join(APP_SUPPORT, 'zoom.us', 'data', 'GPUCache'), join(APP_SUPPORT, 'zoom.us', 'data', 'logs'), join(LIBRARY, 'Logs', 'zoom.us')] },
        { id: 'telegram', name: 'Telegram', paths: [join(APP_SUPPORT, 'Telegram Desktop', 'tdata', 'user_data'), join(APP_SUPPORT, 'Telegram Desktop', 'tdata', 'emoji')] },
        { id: 'obs', name: 'OBS Studio', paths: [join(APP_SUPPORT, 'obs-studio', 'logs'), join(APP_SUPPORT, 'obs-studio', 'profiler_data')] },
        { id: 'jetbrains', name: 'JetBrains IDEs', paths: [join(CACHES, 'JetBrains')] },
        { id: 'adobe', name: 'Adobe Creative Cloud', paths: [join(CACHES, 'Adobe'), join(APP_SUPPORT, 'Adobe', 'Common', 'Media Cache Files'), join(APP_SUPPORT, 'Adobe', 'Common', 'Media Cache')] },
        { id: 'pnpm', name: 'pnpm Store', paths: [join(LIBRARY, 'pnpm', 'store')] },
        { id: 'bun', name: 'Bun Cache', paths: [join(HOME, '.bun', 'install', 'cache')] },
        { id: 'cargo', name: 'Cargo/Rust Cache', paths: [join(HOME, '.cargo', 'registry', 'cache'), join(HOME, '.cargo', 'registry', 'src')] },
        { id: 'go', name: 'Go Module Cache', paths: [join(HOME, 'go', 'pkg', 'mod', 'cache')] },
        { id: 'gradle', name: 'Gradle Cache', paths: [join(HOME, '.gradle', 'caches'), join(HOME, '.gradle', 'daemon')] },
        { id: 'maven', name: 'Maven Cache', paths: [join(HOME, '.m2', 'repository')] },
        { id: 'composer', name: 'Composer Cache', paths: [join(CACHES, 'composer')] },
        { id: 'cursor', name: 'Cursor IDE', paths: [join(APP_SUPPORT, 'Cursor', 'Cache', 'Cache_Data'), join(APP_SUPPORT, 'Cursor', 'CachedData')] },
        { id: 'signal', name: 'Signal Desktop', paths: [join(APP_SUPPORT, 'Signal', 'Cache', 'Cache_Data')] },
        { id: 'postman', name: 'Postman', paths: [join(APP_SUPPORT, 'Postman', 'Cache', 'Cache_Data')] },
        { id: 'figma', name: 'Figma', paths: [join(APP_SUPPORT, 'Figma', 'Cache', 'Cache_Data')] },
        { id: 'github-desktop', name: 'GitHub Desktop', paths: [join(APP_SUPPORT, 'GitHub Desktop', 'Cache', 'Cache_Data')] },
        { id: 'vlc', name: 'VLC', paths: [join(CACHES, 'org.videolan.vlc')] },
        // Apps added from BleachBit comparison — cache/temp/logs only, never user data
        { id: 'thunderbird', name: 'Thunderbird', paths: [join(CACHES, 'Thunderbird', 'Profiles')], childSubdir: 'cache2' },
        { id: 'gimp', name: 'GIMP', paths: [join(CACHES, 'org.gimp.gimp-2.10'), join(CACHES, 'org.gimp.gimp-2.99'), join(CACHES, 'org.gimp.gimp-3.0')] },
        { id: 'blender', name: 'Blender', paths: [join(APP_SUPPORT, 'Blender')], childSubdir: 'cache' },
        { id: 'libreoffice', name: 'LibreOffice', paths: [join(CACHES, 'LibreOffice')] },
        { id: 'teamviewer', name: 'TeamViewer', paths: [join(CACHES, 'com.teamviewer.TeamViewer'), join(LIBRARY, 'Logs', 'TeamViewer')] },
        { id: 'google-earth', name: 'Google Earth', paths: [join(CACHES, 'com.google.GoogleEarthPro'), join(CACHES, 'com.google.GoogleEarth')] },
        { id: 'inkscape', name: 'Inkscape', paths: [join(CACHES, 'org.inkscape.Inkscape')] },
        { id: 'krita', name: 'Krita', paths: [join(CACHES, 'krita')] },
        { id: 'filezilla', name: 'FileZilla', paths: [join(CACHES, 'FileZilla')] },
        { id: 'transmission', name: 'Transmission', paths: [join(CACHES, 'org.m0k.transmission')] },
      ]
    },

    gamingPaths(): AppCacheDef[] {
      return [
        { id: 'steam', name: 'Steam', paths: [join(APP_SUPPORT, 'Steam', 'logs')] },
        { id: 'epic', name: 'Epic Games Launcher', paths: [join(APP_SUPPORT, 'Epic', 'EpicGamesLauncher', 'Saved', 'webcache'), join(LIBRARY, 'Logs', 'EpicGamesLauncher')] },
        { id: 'itch', name: 'itch.io', paths: [join(APP_SUPPORT, 'itch', 'Cache', 'Cache_Data'), join(APP_SUPPORT, 'itch', 'logs')] },
      ]
    },

    gpuCachePaths(): AppCacheDef[] {
      return [
        { id: 'metal-cache', name: 'Metal Shader Cache', paths: [join(CACHES, 'com.apple.metal')] },
        { id: 'unity-cache', name: 'Unity Shader Cache', paths: [join(CACHES, 'com.unity3d.UnityEditor')] },
      ]
    },

    malwareScanDirs(): string[] {
      return [
        join(HOME, 'Downloads'),
        join(HOME, 'Desktop'),
        join(HOME, 'Documents'),
        '/tmp',
        // Target specific ~/Library subdirs rather than the entire ~/Library
        // (which contains thousands of legitimate files and would be extremely slow)
        join(LIBRARY, 'LaunchAgents'),
        join(LIBRARY, 'LaunchDaemons'),
        '/Library/LaunchAgents',
        '/Library/LaunchDaemons',
        '/Library/StartupItems',
        join(HOME, '.local', 'bin'),
        // Application Scripts — sandboxed apps can run scripts here
        join(LIBRARY, 'Application Scripts'),
        // Automator services/workflows can execute arbitrary code
        join(LIBRARY, 'Services'),
        join(LIBRARY, 'Workflows'),
        // Common locations for user-installed binaries (malware drops here too)
        '/usr/local/bin',
        '/opt/local/bin',
      ]
    },

    malwareSystemDirs(): string[] {
      return [
        '/System',
        '/usr',
        '/Library',
        '/Applications',
      ]
    },

    uninstallLeftoverDirs(): UninstallLeftoverDir[] {
      return [
        { id: 'app-support', name: 'Application Support', path: APP_SUPPORT },
        { id: 'caches', name: 'Caches', path: CACHES },
        { id: 'preferences', name: 'Preferences', path: join(LIBRARY, 'Preferences') },
      ]
    },

    steamLibraries(): string[] {
      return [join(APP_SUPPORT, 'Steam', 'steamapps')]
    },

    steamRedistPatterns(): string[] {
      // Same patterns apply cross-platform
      return [
        '_CommonRedist', 'DirectX', 'dotNetFx', 'vcredist',
        'DXSETUP', 'UE4PrereqSetup', 'Redist',
      ]
    },

    trashPath(): string | null {
      return join(HOME, '.Trash')
    },

    databaseOptimizeTargets(): DatabaseTarget[] {
      const chromiumDbFiles = ['History', 'Cookies', join('Network', 'Cookies'), 'Favicons', 'Top Sites', 'Web Data', 'Shortcuts', 'Login Data']
      const firefoxDbFiles = ['places.sqlite', 'cookies.sqlite', 'favicons.sqlite', 'formhistory.sqlite', 'webappsstore.sqlite', 'content-prefs.sqlite']

      return [
        // Chromium-based browsers
        { label: 'Google Chrome', basePath: join(APP_SUPPORT, 'Google', 'Chrome'), dbFiles: chromiumDbFiles, multiProfile: true },
        { label: 'Microsoft Edge', basePath: join(APP_SUPPORT, 'Microsoft Edge'), dbFiles: chromiumDbFiles, multiProfile: true },
        { label: 'Brave', basePath: join(APP_SUPPORT, 'BraveSoftware', 'Brave-Browser'), dbFiles: chromiumDbFiles, multiProfile: true },
        { label: 'Vivaldi', basePath: join(APP_SUPPORT, 'Vivaldi'), dbFiles: chromiumDbFiles, multiProfile: true },
        { label: 'Opera', basePath: join(APP_SUPPORT, 'com.operasoftware.Opera'), dbFiles: chromiumDbFiles },
        { label: 'Opera GX', basePath: join(APP_SUPPORT, 'com.operasoftware.OperaGX'), dbFiles: chromiumDbFiles },
        { label: 'Arc', basePath: join(APP_SUPPORT, 'Arc', 'User Data'), dbFiles: chromiumDbFiles, multiProfile: true },
        { label: 'Chromium', basePath: join(APP_SUPPORT, 'Chromium'), dbFiles: chromiumDbFiles, multiProfile: true },
        // Firefox
        { label: 'Firefox', basePath: join(APP_SUPPORT, 'Firefox', 'Profiles'), dbFiles: firefoxDbFiles, multiProfile: true, profilePattern: ['*.default*', '*.dev-edition*'] },
        // Electron / Chromium-based apps
        { label: 'Discord', basePath: join(APP_SUPPORT, 'discord'), dbFiles: [join('Network', 'Cookies')] },
        { label: 'Slack', basePath: join(APP_SUPPORT, 'Slack'), dbFiles: [join('Network', 'Cookies')] },
        { label: 'Microsoft Teams', basePath: join(APP_SUPPORT, 'Microsoft Teams'), dbFiles: [join('Network', 'Cookies')] },
        { label: 'VS Code', basePath: join(APP_SUPPORT, 'Code'), dbFiles: [join('Network', 'Cookies'), join('User', 'globalStorage', 'state.vscdb')] },
        { label: 'Cursor IDE', basePath: join(APP_SUPPORT, 'Cursor'), dbFiles: [join('Network', 'Cookies'), join('User', 'globalStorage', 'state.vscdb')] },
        { label: 'Figma', basePath: join(APP_SUPPORT, 'Figma'), dbFiles: [join('Network', 'Cookies')] },
        // Safari
        { label: 'Safari', basePath: join(LIBRARY, 'Safari'), dbFiles: ['History.db', 'CloudTabs.db'] },
        // Thunderbird
        { label: 'Thunderbird', basePath: join(APP_SUPPORT, 'Thunderbird', 'Profiles'), dbFiles: ['global-messages-db.sqlite', 'places.sqlite', 'cookies.sqlite'], multiProfile: true, profilePattern: ['*.default*'] },
      ]
    },
  }
}
