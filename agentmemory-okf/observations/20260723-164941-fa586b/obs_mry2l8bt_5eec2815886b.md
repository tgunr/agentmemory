---
type: FileRead
title: DB Pragma command
description: Ai state database queried
resource: agentmemory://observation/obs_mry2l8bt_5eec2815886b
tags: ["sqlite3", "PRAGMA", "sessions table", "fileread"]
timestamp: 2026-07-23T22:15:32.964920+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 5
confidence: 0.9
---
# Summary

The ai tool executed a sqlite3 command to query the state database, retrieving information about the sessions table.

## Facts
- Executed sqlite3 command on ~/.hermes/profiles/ai/state.db with PRAGMA table_info(sessions)
- Output format: table with multiple columns and fields for meta-data

## Concepts
- sqlite3
- PRAGMA
- sessions table

_Importance: 5 · Confidence: 0.9_
