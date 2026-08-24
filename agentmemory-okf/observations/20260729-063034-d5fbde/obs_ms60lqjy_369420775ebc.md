---
type: file_edit
title: Extracting CWD from sqlite database
description: Running sqlite command within Hermes profile directory
resource: agentmemory://observation/obs_ms60lqjy_369420775ebc
tags: ["file_edit"]
timestamp: 2026-07-29T11:42:06.762624+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 6
confidence: 0.75
---
# Summary

The code executed a SQLite command to extract the current working directory from Hermes profiles, demonstrating routine database operations.

## Facts
- Tool used: terminal
- Command executed: sqlite3 ~/.hermes/profiles/cc/state.db \"SELECT DISTINCT cwd FROM sessions ORDER BY cwd;\"

_Importance: 6 · Confidence: 0.75_
