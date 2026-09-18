---
type: Search
title: Search for session lifecycle events and publish calls
description: Investigating session.started/stopped/ended topics and event publishing
resource: agentmemory://observation/obs_mroxbe28_0514cc4fd2b6
tags: ["Event-driven architecture", "Session lifecycle management", "Pub/Sub messaging topics", "Knowledge graph extraction triggers", "search"]
timestamp: 2026-07-17T12:38:00.167945+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 7
confidence: 1
---
# Summary

Searched the codebase for session lifecycle events and event publishing mechanisms to understand how session state changes are handled. The search revealed that session topics are defined in events.ts and a recent fix (PR #698) resolved a critical bug where the session.stopped event was never published, which previously prevented knowledge graph extraction from triggering on session end.

## Facts
- Found 11 matches across 8 files for session lifecycle and publish patterns.
- src/triggers/events.ts defines topics: agentmemory.session.started, agentmemory.session.stopped, agentmemory.session.ended.
- CHANGELOG.md notes PR #698 fixed a bug where agentmemory.session.stopped was never published; api::session::end now triggers it directly via sdk.triggerVoid.
- Multiple files (diagnostics.ts, profile.ts, verify.ts, evict.ts, diagnostics.mjs) reference session.startedAt for age and time calculations.
- test/session-end-triggers-graph.test.ts tests the graph extraction trigger on session end, which previously failed due to the missing publish call.

## Concepts
- Event-driven architecture
- Session lifecycle management
- Pub/Sub messaging topics
- Knowledge graph extraction triggers

## Files
- `./src/triggers/events.ts`
- `./CHANGELOG.md`
- `./src/functions/diagnostics.ts`
- `./src/functions/profile.ts`
- `./src/functions/verify.ts`
- `./src/functions/evict.ts`
- `./plugin/scripts/diagnostics.mjs`
- `./test/session-end-triggers-graph.test.ts`

_Importance: 7 · Confidence: 1_
