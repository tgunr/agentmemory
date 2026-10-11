---
type: file_edit
title: Execute code with sqlite3
description: Read table schema in Hermes DB
resource: agentmemory://observation/obs_mv0src4c_6bed8cc8f5c1
tags: ["SQL database schema", "file_edit"]
timestamp: 2026-10-09T10:02:47.194287+00:00
source: agentmemory
session_id: 20261009_030534_37b4eb
importance: 7
confidence: 1
---
# Summary

Executed SQL query to extract table schema from Hermes DB.
The output contains 40 table names, which may be useful for future analysis.

## Facts
- Tool: execute_code
- Input code: import sqlite3, time\ndb='/Users/davec/.hermes/state.db'\ncon=sqlite3.connect(f'file:{db}?mode=ro', uri=True)\ncur=con.cursor()\nprint([r[0] for r in cur.execute(\"select name from sqlite_master where type='table'\")][:40])\n
- Output: ['schema_version', 'sessions', 'messages', 'sqlite_sequence', ...]

## Concepts
- SQL database schema

## Files
- `/Users/davec/.hermes/state.db`

_Importance: 7 · Confidence: 1_
