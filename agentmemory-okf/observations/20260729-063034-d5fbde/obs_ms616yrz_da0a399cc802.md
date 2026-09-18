---
type: file_edit
title: SQLite query over Hermes profile
description: No additional context provided
resource: agentmemory://observation/obs_ms616yrz_da0a399cc802
tags: ["file_edit"]
timestamp: 2026-07-29T11:58:37.197952+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 7
confidence: 0.75
---
# Summary

The agent executed a SQLite query using the terminal to retrieve distinct CWD values from Hermes profile state.db, specifically those matching '/Volumes/projects/UV%'.

## Facts
- Tool used: terminal
- Command issued: sqlite3 ~/.hermes/profiles.cc/state.db "SELECT DISTINCT cwd FROM sessions WHERE cwd LIKE '%/Volumes/projects/uv%' OR cwd LIKE '/Volumes/projects/UV%';"

## Files
- `/Volumes/projects/state.db`

_Importance: 7 · Confidence: 0.75_
