---
type: Observation
title: terminal
description: {"command":"echo \"### restart LaunchAgent to relaunch worker with deps present ###\"\nlaunchctl unload ~/Library/Launc…
resource: agentmemory://observation/obs_mrtfnj1w_9318c2a82db3
tags: ["observation"]
timestamp: 2026-07-20T16:22:24.303828+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"command":"echo \"### restart LaunchAgent to relaunch worker with deps present ###\"\nlaunchctl unload ~/Library/LaunchAgents/com.github.agentmemory.plist 2>&1 | head -1\nsleep 2\nlaunchctl load ~/Library/LaunchAgents/com.github.agentmemory.plist 2>&1 | head -1\necho \"waiting for REST worker...\"\nfor i in $(seq 1 45); do\n  code=$(curl -s -o /dev/null -w \"%{http_code}\" --max-time 3 http://12…

_Importance: 5 · Confidence: 0.3_
