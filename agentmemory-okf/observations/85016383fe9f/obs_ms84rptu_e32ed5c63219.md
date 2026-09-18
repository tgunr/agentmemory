---
type: file_edit
title: Running command to check active and default profiles
description: No output from SQLite query
resource: agentmemory://observation/obs_ms84rptu_e32ed5c63219
tags: ["SQLite", "project management tables", "file_edit"]
timestamp: 2026-07-30T23:14:16.572996+00:00
source: agentmemory
session_id: 85016383fe9f
importance: 5
confidence: 0.9
---
# Summary

Retrieved information on active and default profiles from SQLite query result.

## Facts
- Tool used: terminal
- Command string:** echo \"=== active profile ===\" && cat ~/.hermes/active-profile.json 2>/dev/null || echo \"(none)\"; echo; echo \"=== default profile projects ===\" && sqlite3 ~/.hermes/profiles/default/projects.db \"SELECT p.name, pf.path, pf.label, pf.is_primary FROM projects p JOIN project_folders pf ON p.id=pf.project_id ORDER BY p.name;\" 2>/dev/null || echo \"(none in default)\"**

## Concepts
- SQLite
- project management tables

## Files
- `.hermes/active-profile.json`
- `.hermes/profiles/default/projects.db`

_Importance: 5 · Confidence: 0.9_
