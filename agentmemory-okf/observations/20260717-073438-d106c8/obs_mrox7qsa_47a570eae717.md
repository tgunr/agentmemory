---
type: Search
title: Search for session lifecycle event patterns across codebase
description: Found 11 matches in 8 files related to session start/stop/ended events
resource: agentmemory://observation/obs_mrox7qsa_47a570eae717
tags: ["session lifecycle events", "event triggers", "graph extraction", "search"]
timestamp: 2026-07-17T12:35:10.040211+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 6
confidence: 1
---
# Summary

Search revealed how session lifecycle events are tracked across the codebase. The events.ts file defines triggers for session.started, stopped, and ended topics. The CHANGELOG and test file confirm that session.stopped was previously an untriggered event, which was fixed in PR #698 where api.session.end now directly triggers event.session.stopped.

## Facts
- Found session lifecycle patterns in CHANGELOG.md, verify.ts, diagnostics.ts, evict.ts, profile.ts, and test files
- events.ts defines three triggers: agentmemory.session.started, agentmemory.session.stopped, agentmemory.session.ended
- CHANGELOG notes session.stopped event was never published before PR #698 fix
- session-end-triggers-graph.test.ts explicitly documents the missing session.stopped publication issue

## Concepts
- session lifecycle events
- event triggers
- graph extraction

## Files
- `./CHANGELOG.md`
- `./src/functions/verify.ts`
- `./src/functions/diagnostics.ts`
- `./src/functions/evict.ts`
- `./src/functions/profile.ts`
- `./test/session-end-triggers-graph.test.ts`
- `./src/triggers/events.ts`
- `./plugin/scripts/diagnostics.mjs`

_Importance: 6 · Confidence: 1_
