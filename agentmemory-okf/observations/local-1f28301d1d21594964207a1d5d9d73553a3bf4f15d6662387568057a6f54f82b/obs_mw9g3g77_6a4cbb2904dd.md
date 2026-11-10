---
type: FileRead
title: Quick Look extension debugging (macOS 26+)
description: Using qlmanage -p on macOS 26+ for extension-based types is useless
resource: agentmemory://observation/obs_mw9g3g77_6a4cbb2904dd
tags: ["React hooks", "fileread"]
timestamp: 2026-11-09T15:57:55.264475+00:00
source: agentmemory
session_id: local-1f28301d1d21594964207a1d5d9d73553a3bf4f15d6662387568057a6f54f82b
importance: 9
confidence: 0.9
---
# Summary

A spinning Quick Look panel means the extension process launched and cancelled its XPC connection, causing the preview to spin forever. Diagnose from the extension's own log, not `qlmanage -p`. Verify the installed appex without the GUI using `scripts/checkext.swift`.

## Facts
- Use the extension process log to diagnose issues
- Verify the installed appex without the GUI

## Concepts
- React hooks

## Files
- `/Users/<user>/Documents/code/quicklook-extensions`

_Importance: 9 · Confidence: 0.9_
