---
type: FileRead
title: Hermetest Agent Session Info Event
description: Desktop app event log
resource: agentmemory://observation/obs_msaccn15_d8eddf4f7203
tags: ["session info", "hermes agent", "fileread"]
timestamp: 2026-08-01T12:22:02.389548+00:00
source: agentmemory
session_id: 20260801_070002_fbbb8f
importance: 4
confidence: 0.9
---
# Summary

The Hermes agent consumed a file event from the desktop app source. The content contains session information and was truncated to 330 lines.

## Facts
- File path: /Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-message-stream/gateway-event.ts
- Truncated content: ... "330|          } else {\n331|            notifySessionsChanged()\n332|          }\n333|        }\n334|\n335|        return\n336|      "...

## Concepts
- session info
- hermes agent

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-message-stream/gateway-event.ts`

_Importance: 4 · Confidence: 0.9_
