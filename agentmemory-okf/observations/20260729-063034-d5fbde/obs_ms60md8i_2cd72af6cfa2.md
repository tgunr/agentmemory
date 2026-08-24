---
type: FileRead
title: SQLite query
description: Fetched session data
resource: agentmemory://observation/obs_ms60md8i_2cd72af6cfa2
tags: ["Database queries", "fileread"]
timestamp: 2026-07-29T11:42:36.159783+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 5
confidence: 0.9
---
# Summary

The terminal tool executed a SQLite query to retrieve session data and displayed the results.

## Facts
- Selected query: sqlite3 ~/.hermes/profiles/cc/state.db ""SELECT id, cwd, title, display_name FROM sessions ORDER BY started_at DESC LIMIT 10;" "
- Output table columns: id, cwd, title, display_name

## Concepts
- Database queries

_Importance: 5 · Confidence: 0.9_
