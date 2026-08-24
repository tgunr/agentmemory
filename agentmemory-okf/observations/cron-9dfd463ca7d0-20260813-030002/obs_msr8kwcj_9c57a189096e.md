---
type: file_edit
title: No active window - call capture() first.
description: Loading hook: post_tool_call triggered by tool computer_use with input {"action":"key","capture_after":true,"delivery_mode":"foreground","keys":"cmd+space"}
resource: agentmemory://observation/obs_msr8kwcj_9c57a189096e
tags: ["file_edit"]
timestamp: 2026-08-13T08:08:34.238428+00:00
source: agentmemory
session_id: cron_9dfd463ca7d0_20260813_030002
importance: 8
confidence: 0.85
---
# Summary

The post_tool_call hook was triggered by the computer_use tool but called capture() before a window was active. The system decided to escalate.

## Facts
- "No active window – call capture() first."
- {"error": "no active window"}
- {\"type\": \"verdict\", \"{\"decision\": \"escalate\"}}

_Importance: 8 · Confidence: 0.85_
