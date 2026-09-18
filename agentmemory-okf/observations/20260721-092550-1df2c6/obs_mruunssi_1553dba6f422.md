---
type: FileRead
title: Desktop Agent Session Row TSX Code
description: Apart from the `data-working` property being set, most properties have no specific value.
resource: agentmemory://observation/obs_mruunssi_1553dba6f422
tags: ["fileread"]
timestamp: 2026-07-21T16:10:17.342165+00:00
source: agentmemory
session_id: 20260721_092550_1df2c6
importance: 4
confidence: 0.75
---
# Summary

A file read operation was performed on the desktop agent, likely triggering a render of session row TSX code.

## Facts
- The function `writeSessionDrag` is called with a `dataTransfer` object.
- The event `event.preventDefault()` and `event.stopPropagation()` are used.

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/session-row.tsx`

_Importance: 4 · Confidence: 0.75_
