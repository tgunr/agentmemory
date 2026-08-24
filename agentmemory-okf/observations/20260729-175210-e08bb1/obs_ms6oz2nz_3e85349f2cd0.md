---
type: FileRead
title: React Hooks (sessionPinId)
description: Merge session page into the in-memory list, keeping pinned sessions.
resource: agentmemory://observation/obs_ms6oz2nz_3e85349f2cd0
tags: ["React hooks", "durable lineage_ROOT_id", "fileread"]
timestamp: 2026-07-29T23:04:19.768526+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 7
confidence: 0.9
---
# Summary

The `mergeSessionPage` function merges a fresh server session page into the in-memory list, keeping any rows the server omitted. This is crucial for maintaining conversational context.

## Facts
- Merger function for pinned conversations using session pin IDs
- Deduplication by lineage-level compression

## Concepts
- React hooks
- durable lineage_ROOT_id

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/session.ts`

_Importance: 7 · Confidence: 0.9_
