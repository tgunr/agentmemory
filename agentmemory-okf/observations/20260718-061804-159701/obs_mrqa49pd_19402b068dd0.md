---
type: Search
title: Search for agentmemory_observer files in .hermes directory
description: Found 50 files including debug log and various profile state databases
resource: agentmemory://observation/obs_mrqa49pd_19402b068dd0
tags: ["file search", "hermes state management", "agentmemory observer", "SQLite WAL/SHM files", "multi-profile architecture", "search"]
timestamp: 2026-07-18T11:24:09.119031+00:00
source: agentmemory
session_id: 20260718_061804_159701
importance: 3
confidence: 1
---
# Summary

Searched for files matching agentmemory_observer pattern in the .hermes directory. Found 50 files including the main debug log and numerous profile state databases. Results were truncated with one file omitted for containing credentials.

## Facts
- Search path: /Users/davec/.hermes
- File glob pattern: *agentmemory_observer*
- Found 50 files (results truncated)
- Key file found: /Users/davec/.hermes/agentmemory_observer_debug.log
- Multiple profile directories with state.db files (shop, ranch, pveroot, personal, ollama, develop, cc, ai)
- 1 result omitted due to credential/secret content

## Concepts
- file search
- hermes state management
- agentmemory observer
- SQLite WAL/SHM files
- multi-profile architecture

## Files
- `/Users/davec/.hermes/agentmemory_observer_debug.log`
- `/Users/davec/.hermes/state.db`
- `/Users/davec/.hermes/profiles/shop/state.db-wal`
- `/Users/davec/.hermes/profiles/ranch/state.db-wal`
- `/Users/davec/.hermes/profiles/pveroot/state.db-wal`
- `/Users/davec/.hermes/profiles/personal/state.db-wal`
- `/Users/davec/.hermes/profiles/ollama/state.db-wal`
- `/Users/davec/.hermes/profiles/develop/state.db-wal`
- `/Users/davec/.hermes/profiles/cc/state.db-wal`
- `/Users/davec/.hermes/profiles/ai/state.db-wal`

_Importance: 3 · Confidence: 1_
