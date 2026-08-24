---
type: CommandRun
title: Query AgentMemory sessions database
description: Retrieve recent session data via sqlite3
resource: agentmemory://observation/obs_mry1q7d3_0091cfa051f4
tags: ["sqlite", "commandrun"]
timestamp: 2026-07-23T21:51:25.379403+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 4
confidence: 0.9
---
# Summary

The tool executed a sqlite3 command to query the AgentMemory sessions database, retrieving recent session data.

## Facts
- User command: "sqlite3 ~/.hermes/profiles/ai/state.db \"SELECT id, title, source, started_at, ended_at, end_reason, message_count, handoff_state FROM sessions ORDER BY started_at DESC LIMIT 20;\" 2>&1"

## Concepts
- sqlite

_Importance: 4 · Confidence: 0.9_
