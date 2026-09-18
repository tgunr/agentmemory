---
type: CommandRun
title: Diagnostic checks on agentmemory state and API
description: Investigating state store structure, config, and sessions API
resource: agentmemory://observation/obs_mrtcgox3_397f4e5717fc
tags: ["agentmemory state structure", "sessions API endpoint", "iii-config.yaml configuration", "SQLite directory vs file", "commandrun"]
timestamp: 2026-07-20T14:53:06.467317+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

Executed diagnostic commands to inspect agentmemory system state. Discovered state_store.db is actually a directory structure, config is minimal, and port 3113 runs a sessions API returning structured session metadata including project paths and observation counts.

## Facts
- state_store.db at /Users/davec/data/agentmemory/data/state_store.db is a directory, not a file
- stream_store directory exists at /Users/davec/data/agentmemory/data/stream_store
- iii-config.yaml at /Users/davec/.agentmemory/iii-config.yaml contains only default_timeout: 180000 (no model/llm config found)
- No viewer JS files found in /Volumes/AI/agentmemory/dist/viewer
- Port 3113 serves /sessions endpoint returning JSON with session metadata
- Session data structure includes: cwd, id, observationCount, project, startedAt, status, updatedAt

## Concepts
- agentmemory state structure
- sessions API endpoint
- iii-config.yaml configuration
- SQLite directory vs file

## Files
- `/Users/davec/data/agentmemory/data/state_store.db`
- `/Users/davec/data/agentmemory/data/stream_store`
- `/Users/davec/.agentmemory/iii-config.yaml`

_Importance: 5 · Confidence: 1_
