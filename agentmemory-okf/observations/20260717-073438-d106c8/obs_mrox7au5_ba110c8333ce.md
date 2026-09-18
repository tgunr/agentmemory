---
type: FileRead
title: Read hermes-sessions.ts - Hermes SQLite session bridge
description: agentmemory module bridging Hermes session DB to internal Session format
resource: agentmemory://observation/obs_mrox7au5_ba110c8333ce
tags: ["SQLite session storage", "better-sqlite3 readonly access", "session enrichment pattern", "Hermes agent integration", "KV store observation counting", "graceful degradation on DB failure", "fileread"]
timestamp: 2026-07-17T12:34:49.369291+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

This module bridges Hermes agent sessions (stored in SQLite) to agentmemory's internal Session format. It provides read-only access to the Hermes DB for title lookups and session listing, then enriches sessions with observation counts from agentmemory's own KV store. All DB errors are handled gracefully and logged, never throwing.

## Facts
- File: /Volumes/AI/agentmemory/src/state/hermes-sessions.ts
- Default Hermes DB path: ~/.hermes/profiles/ai/state.db
- Uses better-sqlite3 in readonly mode for session lookups
- Hermes schema: id, source, user_id, started_at, ended_at, cwd, git_branch, model, title
- lookupHermesSessionTitle returns title trimmed to 200 chars, undefined on failure (non-fatal)
- hermesToAgentmemory maps Hermes row to Session type with status "completed" or "active" based on ended_at
- enrichWithObservationCounts populates observationCount from StateKV store
- tsToIso converts Unix seconds to ISO 8601 string
- Imports: CompressedObservation/Session from types.js, KV from schema.js, StateKV from kv.js

## Concepts
- SQLite session storage
- better-sqlite3 readonly access
- session enrichment pattern
- Hermes agent integration
- KV store observation counting
- graceful degradation on DB failure

## Files
- `/Volumes/AI/agentmemory/src/state/hermes-sessions.ts`

_Importance: 5 · Confidence: 1_
