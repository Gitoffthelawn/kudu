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
