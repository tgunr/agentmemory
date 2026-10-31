---
type: Observation
title: terminal: Execute shell script using SSH
description: Retrieve session and project data from database
resource: agentmemory://observation/obs_mvugoqph_1374496df0dd
tags: ["SQL query, SQLite, SSH command", "observation"]
timestamp: 2026-10-30T04:17:56.016007+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 6
confidence: 1
---
# Summary

The script executes a shell command using SSH to retrieve session and project data from a SQLite database. The output is displayed

## Facts
- Timestamp: 2026-10-30T04:17:56.016007+00:00
- Tool: terminal
- Input: { "command": "ssh pro.local 'echo \\"--- sessions cwd groups:\\\\"; sqlite3 ~/.hermes/state.db \\"select cwd, count(*) from sessions group by cwd order by 2 desc limit 20\\\\" 2>&1; echo \\\\"--- projects.db schema+rows:\\\\"; sqlite3 ~/.hermes/projects.db \".tables\" 2>&1' 2>&1 | head -40" }

## Concepts
- SQL query, SQLite, SSH command

## Files
- `/root/.hermes/state.db`
- `/root/.hermes/projects.db`

_Importance: 6 · Confidence: 1_
