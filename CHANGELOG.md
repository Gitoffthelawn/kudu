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
