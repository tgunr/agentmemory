---
type: CommandRun
title: Inspect desktop app package.json scripts
description: Electron + Vite desktop app build, dev, and profiling configuration
resource: agentmemory://observation/obs_mrp2vku1_0ea544bf465d
tags: ["Electron", "Vite", "electron-builder", "Node.js CPU profiling", "cross-platform packaging", "npm scripts", "TypeScript build", "commandrun"]
timestamp: 2026-07-17T15:13:40.150463+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

The command inspected the scripts section of the desktop app's package.json to understand the build, dev, and profiling workflow. This reveals an Electron + Vite architecture with detailed CPU/inspector profiling capabilities and cross-platform packaging support via electron-builder.

## Facts
- Working directory: /tmp/hermes-profile-fix/apps/desktop
- Dev renderer served via Vite on http://127.0.0.1:5174
- Electron main process profiling available via --inspect=9229 (profile:main) and --cpu-prof (profile:main:cpu)
- Build pipeline: assert-root-install → write-build-stamp → stage-native-deps → tsc -b → vite build → postbuild
- Uses electron-builder for cross-platform packaging (mac dmg/zip, win msi/nsis, linux AppImage/deb/rpm)
- Builder process runs with --max-old-space-size=16384
- Fake boot mode available via HERMES_DESKTOP_BOOT_FAKE=1 env var

## Concepts
- Electron
- Vite
- electron-builder
- Node.js CPU profiling
- cross-platform packaging
- npm scripts
- TypeScript build

## Files
- `/tmp/hermes-profile-fix/apps/desktop/package.json`

_Importance: 4 · Confidence: 1_
