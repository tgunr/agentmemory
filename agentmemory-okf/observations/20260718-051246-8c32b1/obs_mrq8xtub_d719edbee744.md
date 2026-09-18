---
type: file_write
title: Created prune-stub-sessions.py utility script
description: Python script to safely remove empty stub sessions from Hermes state.db
resource: agentmemory://observation/obs_mrq8xtub_d719edbee744
tags: ["SQLite database maintenance", "session pruning", "data cleanup scripts", "file_write"]
timestamp: 2026-07-18T10:51:09.006270+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

Created a maintenance utility script for cleaning up empty stub sessions from Hermes SQLite databases. The script identifies sessions with minimal messages, fixes parent references to avoid dangling pointers, and safely deletes them with backup and verification.

## Facts
- Script written to scripts/prune-stub-sessions.py in hermes-workspace-context skill
- Script prunes sessions with <= max-msgs actual message rows (default 1)
- Handles dangling parent_session_id references before deletion
- Dry-run by default with --apply flag required for actual changes
- Creates timestamped backup before applying deletions

## Concepts
- SQLite database maintenance
- session pruning
- data cleanup scripts

## Files
- `scripts/prune-stub-sessions.py`

_Importance: 5 · Confidence: 1_
