---
type: FileRead
title: Err File Not Found
description: Create Eufy project failed
resource: agentmemory://observation/obs_ms60amog_f50090fb19cb
tags: ["script not found", "fileread"]
timestamp: 2026-07-29T11:33:28.525457+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 4
confidence: 0.9
---
# Summary

The command to create a new project failed due to the non-existent script.

## Facts
- Command: python3 ~/.hermes/skills/productivity/projects/scripts/projects.py create eufy --parent uv --path /Volumes/projects/uv/eufy...
- Exit Code: 2, Error Message: Can't open file .../Users/davec/.pyenv/versions/3.13.2/bin/python3: [Errno...

## Concepts
- script not found

_Importance: 4 · Confidence: 0.9_
