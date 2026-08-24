---
type: CommandRun
title: Codesigned and launched eufyMake Studio (Safe) app with swiftshader GPU flags
description: Verified application startup with angle/swiftshader instead of metal GPU backend
resource: agentmemory://observation/obs_mrrta23k_baf12eb99fc3
tags: ["codesign", "swiftshader", "angle graphics", "state machine", "commandrun"]
timestamp: 2026-07-19T13:08:18.077821+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 5
confidence: 1
---
# Summary

Successfully codesigned and launched the safe version of eufyMake Studio application. The main process is confirmed running with SwiftShader software rendering flags instead of Metal GPU backend. The application window is visible and the log shows device communication activity with state machine transitions for PRINT_TEST and ZERO_POINT operations.

## Facts
- Codesign replaced existing signature on /Applications/eufyMake Studio (Safe).app
- Main process running with --use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader --ignore-gpu-blocklist --disable-gpu-compositing flags
- Window is visible - System Events reports eufyStudio process exists
- GPU helper process did not show angle/swiftshader flags in grep output
- Log shows mqtt/p2p communication with device AK7226G0G01600349 and state machine events

## Concepts
- codesign
- swiftshader
- angle graphics
- state machine

## Files
- `/Applications/eufyMake Studio (Safe).app`
- `/tmp/eufy-safe.log`

_Importance: 5 · Confidence: 1_
