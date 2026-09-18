---
type: Search
title: Search for vector index functions in search.ts
description: Found vectorIndexRemove and embedding provider functions with persistence sync documentation
resource: agentmemory://observation/obs_mroqadf1_502fa0b5fd76
tags: ["vector index", "persistence sync", "embedding provider", "memory management", "crash recovery", "search"]
timestamp: 2026-07-17T09:21:15.370034+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 1
---
# Summary

Searched for vector index manipulation functions in search.ts. Found vectorIndexRemove along with embedding provider management functions. The code includes critical documentation about a persistence sync hook that prevents deleted entries from resurrecting after crashes by ensuring index removals are persisted beyond in-memory state.

## Facts
- File contains vectorIndexRemove function that calls vectorIndex?.remove(id)
- Persistence sync hook prevents index resurrection after crash/SIGKILL by syncing removals to disk
- Hook is wired by src/index.ts after IndexPersistence construction; no-op until then
- Functions setEmbeddingProvider and getEmbeddingProvider manage embedding provider state

## Concepts
- vector index
- persistence sync
- embedding provider
- memory management
- crash recovery

## Files
- `/Volumes/AI/agentmemory/src/functions/search.ts`

_Importance: 5 · Confidence: 1_
