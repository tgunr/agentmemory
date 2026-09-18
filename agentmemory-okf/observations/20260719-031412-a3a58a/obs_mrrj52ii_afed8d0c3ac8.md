---
type: Search
title: Discover Hermes profiles directory structure
description: Search reveals multiple profiles with standardized state, logs, and cache files
resource: agentmemory://observation/obs_mrrj52ii_afed8d0c3ac8
tags: ["Hermes profiles", "SQLite WAL mode", "application state management", "directory structure", "search"]
timestamp: 2026-07-19T08:24:29.176198+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

The agent searched the Hermes profiles directory to understand its structure. The search revealed multiple distinct profiles each maintaining a consistent set of SQLite state databases (using WAL mode), log files, caches, and configuration files. This provides context on how Hermes manages isolated environments or workspaces.

## Facts
- Searched /Users/davec/.hermes/profiles with pattern *, limit 50
- Results truncated at 50 files
- Profiles identified: ranch, pveroot, personal, ollama, develop, cc, shop
- Standard profile structure includes SQLite state files (state.db, state.db-wal, state.db-shm)
- Profiles contain logs (agent.log, gui.log, mcp-stderr.log), cron jobs, JSON caches, skills, memories, and auth.json

## Concepts
- Hermes profiles
- SQLite WAL mode
- application state management
- directory structure

## Files
- `/Users/davec/.hermes/profiles`

_Importance: 4 · Confidence: 1_
