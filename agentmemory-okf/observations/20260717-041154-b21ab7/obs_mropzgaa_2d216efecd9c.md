---
type: CommandRun
title: Explore agentmemory directory for SQLite databases
description: Mapping file structure for agent memory and state storage
resource: agentmemory://observation/obs_mropzgaa_2d216efecd9c
tags: ["SQLite database", "file system exploration", "agent memory storage", "state management", "commandrun"]
timestamp: 2026-07-17T09:12:45.870675+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 4
confidence: 1
---
# Summary

Executed terminal commands to map SQLite database files within the agent memory directory. Discovered a nested structure with empty root-level databases and state databases located inside a data subdirectory.

## Facts
- Root directory /Users/davec/data/agentmemory/ contains 0-byte agentmemory.db and state_store.db
- Nested databases found at /Users/davec/data/agentmemory/data/state_store.db
- A database file exists at /Users/davec/data/agentmemory/data/state_store.db/state.db

## Concepts
- SQLite database
- file system exploration
- agent memory storage
- state management

## Files
- `/Users/davec/data/agentmemory/agentmemory.db`
- `/Users/davec/data/agentmemory/state_store.db`
- `/Users/davec/data/agentmemory/data/state_store.db`
- `/Users/davec/data/agentmemory/data/state_store.db/state.db`

_Importance: 4 · Confidence: 1_
