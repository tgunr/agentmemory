---
type: file_edit
title: mcp__desktop_commander__start_process
description: launchd plist and BB config.json search
resource: agentmemory://observation/obs_msr6g2zk_baba5fcd3ad5
tags: ["launchd", "PList", "data directory", "file_edit"]
timestamp: 2026-08-13T07:08:50.325506+00:00
source: agentmemory
session_id: 20260812_081748_d67311
importance: 7
confidence: 1
---
# Summary

The mcp__desktop_commander__start_process tool was run with a command that searched the system for specific plist files and config.json files.

## Facts
- Process started with PID 2127 (shell: /bin/zsh)
- The process outputs two sections of interest:
- Past output:\n=== BB launchd plist (exec + data dir) ===<br>\nlater output:\n\n=== candidate data dirs ===

## Concepts
- launchd
- PList
- data directory

## Files
- `/bin/zsh`
- `/Users/[username]/Library/LaunchAgents/com.bluebubbles.server.plist`
- `[non-existent/path]`

_Importance: 7 · Confidence: 1_
