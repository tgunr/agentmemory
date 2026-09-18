---
type: CommandRun
title: DB prune discovery: 31 empty sessions, 23 are parents
description: Backed up ~/.hermes/state.db and queried for sessions with <=1 message
resource: agentmemory://observation/obs_mrq8tkqy_59dbb14b6099
tags: ["SQLite pruning", "Session lineage", "Database backup", "Relational integrity", "commandrun"]
timestamp: 2026-07-18T10:47:50.599660+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

Executed a Python script to identify near-empty sessions in the Hermes SQLite database for pruning. Found 31 candidates with &lt;=1 message, but discovered 23 are still referenced as parent sessions, meaning they cannot be safely deleted without breaking lineage.

## Facts
- Backed up ~/.hermes/state.db to state.db.bak.prune.&lt;timestamp&gt;
- SQLite database contains tables: sessions, messages
- 31 sessions have &lt;= 1 actual message rows
- 23 of these candidate sessions are referenced as parent_session_id by other sessions
- Pruning these 23 sessions would break session lineage

## Concepts
- SQLite pruning
- Session lineage
- Database backup
- Relational integrity

## Files
- `~/.hermes/state.db`

_Importance: 5 · Confidence: 1_
