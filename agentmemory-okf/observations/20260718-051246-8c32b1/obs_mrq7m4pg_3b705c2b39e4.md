---
type: CommandRun
title: Inspect Hermes database structure and message counts
description: Analyzing state.db files across multiple profiles
resource: agentmemory://observation/obs_mrq7m4pg_3b705c2b39e4
tags: ["SQLite database inspection", "Full Text Search (FTS)", "multi-profile data architecture", "message indexing", "database schema analysis", "commandrun"]
timestamp: 2026-07-18T10:14:03.601631+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

Executed Python script to analyze Hermes application's SQLite database structure across multiple user profiles. Found 9 profiles with varying message counts, with 'ai' being the most active (18,932 messages). All active profiles implement FTS indexing for efficient message search, indicating a mature data architecture optimized for retrieval.

## Facts
- 69 session entries in top-level sessions/ directory
- 9 profiles found: ai, cc, default, develop, ollama, personal, pveroot, ranch, shop
- 'ai' profile has 18,932 messages (highest count)
- 'cc' profile has 2,012 messages
- 'default' profile has empty database (no tables)
- All active profiles implement FTS (Full Text Search) for message indexing
- Common table structure: schema_version, sessions, messages, compression_locks, state_meta, gateway_routing, plus FTS tables
- jo/ directory contains separate workspace files (.env, .hermes_history, .skills_prompt)

## Concepts
- SQLite database inspection
- Full Text Search (FTS)
- multi-profile data architecture
- message indexing
- database schema analysis

## Files
- `/Users/davec/.hermes/sessions/`
- `/Users/davec/.hermes/profiles/ai/state.db`
- `/Users/davec/.hermes/profiles/cc/state.db`
- `/Users/davec/.hermes/profiles/default/state.db`
- `/Users/davec/.hermes/profiles/develop/state.db`
- `/Users/davec/.hermes/profiles/ollama/state.db`
- `/Users/davec/.hermes/profiles/personal/state.db`
- `/Users/davec/.hermes/profiles/pveroot/state.db`
- `/Users/davec/.hermes/profiles/ranch/state.db`
- `/Users/davec/.hermes/profiles/shop/state.db`
- `/Users/davec/.hermes/jo/`

_Importance: 5 · Confidence: 1_
