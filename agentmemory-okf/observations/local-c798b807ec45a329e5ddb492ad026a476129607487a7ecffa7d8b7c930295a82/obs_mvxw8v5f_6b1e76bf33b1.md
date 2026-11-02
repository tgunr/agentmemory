---
type: file_edit
title: Messaging database extraction
description: Extracts rowids and session info from cc/state.db
resource: agentmemory://observation/obs_mvxw8v5f_6b1e76bf33b1
tags: ["SQLite database", "file_edit"]
timestamp: 2026-11-01T13:56:47.663931+00:00
source: agentmemory
session_id: local-c798b807ec45a329e5ddb492ad026a476129607487a7ecffa7d8b7c930295a82
importance: 6
confidence: 1
---
# Summary

The tool execute_code extracts messaging data from cc/state.db.

## Facts
- Tool: execute_code
- Code imports sqlite3 and home directory
- Extracts messaging data in a single call

## Concepts
- SQLite database

## Files
- `/home/.hermes/profiles/cc/state.db`

_Importance: 6 · Confidence: 1_
