---
type: CommandRun
title: Query SQLite state database for sessions table structure and recent entries
description: Inspecting ~/.hermes/profiles/ai/state.db schema and data
resource: agentmemory://observation/obs_mrox87k5_2f88e5d030cf
tags: ["SQLite database inspection", "State database schema", "Session metadata tracking", "commandrun"]
timestamp: 2026-07-17T12:35:31.776573+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 4
confidence: 1
---
# Summary

Executed SQLite query to inspect the database schema and examine recent session records. The database contains a sessions table with extensive metadata including token usage, costs, git context, and handoff information. Recent sessions show activity related to agentmemory diagnostics and fixes.

## Facts
- Database path: ~/.hermes/profiles/ai/state.db
- Found 19 tables including sessions, messages, compression_locks, gateway_routing
- sessions table has 38 columns including token counts, costs, git info, handoff state
- 5 most recent sessions all have source='tui' and started_at timestamps around July 17, 2026
- Recent session titles include "Agentmemory service status check" and "agentmemory not running fix"

## Concepts
- SQLite database inspection
- State database schema
- Session metadata tracking

## Files
- `~/.hermes/profiles/ai/state.db`

_Importance: 4 · Confidence: 1_
