---
type: CommandRun
title: Checked BlueBubbles application and server log locations on macOS
description: Diagnostic command to locate log files and view recent console output
resource: agentmemory://observation/obs_mrqb5sdi_4ac1e5b574f3
tags: ["macOS logging", "BlueBubbles", "Metal graphics", "AppKit state restoration", "commandrun"]
timestamp: 2026-07-18T11:53:19.587084+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

Executed a diagnostic command to locate BlueBubbles log files and examine recent console output. Found log storage locations in both Application Support and ~/Library/Logs directories. The console logs revealed shader compilation activity via Metal and AppKit state restoration operations, suggesting the application was actively rendering and maintaining UI state during the observed period.

## Facts
- Found one log file: /Users/davec/Library/Application Support/bluebubbles-server/Session Storage/000003.log
- Library/Logs directory contains @bluebubbles and bluebubbles-server subdirectories
- Console logs show Metal shader compilation and AppKit state restoration activities from last 10 minutes
- Process ID 79822 observed with multiple thread activity (4a61f, 4afc5d, 4afc5f, 4a99fc, 4b095f)
- Sidecar-related entries showing 0 connected devices

## Concepts
- macOS logging
- BlueBubbles
- Metal graphics
- AppKit state restoration

## Files
- `/Users/davec/Library/Application Support/bluebubbles-server/Session Storage/000003.log`

_Importance: 4 · Confidence: 1_
