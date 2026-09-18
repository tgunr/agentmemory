---
type: file_edit
title: New SQLite profile session data
description: 
resource: agentmemory://observation/obs_ms60mnhm_e17a9fe7d0ce
tags: ["sqlite3 command-line tool", "file_edit"]
timestamp: 2026-07-29T11:42:49.447306+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 5
confidence: 0.9
---
# Summary

The tool terminal was used to execute a SQLite command-line query, and the resulting session data was extracted and redirected to /dev/null for further processing.

## Facts
- Command: sqlite3 ~/.hermes/profiles/cc/state.db "SELECT id, cwd, title FROM sessions ORDER BY started_at DESC;" with output redirected to /dev/null

## Concepts
- sqlite3 command-line tool

## Files
- `/Users/davec/Volumes/Projects/UV/state.db`

_Importance: 5 · Confidence: 0.9_
