---
type: CommandRun
title: Killed stale openAndSavePanelService XPC processes
description: macOS save/open panel service restart
resource: agentmemory://observation/obs_mrrvrgb1_8d35434d0d09
tags: ["XPC service", "AppKit openAndSavePanelService", "macOS process management", "pkill", "commandrun"]
timestamp: 2026-07-19T14:17:48.873290+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 3
confidence: 1
---
# Summary

The agent attempted to restart the macOS open/save panel XPC service by killing existing instances, expecting it to relaunch on demand. However, two instances of the service were still present immediately after termination, indicating it respawned automatically or is required by the system.

## Facts
- Command ran: pkill -f "com.apple.appkit.xpc.openAndSavePanelService" successfully killed stale instances
- Verification showed two processes still/again running: PID 245 and PID 56675
- Process path: /System/Library/Frameworks/AppKit.framework/Versions/C/XPCServices/com.apple.appkit.xpc.openAndSavePanelService.xpc/Contents/MacOS/com.apple.appkit.xpc.openAndSavePanelService
- Exit code was 0, no errors reported

## Concepts
- XPC service
- AppKit openAndSavePanelService
- macOS process management
- pkill

## Files
- `/System/Library/Frameworks/AppKit.framework/Versions/C/XPCServices/com.apple.appkit.xpc.openAndSavePanelService.xpc/Contents/MacOS/com.apple.appkit.xpc.openAndSavePanelService`

_Importance: 3 · Confidence: 1_
