---
type: file_edit
title: Patch VoidBreath project database
description: Show database query result
resource: agentmemory://observation/obs_ms58baka_42b9083f25e4
tags: ["SQL database query", "Python scripting", "file_edit"]
timestamp: 2026-07-28T22:30:10.231641+00:00
source: agentmemory
session_id: 20260728_172854_00df48
importance: 6
confidence: 1
---
# Summary

The tool executed a command in the terminal to show project data.

## Facts
- Tool used: terminal
- Error: none
- Command executed:
- Command:\n            python3 ~/.hermes/skills/productivity/projects/scripts/projects.py show voidbreath 2>/dev/null || echo &quot;--- Manual check ---&quot; && sqlite3 ~/.hermes/projects.db &quot;SELECT p.name, pf.path, pf.label FROM projects p JOIN project_folders pf ON p.id=pf.project_id WHERE p.slug=&#39;voidbreath;&#39;;&quot;
- Output:\n            VoidBreath|/Users/davec/Projects/VoidBreath|primary

## Concepts
- SQL database query
- Python scripting

_Importance: 6 · Confidence: 1_
