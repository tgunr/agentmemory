---
type: file_write
title: Created SQLite cleanup script for pruning empty Hermes stub sessions
description: Safely removes sessions with <= 1 message and reparents child sessions
resource: agentmemory://observation/obs_mrq8zst8_819e4a0f5e1f
tags: ["SQLite database cleanup", "session hygiene maintenance", "cascade deletion safety", "file_write"]
timestamp: 2026-07-18T10:52:40.985251+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

Created a Python utility script that safely prunes empty stub sessions from Hermes state.db by first backing up the database, identifying sessions with one or fewer messages, reparenting any real child sessions to prevent dangling references, then deleting the stub messages and sessions in batch operations.

## Facts
- Script backs up state.db with timestamp before modifications
- Identifies stub sessions with fetchall() having <= 1 message
- Reparents real children by setting parent_session_id=NULL before deletion
- Deletes stub session messages then sessions in batch operations
- Verifies no dangling parent_session_id references remain after cleanup

## Concepts
- SQLite database cleanup
- session hygiene maintenance
- cascade deletion safety

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-session-hygiene/scripts/prune_stubs.py`

_Importance: 5 · Confidence: 1_
