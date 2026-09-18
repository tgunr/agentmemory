---
type: CommandRun
title: Launched eufyMake Studio with software GL rendering flags
description: Background process started with PID 38417
resource: agentmemory://observation/obs_mrrs37ei_0b12c5d95364
tags: ["software rendering", "SwiftShader OpenGL", "background process management", "commandrun"]
timestamp: 2026-07-19T12:34:58.743711+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 4
confidence: 1
---
# Summary

Launched eufyMake Studio in background with software-based OpenGL rendering using SwiftShader to bypass GPU hardware requirements. Process started successfully but will run silently without exit notification.

## Facts
- Application path: /Applications/eufyMake Studio.app/Contents/MacOS/eufyStudio
- Log file: /tmp/eufy_swiftshader.log
- PID: 38417, Session ID: proc_6926befed710
- Flags used: --disable-gpu --use-gl=swiftshader --use-angle=swiftshader

## Concepts
- software rendering
- SwiftShader OpenGL
- background process management

## Files
- `/Applications/eufyMake Studio.app/Contents/MacOS/eufyStudio`
- `/tmp/eufy_swiftshader.log`

_Importance: 4 · Confidence: 1_
