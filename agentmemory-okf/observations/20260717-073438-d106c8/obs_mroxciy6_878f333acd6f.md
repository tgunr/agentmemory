---
type: Search
title: Found session event trigger fix in CHANGELOG.md
description: Pattern matched event::session::stopped triggerVoid call
resource: agentmemory://observation/obs_mroxciy6_878f333acd6f
tags: ["event triggering", "session lifecycle management", "knowledge graph extraction", "search"]
timestamp: 2026-07-17T12:38:53.163129+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 7
confidence: 1
---
# Summary

Search found a CHANGELOG entry documenting a bug fix where session stopped events were never automatically fired because nothing published the expected topic. The fix makes api::session::end directly trigger the event with proper error handling to ensure knowledge graph extraction works correctly.

## Facts
- event::session::stopped was never published by any codebase component
- api::session::end now directly calls sdk.triggerVoid("event::session::stopped", { sessionId })
- Call is wrapped in try/catch to prevent fan-out errors from failing HTTP response
- Knowledge graphs now materialize properly after this fix (PR #698, closes #666)

## Concepts
- event triggering
- session lifecycle management
- knowledge graph extraction

## Files
- `/Volumes/AI/agentmemory/CHANGELOG.md`

_Importance: 7 · Confidence: 1_
