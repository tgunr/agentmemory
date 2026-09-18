---
type: discovery
title: State store database locations and modification times verified
description: Checked four candidate state store paths across agentmemory locations
resource: agentmemory://observation/obs_mroq03fl_18b02e7d34dc
tags: ["SQLite state store", "agent memory storage", "file modification time diagnostics", "state_store.db", "discovery"]
timestamp: 2026-07-17T09:13:15.868342+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 5
confidence: 1
---
# Summary

Agent ran a diagnostic command to identify active state store databases by checking multiple candidate paths and their mtimes. The most recently modified candidate is /Users/davec/data/agentmemory/data/state_store.db/state.db, suggesting it is the likely active state store. This verification helps determine which database should be inspected for current agent memory state.

## Facts
- /Users/davec/data/agentmemory/data/state_store.db/state.db modified 2026-07-16T13:26:22 (most recent)
- /Users/davec/data/agentmemory/state_store.db modified 2026-07-16T12:37:25
- /Users/davec/data/agentmemory/agentmemory.db modified 2026-07-16T12:07:26
- /Volumes/AI/agentmemory/data/state_store.db modified 2026-07-15T16:39:04 (oldest)
- ls on /Volumes/AI/agentmemory/data/ produced no output (empty or inaccessible)

## Concepts
- SQLite state store
- agent memory storage
- file modification time diagnostics
- state_store.db

## Files
- `/Users/davec/data/agentmemory/state_store.db`
- `/Users/davec/data/agentmemory/data/state_store.db/state.db`
- `/Users/davec/data/agentmemory/agentmemory.db`
- `/Volumes/AI/agentmemory/data/state_store.db`

_Importance: 5 · Confidence: 1_
