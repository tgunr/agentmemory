---
type: FileRead
title: sqlite3
description: No specific context provided
resource: agentmemory://observation/obs_ms61aq1z_f67a6190bc6d
tags: ["sqlite", "fileread"]
timestamp: 2026-07-29T12:01:32.516298+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 4
confidence: 0.9
---
# Summary

Ran a SQLite query command to fetch session data using terminal, got output back.

## Facts
- Running the command 'sqlite3 ~/.hermes/profiles/cc/state.db ...' on terminal at <timestamp>2026-07-29T12:01:32.516298+00:00
- The used command was 'sqlite3 ~/.hermes/profiles/cc/state.db "SELECT id, cwd, title FROM sessions WHERE cwd LIKE '%/Volumes/projects/uv%' OR cwd LIKE '%/Volumes/projects/UV%' ORDER BY started_at DESC;" 2>/dev/null' and was executed with exit code 0

## Concepts
- sqlite

## Files
- `/home/user/.hermes/profiles/cc/state.db`

_Importance: 4 · Confidence: 0.9_
