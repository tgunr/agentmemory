---
type: CommandRun
title: Search macOS diagnostic reports for openAndSavePanelService crashes
description: Locating AppKit XPC crash logs in DiagnosticReports directories
resource: agentmemory://observation/obs_mrrvgms1_0e77ada2da37
tags: ["macOS crash diagnostics", "AppKit XPC", "openAndSavePanelService", "DiagnosticReports", "commandrun"]
timestamp: 2026-07-19T14:09:24.045508+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 4
confidence: 1
---
# Summary

The command searched macOS diagnostic report directories for crash logs related to the openAndSavePanelService and broader AppKit XPC services. Only one crash report was found, dated July 19, 2026, located in the user's Retired diagnostic reports directory.

## Facts
- Searched user and system DiagnosticReports directories for openAndSavePanelService crashes
- Found single crash report: com.apple.appkit.xpc.openAndSavePanelService-2026-07-19-064722.ips
- Crash occurred on 2026-07-19 at 06:47:22
- Broader search for appkit/xpc crashes yielded no additional reports

## Concepts
- macOS crash diagnostics
- AppKit XPC
- openAndSavePanelService
- DiagnosticReports

## Files
- `/Users/davec/Library/Logs/DiagnosticReports/Retired/com.apple.appkit.xpc.openAndSavePanelService-2026-07-19-064722.ips`

_Importance: 4 · Confidence: 1_
