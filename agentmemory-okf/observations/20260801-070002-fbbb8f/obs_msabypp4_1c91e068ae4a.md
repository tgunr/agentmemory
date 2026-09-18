---
type: file_edit
title: Detecting project database file and active ID in hermes cli
description: 
resource: agentmemory://observation/obs_msabypp4_1c91e068ae4a
tags: ["React Hooks", "Python pdb library and project database usage", "file_edit"]
timestamp: 2026-08-01T12:11:12.659416+00:00
source: agentmemory
session_id: 20260801_070002_fbbb8f
importance: 7
confidence: 0.9
---
# Summary

The function post_tool_call was executed in the terminal tool, which searched for specific files with grep. In hermesCli, the file projects_db.py from /Users/davec/.hermes/hermes-agent/ was found, as well as grep output displaying the active ID.

## Facts
- Found path to projects_db.py in /Users/davec/.hermes/hermes-agent/ and grep output containing active ID strings
- In hermes_cli projects.db, methods_config.py file, functions def set_active and use of _ok with rid = {\"projects\": [], \"active_id\": None, \"scoped_session_ids\": []}

## Concepts
- React Hooks
- Python pdb library and project database usage

## Files
- `/Users/davec/.hermes/hermes-agent/Projects.Database.Py`

_Importance: 7 · Confidence: 0.9_
