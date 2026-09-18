---
type: file_edit
title: Lancetools commands run
description: No additional context provided
resource: agentmemory://observation/obs_msna76ez_e3ad2e51ce5a
tags: ["file_edit"]
timestamp: 2026-08-10T13:42:48.632432+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 5
confidence: 0.75
---
# Summary

Ran launchctl commands using curl, returned HTTP 404.

## Facts
- Type: terminal, Command: launchctl list | grep -i agentmemory; echo \"\---\\"; curl -s -m 5 -o /dev/null -w \\quot;HTTP %{http_code}\\n\\quot; http://127.0.0.1:3111
- Error Code: HTTP 404

_Importance: 5 · Confidence: 0.75_
