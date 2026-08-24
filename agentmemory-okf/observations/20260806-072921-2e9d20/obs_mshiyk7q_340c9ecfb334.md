---
type: FileRead
title: Retrieve project data from SQLite database
description: Querying projects with name containing 'CameraGrid'
resource: agentmemory://observation/obs_mshiyk7q_340c9ecfb334
tags: ["SQLite query", "fileread"]
timestamp: 2026-08-06T13:01:26.098842+00:00
source: agentmemory
session_id: 20260806_072921_2e9d20
importance: 2
confidence: 1
---
# Summary

The tool retrieved project data from a SQLite database, but no output was provided.

## Facts
- Command: sqlite3 ~/.hermes/projects.db "SELECT p.slug, p.name, pf.path, pf.is_primary FROM projects p LEFT JOIN project_folders pf ON p.id=pf.project_id WHERE p.name LIKE '%CameraGrid%' OR p.slug LIKE '%cameragrid%";"
- Output: empty string
- Exit code: 0

## Concepts
- SQLite query

## Files
- `.~/.hermes/projects.db`

_Importance: 2 · Confidence: 1_
