---
type: file_edit
title: Remove SQLite read-only mode, add connection timeout
description: Switching from URI-based read-only connection to standard connection with 15s timeout
resource: agentmemory://observation/obs_mrs14keg_459a0e0b8a71
tags: ["SQLite connection modes", "database timeout configuration", "read-only URI vs standard connection", "file_edit"]
timestamp: 2026-07-19T16:47:58.789035+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 5
confidence: 1
---
# Summary

The SQLite connection in the unfinished session audit script was changed from read-only URI mode to a standard connection with a 15-second timeout. This likely resolves locking or compatibility issues encountered when querying session databases, trading read-only safety for improved connection reliability.

## Facts
- File modified: /Users/davec/.hermes/scripts/unfinished_session_audit.py
- Old connection: sqlite3.connect(f"file:{db}?mode=ro", uri=True) — read-only URI mode
- New connection: sqlite3.connect(db, timeout=15) — standard mode with 15-second timeout
- Change at line 64 in the db_paths() iteration loop
- Lint status: ok

## Concepts
- SQLite connection modes
- database timeout configuration
- read-only URI vs standard connection

## Files
- `/Users/davec/.hermes/scripts/unfinished_session_audit.py`

_Importance: 5 · Confidence: 1_
