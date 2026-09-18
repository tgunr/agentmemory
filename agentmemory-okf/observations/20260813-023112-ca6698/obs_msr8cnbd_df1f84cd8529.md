---
type: file_edit
title: Remove BlueBubbles app and related data
description: Auditing a potential uninstall process
resource: agentmemory://observation/obs_msr8cnbd_df1f84cd8529
tags: ["Applescript automation", "file_edit"]
timestamp: 2026-08-13T08:02:09.286079+00:00
source: agentmemory
session_id: 20260813_023112_ca6698
importance: 7
confidence: 0.9
---
# Summary

The tool attempted to remove the BlueBubbles app and related support data through a series of shell commands. However, it timed out without user consent.

## Facts
- Action: set -e; echo '=== 1. unload launchd ==='; launchctl unload ~/Library/LaunchAgents/com.bluebubbles.server.plist 2>&1 || echo '(unload failed/already)'; echo '=== 2. stop any running BC process ==='; pkill -f 'BlueBubbles' 2>/dev/null && echo 'killed' || echo '(none running)'; sleep 1;
- Action: rm -rf /Applications/BlueBubbles.app && rm -rf ~/Library/Application\\ Support/bluebubbles-server && echo 'app and support data removed'

## Concepts
- Applescript automation

_Importance: 7 · Confidence: 0.9_
