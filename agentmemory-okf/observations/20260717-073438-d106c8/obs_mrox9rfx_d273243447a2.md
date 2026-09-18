---
type: FileRead
title: Read observe.ts lines 120-319: observation write logic
description: Core observe function: session limits, agent ID inheritance, image handling, KV write with rollback
resource: agentmemory://observation/obs_mrox9rfx_d273243447a2
tags: ["keyed locking per session", "image reference counting", "observation deduplication", "rollback on write failure", "agent ID inheritance", "vision embeddings", "session observation limits", "fileread"]
timestamp: 2026-07-17T12:36:44.198770+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 7
confidence: 1
---
# Summary

The observe function's write path enforces session limits, inherits agent ID from existing sessions to prevent retroactive scoping, handles image persistence with reference counting, and implements rollback logic for image refs when the KV write fails. This ensures data consistency between observation records and disk-stored images.

## Facts
- File: /Volumes/AI/agentmemory/src/functions/observe.ts, lines 120-319
- Uses keyed lock per session: `obs:${payload.sessionId}`
- Enforces maxObservationsPerSession limit before writing
- Agent ID inherited from existing session row; env AGENT_ID only used when no session exists yet
- Image data saved to disk via saveImageToDisk, ref counted via incrementImageRef/decrementImageRef
- Vision embeddings triggered conditionally when AGENTMEMORY_IMAGE_EMBEDDINGS=true
- Triggers mem::disk-size-delta with bytesWritten on image save
- On KV write failure, rolls back image ref via decrementImageRef (which deletes file only when no other observation references it)
- Dedup map records dedupHash after successful write
- Observations stored via kv.set(KV.observations(sessionId), obsId, raw)

## Concepts
- keyed locking per session
- image reference counting
- observation deduplication
- rollback on write failure
- agent ID inheritance
- vision embeddings
- session observation limits

## Files
- `/Volumes/AI/agentmemory/src/functions/observe.ts`

_Importance: 7 · Confidence: 1_
