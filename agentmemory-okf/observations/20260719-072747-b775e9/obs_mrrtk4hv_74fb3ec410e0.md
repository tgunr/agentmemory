---
type: file_write
title: Create Safe Mode launcher for EufyMake Studio
description: Workaround for CEF/Chromium 122 GPU crashes on macOS 27 Tahoe
resource: agentmemory://observation/obs_mrrtk4hv_74fb3ec410e0
tags: ["Chromium Embedded Framework (CEF)", "macOS Metal graphics stack", "GPU process crash workaround", "WebGL and 3D API disabling", "CEF singleton lock cleanup", "file_write"]
timestamp: 2026-07-19T13:16:07.743489+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 7
confidence: 1
---
# Summary

Created a safe-mode bash launcher for EufyMake Studio to bypass Chromium 122 GPU crashes on macOS 27 Tahoe's Metal stack. The script disables GPU/WebGL to force soft JS failures instead of hard GPU process crashes, and clears stale CEF singleton locks to prevent launch failures.

## Facts
- Wrote a bash launcher script to /Applications/eufyMake Studio (Safe).app/Contents/MacOS/eufyMake-Launcher
- Script disables GPU, WebGL, and 3D APIs to prevent Chromium 122 GPU process crashes on macOS 27 (Tahoe) Metal stack
- Clears stale CEF singleton locks (SingletonLock, SingletonSocket, SingletonCookie, LOCK) in user data directory before launch
- Executes main binary with flags: --disable-gpu, --disable-webgl, --disable-3d-apis, --disable-webgl2-compute-context, --ignore-gpu-blocklist
- Logs stdout/stderr to /tmp/eufy-safe.log

## Concepts
- Chromium Embedded Framework (CEF)
- macOS Metal graphics stack
- GPU process crash workaround
- WebGL and 3D API disabling
- CEF singleton lock cleanup

## Files
- `/Applications/eufyMake Studio (Safe).app/Contents/MacOS/eufyMake-Launcher`

_Importance: 7 · Confidence: 1_
