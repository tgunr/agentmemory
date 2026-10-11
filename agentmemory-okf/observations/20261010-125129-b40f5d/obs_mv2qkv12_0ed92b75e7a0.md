---
type: file_edit
title: Statusbar Items
description: Changes to use-statusbar-items.tsx
resource: agentmemory://observation/obs_mv2qkv12_0ed92b75e7a0
tags: ["Relay optimization", "file_edit"]
timestamp: 2026-10-10T18:37:18.227708+00:00
source: agentmemory
session_id: 20261010_125129_b40f5d
importance: 8
confidence: 0.9
---
# Summary

The update to stop waiting on Relay after one stalled compaction mark fixes a performance issue. This change ensures that the system no longer wastes resources waiting for a stalled compaction mark.

## Facts
- Commit: d27fa8b805 fix(relay): stop waiting on Relay after one stalled compaction mark

## Concepts
- Relay optimization

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/shell/hooks/use-statusbar-items.tsx`

_Importance: 8 · Confidence: 0.9_
