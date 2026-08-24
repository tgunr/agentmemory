---
type: CommandRun
title: Safe mode launch verification
description: Confirmed eufyMake Studio starts in safe mode and stayed alive
resource: agentmemory://observation/obs_mrrsov7k_8495366e211a
tags: ["safe mode launch", "CEF debug logs", "Sentry crash dumps", "GPU crash mitigation", "commandrun"]
timestamp: 2026-07-19T12:51:49.372978+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 5
confidence: 1
---
# Summary

The safe-mode launch test succeeded: the app launched, its window is visible, and it did not crash within the first 10 seconds.
    No new crash dumps were written, so the prior GPU-related crash is likely mitigated by the safe-mode flags.
    The printer-connection log also showed no connect success, indicating the device is not yet online in this run.

## Facts
- Opened /Applications/eufyMake Studio (Safe).app
- Process is running: PID 57810, /Applications/eufyMake Studio.app/Contents/MacOS/eufyStudio with --disable-gpu --use-gl=swiftshader --use-angle=swiftshader --ignore-gpu-blocklist
- System Events reports a visible process named eufyStudio
- No new Sentry dumps in the last minute under ~/Library/Application Support/eufyMake Studio Profile/.SentryDmp/completed/
- No recent Connect Success or p2p_check entries in ~/Library/Application Support/eufyMake Studio Profile/CEF/debug.log

## Concepts
- safe mode launch
- CEF debug logs
- Sentry crash dumps
- GPU crash mitigation

## Files
- `/Applications/eufyMake Studio (Safe).app`
- `/Applications/eufyMake Studio.app/Contents/MacOS/eufyStudio`
- `~/Library/Application Support/eufyMake Studio Profile/.SentryDmp/completed/`
- `~/Library/Application Support/eufyMake Studio Profile/CEF/debug.log`

_Importance: 5 · Confidence: 1_
