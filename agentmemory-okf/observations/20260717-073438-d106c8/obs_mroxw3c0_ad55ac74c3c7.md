---
type: CommandRun
title: Test hermes-sessions.ts title resolution logic
description: Verifies resolveSessionTitle and lookupHermesSessionByKey against SQLite DB
resource: agentmemory://observation/obs_mroxw3c0_ad55ac74c3c7
tags: ["SQLite session state", "TypeScript test execution", "Session title resolution", "Fallback logic", "commandrun"]
timestamp: 2026-07-17T12:54:06.044549+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

A TypeScript test script was created and executed via tsx to verify session title resolution functions. The tests confirmed that Hermes DB titles take precedence, explicit fallbacks work correctly for unknown IDs, and database lookups return the expected session objects.

## Facts
- Tested resolveSessionTitle and lookupHermesSessionByKey from /Volumes/AI/agentmemory/src/state/hermes-sessions.ts
- Target SQLite DB: ~/.hermes/profiles/ai/state.db
- Hermes session ID 20260705_063647_f957b4 resolved to title "AI Profile Stays After New Session"
- Explicit fallback correctly returns provided string for unknown IDs; returns undefined if no fallback
- lookupHermesSessionByKey returns full session object containing id and title

## Concepts
- SQLite session state
- TypeScript test execution
- Session title resolution
- Fallback logic

## Files
- `/Volumes/AI/agentmemory/src/state/hermes-sessions.ts`

_Importance: 5 · Confidence: 1_
