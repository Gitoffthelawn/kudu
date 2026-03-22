## [1.19.1](https://github.com/adventdevinc/kudu/compare/v1.19.0...v1.19.1) (2026-03-22)


### Features

* **cve:** show only critical/high vulns, add descriptions and NVD links ([bb72b4d](https://github.com/adventdevinc/kudu/commit/bb72b4d55ef88b8a6e17b06537e714a1c7e4161a))
# [1.19.0](https://github.com/adventdevinc/kudu/compare/v1.18.0...v1.19.0) (2026-03-22)


### Bug Fixes

* use Get-CimInstance for driver scans and propagate update errors ([ba47ee7](https://github.com/adventdevinc/kudu/commit/ba47ee795ab9ee093fb3d20bd61b1da2b948e8db))


### Features

* add CVE vulnerability scanner (cloud-powered) ([#46](https://github.com/adventdevinc/kudu/issues/46)) ([68a786b](https://github.com/adventdevinc/kudu/commit/68a786b3a02c5dc29b19c826936427afe50ca019))
# [1.18.0](https://github.com/adventdevinc/kudu/compare/v1.17.0...v1.18.0) (2026-03-22)


### Bug Fixes

* **ci:** trigger website deploy on release and add release notes to winget manifest ([caff018](https://github.com/adventdevinc/kudu/commit/caff01865ac6953af1bc9940de34441e26ec995d))
* **privacy:** disable stealth mode toggle when macOS firewall is off ([#40](https://github.com/adventdevinc/kudu/issues/40)) ([e778766](https://github.com/adventdevinc/kudu/commit/e77876618ec793073b4e960a7d5b4c6d498281b4))


### Features

* add duplicate file finder tool ([#43](https://github.com/adventdevinc/kudu/issues/43)) ([6e74a20](https://github.com/adventdevinc/kudu/commit/6e74a202cf4017537160dc5c5f1d9942e3775311))
* add Game Mode for Windows gaming optimization ([#44](https://github.com/adventdevinc/kudu/issues/44)) ([7d20579](https://github.com/adventdevinc/kudu/commit/7d2057999291311d6e845775ba2060cb07c6714f))
* **cli:** verbose/quiet modes, granular exit codes, JSON audit, Prometheus metrics ([#39](https://github.com/adventdevinc/kudu/issues/39)) ([e24815e](https://github.com/adventdevinc/kudu/commit/e24815e1d00a54c207c84b01574a567a04556d84))
* **cloud:** notify renderer when threat blacklist is updated ([53b71c8](https://github.com/adventdevinc/kudu/commit/53b71c84ea3cde622f7e49e720f7de441f3df55e))
* rework dashboard as Command Center layout ([#45](https://github.com/adventdevinc/kudu/issues/45)) ([cb05a0b](https://github.com/adventdevinc/kudu/commit/cb05a0b4e9826fa27fa77ea6d934a6523e5dbb7a))
# [1.17.0](https://github.com/adventdevinc/kudu/compare/v1.16.2...v1.17.0) (2026-03-21)


### Bug Fixes

* **ci:** add notarization debug logging and build timeout ([7bd0558](https://github.com/adventdevinc/kudu/commit/7bd05588500473855bb08053047dfb69e1409df1))
* **ci:** use wingetcreate URL pipe syntax for architecture and scope overrides ([5332220](https://github.com/adventdevinc/kudu/commit/533222002a39c4a37ec9c91ae95ed792cf0aab3d))
* **security:** validate cloud remote-access boolean fields in IPC ([#31](https://github.com/adventdevinc/kudu/issues/31)) ([b5d3439](https://github.com/adventdevinc/kudu/commit/b5d3439c209cab9d172a20269e1927cef37bbd2c))


### Features

* add i18n with 30 languages ([#30](https://github.com/adventdevinc/kudu/issues/30)) ([9b2f2d0](https://github.com/adventdevinc/kudu/commit/9b2f2d09b5f0200af5cdf8bca16c852e13c585f0))
## [1.16.2](https://github.com/adventdevinc/kudu/compare/v1.16.1...v1.16.2) (2026-03-21)


### Bug Fixes

* **ci:** add winget architecture override and disable choco publish ([a84ccf7](https://github.com/adventdevinc/kudu/commit/a84ccf7aefcfc0ecdbaca1d9e8e0f9f8ffd35817))
## [1.16.1](https://github.com/adventdevinc/kudu/compare/v1.16.0...v1.16.1) (2026-03-21)


### Features

* add macOS code signing and notarization to release workflow ([#3](https://github.com/adventdevinc/kudu/issues/3)) ([b244bdd](https://github.com/adventdevinc/kudu/commit/b244bdd29c851d710b98172d1efe435ccdf55800))
# [1.16.0](https://github.com/adventdevinc/kudu/compare/v1.15.0...v1.16.0) (2026-03-20)


### Bug Fixes

* **monitor:** skip inbound connections on servers in threat monitor ([#29](https://github.com/adventdevinc/kudu/issues/29)) ([6025e67](https://github.com/adventdevinc/kudu/commit/6025e677a217eef5cd7f7980d4bef6899f0e85fc))


### Performance Improvements

* **monitor:** reduce CPU overhead by 90% ([#28](https://github.com/adventdevinc/kudu/issues/28)) ([5cc2f3d](https://github.com/adventdevinc/kudu/commit/5cc2f3dcdf5fa8316340b69b2d9ff94f242992a1))
# [1.15.0](https://github.com/adventdevinc/kudu/compare/v1.14.0...v1.15.0) (2026-03-19)


### Features

* **schedules:** dedicated Schedules page with multi-schedule support ([#26](https://github.com/adventdevinc/kudu/issues/26)) ([c19fa1f](https://github.com/adventdevinc/kudu/commit/c19fa1faf285c5a7079f110e5fff4b974754eff1))
# [1.14.0](https://github.com/adventdevinc/kudu/compare/v1.13.0...v1.14.0) (2026-03-18)


### Bug Fixes

* **browsers:** correct Helium Windows path and add missing database rules ([8e3c11b](https://github.com/adventdevinc/kudu/commit/8e3c11b7d687dd9c967dd6c4e7179064d9ed7f03))
* **cloud-agent:** add new browsers to cloud-agent browser scan list ([c4dd384](https://github.com/adventdevinc/kudu/commit/c4dd3847ab7f45733cf36745f3e1e698bc37b561))
* **darwin:** correct Helium macOS path and add missing browsers to shutdown list ([b39e9f5](https://github.com/adventdevinc/kudu/commit/b39e9f591297e37cbb5e76aee7a3beba3af069ef))
* **gaming:** correct Amazon Games log path, remove Playnite ([0832ae3](https://github.com/adventdevinc/kudu/commit/0832ae33dadadb12f1e79ff3989ca1acf469db08))
* **gaming:** remove Genshin Impact and Overwatch 2 cleaners ([3128674](https://github.com/adventdevinc/kudu/commit/31286744d4912a54d5a1e340ee5adfa4585a74db))
* **linux:** add Supermium, Helium, and Cromite to browser shutdown list ([0997d7c](https://github.com/adventdevinc/kudu/commit/0997d7c3b4e00df471bfc818bcdd548fb9edaa1a))


### Features

* **browsers:** add Thorium, Supermium, Helium, and Cromite cleaning support ([b3fea2c](https://github.com/adventdevinc/kudu/commit/b3fea2cd2861b459d497d5bda7d320b1a5aff889))
* **gaming:** add cleaners for popular games and launchers ([07e2c0a](https://github.com/adventdevinc/kudu/commit/07e2c0ab3284ba59aa7d4def06ef48e7868e355d))
* **privacy:** add AI, browser telemetry controls and expand bloatware list ([c9d3853](https://github.com/adventdevinc/kudu/commit/c9d3853a1d736cd7e76b7dbae6f32e3432011ad8))
* **privacy:** fix AI setting registry keys, skip browser checks when uninstalled ([77b8b70](https://github.com/adventdevinc/kudu/commit/77b8b70ed5504197bd624ddf827b7adeabfd9441))
# [1.13.0](https://github.com/adventdevinc/kudu/compare/v1.12.0...v1.13.0) (2026-03-18)


### Bug Fixes

* **ci:** pass single URL to match winget manifest installer count ([8a1878d](https://github.com/adventdevinc/kudu/commit/8a1878dbe9499c33fb2a709554f5b4af4e763523))
* **registry:** back up SYSTEM/HKCR hives and remove rotated log targets ([9f9bb85](https://github.com/adventdevinc/kudu/commit/9f9bb8526d79f8a85db09a9029a43f67a766a265))
* **registry:** check files not dirs in path resolution, inspect rundll32 DLLs ([1c8c107](https://github.com/adventdevinc/kudu/commit/1c8c10787cd400e450fed0894866f09707c14d0c))
* **registry:** check WOW6432Node in findMissingClsidDll, fix backup filename ([35d5c02](https://github.com/adventdevinc/kudu/commit/35d5c0245c3d328108fdbc474d8c21973cb16a7a))
* **registry:** expand env vars in uninstall scan paths via shared helper ([f5c6f9b](https://github.com/adventdevinc/kudu/commit/f5c6f9be0ba476709632e6b5c88e5f4b895e2eda))
* **registry:** handle PATH-resolved commands and evaluate COM views independently ([f981580](https://github.com/adventdevinc/kudu/commit/f98158064965b5b9ef727d2d6fc81a07fcba988a))
* **registry:** handle unquoted paths with spaces, remove unsafe singleFileTargets ([3d104b0](https://github.com/adventdevinc/kudu/commit/3d104b02d7f8af659ddc872e6c6eb868256db770))
* **registry:** match REG_EXPAND_SZ uninstall values, flag broken COM registrations, expand backups ([e3c53cd](https://github.com/adventdevinc/kudu/commit/e3c53cd9161177eb5b7b268030c5427830e71bd1))
* **registry:** only check service root keys, skip child subkeys ([edf20a1](https://github.com/adventdevinc/kudu/commit/edf20a1ef88325d699e919d68036a55a47a1920d))
* **registry:** preserve full exe paths and require broken uninstaller for orphan detection ([8498159](https://github.com/adventdevinc/kudu/commit/8498159c80ec6bbb99d5c754b2f49ab0423b9635))
* **registry:** require all COM views broken before flagging, expand service env vars ([e2bb59c](https://github.com/adventdevinc/kudu/commit/e2bb59c50a21d8e15106af628548e5cdd1096c01))
* **registry:** require missing install directory before flagging uninstall entries ([c9f8e3a](https://github.com/adventdevinc/kudu/commit/c9f8e3a7a716718f5ef786c92965fe5d5c06ba9c))
* **registry:** scan HKCU/WOW6432Node client hives, fix quoted rundll32 parsing ([5d3793f](https://github.com/adventdevinc/kudu/commit/5d3793f309c2982b96b12032a840ef6ba4d7ba56))
* **registry:** scan WOW6432Node BHO hive for 32-bit orphaned entries ([9f13381](https://github.com/adventdevinc/kudu/commit/9f13381069c1711a36604399576158b66d90ae47))
* **registry:** skip relative service paths and only check native COM view ([9808863](https://github.com/adventdevinc/kudu/commit/9808863a8a05ad4a7d545da530a77a8a82c73823))
* **registry:** split EventMessageFile on commas too and check PrimaryModule ([0bff7c1](https://github.com/adventdevinc/kudu/commit/0bff7c1bd3acbfb922df23c79d678849ebdbda90))
* **registry:** try full string as path candidate in extractExePath ([ed16a64](https://github.com/adventdevinc/kudu/commit/ed16a644c664923864b4ab795c5f7a240942e977))
* **registry:** use extractExePath() for all command-line path parsing ([289a94a](https://github.com/adventdevinc/kudu/commit/289a94ab59f69d7dd13193eb1df01f2b0e3a92e5))
* **registry:** WOW64-aware CLSID lookups, validate EventMessageFile, drop duplicate targets ([3a27695](https://github.com/adventdevinc/kudu/commit/3a27695f97507282aa0486347ff2b591c68698d9))
* **rules:** correct macOS/Linux paths and fix rules-bot template injection ([b0ccff4](https://github.com/adventdevinc/kudu/commit/b0ccff4f719c37f94d4fe6ffd393d0f49d74d505))
* **rules:** correct misleading descriptions for Google caches and Windows Update ([c0d583a](https://github.com/adventdevinc/kudu/commit/c0d583a04b22e61a5046276479e4fbd6fb23e77f))
* **rules:** remove debconf target and fix registry scan query flags ([8a3272e](https://github.com/adventdevinc/kudu/commit/8a3272e7d5b11afb92022cd5a6d7f6f84f9bd966))
* **rules:** remove live SRUM database from cleanup targets ([7c3ad2f](https://github.com/adventdevinc/kudu/commit/7c3ad2fbaf7dac0cb9b3f1e0a70e4cc2052783a3))
* **rules:** remove unsafe targets and use WOW64-aware context menu scan ([a01096d](https://github.com/adventdevinc/kudu/commit/a01096da6018ee778148906b998d7629965a0fe0))
* **startup:** add ConsoleConnect trigger for Windows Fast Startup ([bc47e06](https://github.com/adventdevinc/kudu/commit/bc47e064dbde9fd8783b601c580796baeba9cc6d))
* **startup:** revert startup state if auto-enable fails for scheduled scans ([6ac6673](https://github.com/adventdevinc/kudu/commit/6ac6673b8fbde6a6abb41bface7960742708e6a0))
* **startup:** use XML-based task creation and surface errors to UI ([28f1260](https://github.com/adventdevinc/kudu/commit/28f1260b0b4927440dafd025c207ad4d5b203127)), closes [#20](https://github.com/adventdevinc/kudu/issues/20)


### Features

* add contributor tooling for cleaner rules ([b6a6200](https://github.com/adventdevinc/kudu/commit/b6a6200f9831d33252dc1231a4167009cf776c6a))
* **rules:** add Claude, Sublime Text, Termius, Ledger Live, and more ([ef2dd70](https://github.com/adventdevinc/kudu/commit/ef2dd70f1c3699797dda88b4923aef540263ccf3))
* **rules:** add cleaning rules for browser forks, Kodi, qBittorrent, HandBrake, ccache, and Java ([33c59fb](https://github.com/adventdevinc/kudu/commit/33c59fbb4716fbdd7228392a1ae0d7f82b0a73e7))
* **rules:** expand system cleaning targets and registry orphan detection ([22f39d6](https://github.com/adventdevinc/kudu/commit/22f39d631032259f665cf5c583bc7ede3b3cdc02))
# [1.12.0](https://github.com/adventdevinc/kudu/compare/v1.11.0...v1.12.0) (2026-03-18)


### Bug Fixes

* **ci:** pass duplicate URL to resolve winget manifest multi-match error ([52fbdb5](https://github.com/adventdevinc/kudu/commit/52fbdb5983fdc02b7a1243c06523f113f92b3455))


### Features

* extract cleaner rules into community-editable JSON files ([3a2b345](https://github.com/adventdevinc/kudu/commit/3a2b345234c2e722ce3690cdf065eae844ee8d9a))
# [1.11.0](https://github.com/adventdevinc/kudu/compare/v1.10.0...v1.11.0) (2026-03-18)


### Bug Fixes

* **linux:** support libasound2 on older Ubuntu versions ([60b5c0e](https://github.com/adventdevinc/kudu/commit/60b5c0e3e6418a0a81e1971046844c188c5d5053))
* **linux:** use apt-cache policy for more reliable package detection ([2d6c503](https://github.com/adventdevinc/kudu/commit/2d6c503cb6ec392d7cb693d21b916e08c36a157b))
* **linux:** use apt-get --dry-run for package detection ([e9e28d6](https://github.com/adventdevinc/kudu/commit/e9e28d625bb50b68949e78f8e777aba0897e7058))


### Features

* add database optimizer, shortcut cleaner, and disk repair tools ([301d502](https://github.com/adventdevinc/kudu/commit/301d50229d87ef44ff3b749c980d952a89f178e3))
# [1.10.0](https://github.com/adventdevinc/kudu/compare/v1.9.0...v1.10.0) (2026-03-17)


### Bug Fixes

* **macos:** fix tray icon, dock restore, and expand malware scanner coverage ([25e74d1](https://github.com/adventdevinc/kudu/commit/25e74d10f0f0a3252eaf9265cbda2cbcc745973b))
* use path.win32.join for consistent backslash separators in win32 paths ([5d25238](https://github.com/adventdevinc/kudu/commit/5d25238644e8a449e10361aba1e18ee00174f4d0))


### Features

* enhance malware scanner with expanded detection and add tests ([4065011](https://github.com/adventdevinc/kudu/commit/406501127d73f3b7f6df64ce3b6db568cbfa7d8f))
# [1.9.0](https://github.com/adventdevinc/kudu/compare/v1.8.1...v1.9.0) (2026-03-17)


### Bug Fixes

* resolve bugs, race conditions, security issues, and dead code ([d5e3795](https://github.com/adventdevinc/kudu/commit/d5e37955cddf221e97c6db66232e41815f55ec55))


### Features

* expand cleaners with new targets, browsers, apps, and safety fixes ([497a561](https://github.com/adventdevinc/kudu/commit/497a56157c279f72edf78ee25c99b1acc2f3ea79))
## [1.8.1](https://github.com/AdventDevInc/kudu/compare/v1.8.0...v1.8.1) (2026-03-17)


### Bug Fixes

* **cloud:** improve Linux server detection and send isServer in registration ([b17c581](https://github.com/AdventDevInc/kudu/commit/b17c58188bd86a986df958515fc141234d6d0f74))
* **cloud:** skip desktop notifications in daemon/headless mode ([31ebb14](https://github.com/AdventDevInc/kudu/commit/31ebb14c154b73f55472b1c9ef490e69d74b009a))
# [1.8.0](https://github.com/AdventDevInc/kudu/compare/v1.7.0...v1.8.0) (2026-03-17)


### Bug Fixes

* **privacy:** remove unsafe sysctl hardening settings ([9f669b0](https://github.com/AdventDevInc/kudu/commit/9f669b0305e3a35ca55455e14a96d6fc198208e6))


### Features

* **cloud:** add server-only security checks to health reports ([5875d06](https://github.com/AdventDevInc/kudu/commit/5875d066a43006beec0b1465704b41cd885a910c))
# [1.7.0](https://github.com/AdventDevInc/kudu/compare/v1.6.0...v1.7.0) (2026-03-17)


### Bug Fixes

* disable macOS code signing to prevent Team ID mismatch crash ([ec923d3](https://github.com/AdventDevInc/kudu/commit/ec923d38d31b6902d4af39ffb005de6d9cc3a795))
* improve long-running stability and reduce resource usage ([d3ab953](https://github.com/AdventDevInc/kudu/commit/d3ab953eba14ed83f342d784da340a6cdbc545b6))
* use Restart=always in systemd service so daemon restarts after auto-update ([2b9eabe](https://github.com/AdventDevInc/kudu/commit/2b9eabe515981e710de362bfeb3427e5d20634a4))


### Features

* **cloud:** add SSH hardening checks to health reports ([639e4a7](https://github.com/AdventDevInc/kudu/commit/639e4a71a6e9f2933f2f1e0cfd756f49ee7018e4))
# [1.6.0](https://github.com/AdventDevInc/kudu/compare/v1.5.2...v1.6.0) (2026-03-16)


### Bug Fixes

* **darwin:** use socketfilterfw for reliable firewall status reporting ([49b198c](https://github.com/AdventDevInc/kudu/commit/49b198c70fec1a21bae88f7f3e99562480564f38))
* handle winget installer-type-changed errors correctly ([1fee6c6](https://github.com/AdventDevInc/kudu/commit/1fee6c602045396866b7041051528f4b54e2b6a5))
* **renderer:** improve privacy feedback, cross-platform updater labels, and window frame ([09eba37](https://github.com/AdventDevInc/kudu/commit/09eba37f100d10287ff1acace44da2b3682b96e1))
* suppress interactive prompts in install.sh for unattended installs ([b7b9056](https://github.com/AdventDevInc/kudu/commit/b7b9056d14aec21c7a9d572454ec1c409243ae46))


### Features

* **darwin:** add elevated execution, startup deletion, and filter Apple apps ([61bcb28](https://github.com/AdventDevInc/kudu/commit/61bcb28f9362eb2a56e16e569dfb5408c0062500))
* **dashboard:** comprehensive one-click scan with malware, privacy, and update checks ([1ee3ff1](https://github.com/AdventDevInc/kudu/commit/1ee3ff1b45de082f128718caab2bc7deee56597f))
* **malware:** add macOS malware signatures, code signing, and plist analysis ([20995fe](https://github.com/AdventDevInc/kudu/commit/20995fed324878811566c478089621dd32e8e638))
* **uninstaller:** add batch selection and multi-uninstall ([249c21d](https://github.com/AdventDevInc/kudu/commit/249c21d01883ef165df10c8df8f544b44b4903e7))
## [1.5.2](https://github.com/AdventDevInc/kudu/compare/v1.5.1...v1.5.2) (2026-03-16)


### Bug Fixes

* run winget updates sequentially to avoid lock contention ([354d4b0](https://github.com/AdventDevInc/kudu/commit/354d4b0694a9f5c7dedbf8fcd6ee63f3b2ebe994))
* set HOME=/root in systemd unit for correct config path ([3e993f6](https://github.com/AdventDevInc/kudu/commit/3e993f68510afb33faa96869428181a17e1ff197))
## [1.5.1](https://github.com/AdventDevInc/kudu/compare/v1.5.0...v1.5.1) (2026-03-15)


### Bug Fixes

* flush settings before exit in CLI config set ([a6576b4](https://github.com/AdventDevInc/kudu/commit/a6576b4698426ec6e3e5ae9fe1f17b7928c2f6bc))
* install runtime deps and use CLI for config in install.sh ([82f37d6](https://github.com/AdventDevInc/kudu/commit/82f37d61054159d18bf748a526ec61f5def5663d))
# [1.5.0](https://github.com/AdventDevInc/kudu/compare/v1.4.10...v1.5.0) (2026-03-15)


### Bug Fixes

* use large-file upload flow for VirusTotal submissions ([54f028f](https://github.com/AdventDevInc/kudu/commit/54f028fb171be2290dd37efe69902234e172caf0))


### Performance Improvements

* fix UI lag from perf monitor rendering overhead ([ea4fa1f](https://github.com/AdventDevInc/kudu/commit/ea4fa1fa26539994db7aa272b30cbebe73978093))
## [1.4.10](https://github.com/AdventDevInc/kudu/compare/v1.4.9...v1.4.10) (2026-03-15)


### Bug Fixes

* rename Chocolatey package ID to usekudu ([3904bf1](https://github.com/AdventDevInc/kudu/commit/3904bf14fb6229c9d1f511500e6fc14a6866d263))
## [1.4.9](https://github.com/AdventDevInc/kudu/compare/v1.4.8...v1.4.9) (2026-03-15)


### Features

* add Chocolatey package and automated publishing ([99d5c14](https://github.com/AdventDevInc/kudu/commit/99d5c14e704980824c47f07e2c6c1a22e50d455f))
## [1.4.8](https://github.com/AdventDevInc/kudu/compare/v1.4.7...v1.4.8) (2026-03-15)


### Bug Fixes

* pass Azure credentials as env vars for Windows code signing ([ec7c325](https://github.com/AdventDevInc/kudu/commit/ec7c3254007b7b68f0190a8b47ab384b40a3658a))
## [1.4.7](https://github.com/AdventDevInc/kudu/compare/v1.4.6...v1.4.7) (2026-03-15)


### Bug Fixes

* set shell to bash for build step to fix Windows PowerShell error ([b33dd87](https://github.com/AdventDevInc/kudu/commit/b33dd87e44a87bf4049b518b292f6d2e58c2dfac))
## [1.4.6](https://github.com/AdventDevInc/kudu/compare/v1.4.5...v1.4.6) (2026-03-15)


### Bug Fixes

* allow-no-subscriptions for Azure login in CI ([62d895f](https://github.com/AdventDevInc/kudu/commit/62d895fbd90a091dda0ecdfa1e4047529c4c0bb8))
## [1.4.5](https://github.com/AdventDevInc/kudu/compare/v1.4.4...v1.4.5) (2026-03-15)


### Bug Fixes

* move Azure signing config to CI-only to fix mac/linux validation error ([4c02e75](https://github.com/AdventDevInc/kudu/commit/4c02e75942acd1b37bd3ef5d63397965bc8ec81e))
## [1.4.4](https://github.com/AdventDevInc/kudu/compare/v1.4.3...v1.4.4) (2026-03-15)


### Features

* add Azure Trusted Signing for Windows builds, parallel malware scan, and misc improvements ([eb3f9df](https://github.com/AdventDevInc/kudu/commit/eb3f9dfee342e214e379413955ead0268b9ad5f0))
## [1.4.3](https://github.com/AdventDevInc/kudu/compare/v1.4.2...v1.4.3) (2026-03-15)


### Bug Fixes

* silently succeed for unsupported platform scan types and unwrap data envelope in payload fetch ([1a7cbb5](https://github.com/AdventDevInc/kudu/commit/1a7cbb50ce4171fb4f884848c7126a37e1789518))
## [1.4.2](https://github.com/AdventDevInc/kudu/compare/v1.4.1...v1.4.2) (2026-03-15)


### Features

* add cloud scan handlers for browser, app, gaming, recycle-bin, and uninstall-leftovers ([6cea8a6](https://github.com/AdventDevInc/kudu/commit/6cea8a63e37aced1cb09dbc0e43e03f94b3803f7))
## [1.4.1](https://github.com/AdventDevInc/kudu/compare/v1.4.0...v1.4.1) (2026-03-15)


### Bug Fixes

* race condition in payload fetch and revert incorrect success:true for unsupported platforms ([14e727b](https://github.com/AdventDevInc/kudu/commit/14e727b532ca8013d3bf0d4a9a0a45344fb57188))
# [1.4.0](https://github.com/AdventDevInc/kudu/compare/v1.3.0...v1.4.0) (2026-03-15)


### Features

* fetch full command payload when broadcast arrays are trimmed ([d530df3](https://github.com/AdventDevInc/kudu/commit/d530df34428c4c5c86389549c841a2c6728cea7b))
# [1.3.0](https://github.com/AdventDevInc/kudu/compare/v1.2.3...v1.3.0) (2026-03-15)


### Features

* require admin elevation via manifest instead of runtime re-launch ([f870da1](https://github.com/AdventDevInc/kudu/commit/f870da100ef5f22116e50bc0dfce956b0c564a9b))
## [1.2.3](https://github.com/AdventDevInc/kudu/compare/v1.2.2...v1.2.3) (2026-03-15)


### Bug Fixes

* threat monitor tab not appearing despite blacklist being loaded ([2494c7b](https://github.com/AdventDevInc/kudu/commit/2494c7be354276cbf2ce2b55cf9210887c04b4bd))
## [1.2.2](https://github.com/AdventDevInc/kudu/compare/v1.2.1...v1.2.2) (2026-03-15)


### Bug Fixes

* auto-updater crash from dynamic require of platform elevation module ([f3d9e5f](https://github.com/AdventDevInc/kudu/commit/f3d9e5fc7f93113cc0bed45aa01435ec09d92b29))
## [1.2.1](https://github.com/AdventDevInc/kudu/compare/v1.2.0...v1.2.1) (2026-03-15)


### Bug Fixes

* preserve admin elevation after auto-update and show threat monitor tab ([7378696](https://github.com/AdventDevInc/kudu/commit/73786963dd42da08bc3ec6ba898cbbf62abb71f4))
# [1.2.0](https://github.com/AdventDevInc/kudu/compare/v1.1.3...v1.2.0) (2026-03-15)


### Features

* add threat monitor, cloud agent enhancements, and IPC security hardening ([b952490](https://github.com/AdventDevInc/kudu/commit/b952490966127090ad5cdcbd6eaa3e41023a7e52))
## [1.1.3](https://github.com/AdventDevInc/kudu/compare/v1.1.2...v1.1.3) (2026-03-15)
## [1.1.2](https://github.com/AdventDevInc/kudu/compare/v1.1.1...v1.1.2) (2026-03-15)


### Bug Fixes

* AppImage hangs on headless Linux without FUSE ([8faed7f](https://github.com/AdventDevInc/kudu/commit/8faed7f0bdd98797e437344f174f4dc2cf90a468))
* install script overwrites AppImage binary via old symlink ([a71eb4e](https://github.com/AdventDevInc/kudu/commit/a71eb4ecd509d44ae4ca7ac8783da65f31029f92))
## [1.1.1](https://github.com/AdventDevInc/kudu/compare/v1.1.0...v1.1.1) (2026-03-14)


### Bug Fixes

* install script wrapper auto-injects --no-sandbox for root ([fb81a09](https://github.com/AdventDevInc/kudu/commit/fb81a09739279bceed6b081218ea3f2ae61d21f4))
# [1.1.0](https://github.com/AdventDevInc/kudu/compare/v1.0.5...v1.1.0) (2026-03-14)


### Bug Fixes

* daemon crash on headless Linux without X server ([d9fe47d](https://github.com/AdventDevInc/kudu/commit/d9fe47d7610ff14e5cfb2d019a82ce67e2ff5a57))
## [1.0.5](https://github.com/AdventDevInc/kudu/compare/v1.0.4...v1.0.5) (2026-03-14)


### Bug Fixes

* cloud agent not connecting after initial device link ([42e6e47](https://github.com/AdventDevInc/kudu/commit/42e6e47b560ecc7f0724306ba06b01a74d64dee1))
## [1.0.4](https://github.com/AdventDevInc/kudu/compare/v1.0.3...v1.0.4) (2026-03-14)


### Bug Fixes

* update repository URLs from dbfx to adventdevinc ([dede320](https://github.com/AdventDevInc/kudu/commit/dede32049b51e67bad3c6f55e38ded3eaa7322bf))
## [1.0.3](https://github.com/AdventDevInc/kudu/compare/v1.0.2...v1.0.3) (2026-03-14)


### Bug Fixes

* elevation relaunch not starting new instance on Windows ([807f50b](https://github.com/AdventDevInc/kudu/commit/807f50b1280a4540a9fd061bdc448389e72a3381))
## [1.0.2](https://github.com/AdventDevInc/kudu/compare/v1.0.1...v1.0.2) (2026-03-14)
## [1.0.1](https://github.com/AdventDevInc/kudu/compare/v1.0.0...v1.0.1) (2026-03-14)


### Bug Fixes

* make isValidAppId tests platform-aware ([1c446d1](https://github.com/AdventDevInc/kudu/commit/1c446d1fd1c64e9c746e178662e036eac9feccec))
* relaunch-as-admin not quitting when tray is active, update logo ([484f939](https://github.com/AdventDevInc/kudu/commit/484f939b1647a026d25ce5fbd4ff71bffdc60ef5))
