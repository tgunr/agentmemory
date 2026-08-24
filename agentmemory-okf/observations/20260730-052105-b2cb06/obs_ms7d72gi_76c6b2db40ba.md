---
type: file_edit
title: SQLite query execution on Hermes project db
description: Execute SQL query on database to retrieve discovered repos
resource: agentmemory://observation/obs_ms7d72gi_76c6b2db40ba
tags: ["SQL execution", "file_edit"]
timestamp: 2026-07-30T10:22:23.535174+00:00
source: agentmemory
session_id: 20260730_052105_b2cb06
importance: 6
confidence: 1
---
# Summary

Executed a SQLite query to retrieve discovered repos, and retrieved data successfully.

## Facts
- SQL command: sqlite3 ~/.hermes/profiles/cc/projects.db "SELECT * FROM discovered_repos WHERE root LIKE '%uv%' OR root LIKE '%UV%';"
- Output: {}
- Exit code: 0

## Concepts
- SQL execution

## Files
- `~/.hermes/profiles/cc/projects.db`

_Importance: 6 · Confidence: 1_
