---
type: file_edit
title: mcp__agentmemory__memory_lesson_save
description: Recurring outage of Hermes WebUI (port 8787) on Mac
resource: agentmemory://observation/obs_msg1zkil_b7c402df90a1
tags: ["file_edit"]
timestamp: 2026-08-05T12:18:33.497628+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 6
confidence: 0.75
---
# Summary

Recurring outage of Hermes WebUI (port 8787) on Mac. The solution involves loading the ai.hermes.webui.plistLaunchAgent file and restarting it with the ai.hermes.webui-watchdog.plist for auto-restart.

## Facts
- PV&E MikroTik->Apache->Mac chain, 503 error code indicates Mac-side Hermes WebUI is DOWN
- AH00957 error in apache logs due to failed connection attempt to 10.1.2.7:8787

_Importance: 6 · Confidence: 0.75_
