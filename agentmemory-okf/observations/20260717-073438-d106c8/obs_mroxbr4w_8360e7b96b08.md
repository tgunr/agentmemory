---
type: Search
title: Search for session lifecycle event patterns
description: Investigating agentmemory.session event publishing
resource: agentmemory://observation/obs_mroxbr4w_8360e7b96b08
tags: ["event-driven architecture", "session lifecycle events", "pub/sub messaging", "trigger configuration", "bug fix documentation", "search"]
timestamp: 2026-07-17T12:38:17.117265+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

Searched for session lifecycle event patterns to understand event publishing architecture. Found that a bug was fixed where session.stopped events weren't being published despite having listeners. The fix ensures api::session::end directly triggers the event, enabling knowledge graph materialization on session end.

## Facts
- Found 5 matches across 3 files for pattern agentmemory.session.(started|stopped|ended)
- CHANGELOG.md documents bug fix: event::session::stopped listener existed but nothing published the topic
- Fix implemented: api::session::end now directly calls sdk.triggerVoid("event::session::stopped", { sessionId })
- src/triggers/events.ts contains trigger configs for session.started (line 56), session.stopped (line 109), and session.ended (line 125)
- Test file test/session-end-triggers-graph.test.ts references the historical bug where no code published agentmemory.session.stopped

## Concepts
- event-driven architecture
- session lifecycle events
- pub/sub messaging
- trigger configuration
- bug fix documentation

## Files
- `CHANGELOG.md`
- `src/triggers/events.ts`
- `test/session-end-triggers-graph.test.ts`

_Importance: 5 · Confidence: 1_
