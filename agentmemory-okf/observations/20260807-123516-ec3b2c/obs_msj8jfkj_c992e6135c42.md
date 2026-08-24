---
type: file_edit
title: Command with '&' and backgrounding issue
description: Using '&' in command causes error, recommend reusing command with terminal(command=\"<cmd>\", background=true)
resource: agentmemory://observation/obs_msj8jfkj_c992e6135c42
tags: ["backgrounding issues", "file_edit"]
timestamp: 2026-08-07T17:45:16.432388+00:00
source: agentmemory
session_id: 20260807_123516_ec3b2c
importance: 5
confidence: 1
---
# Summary

The terminal tool had an issue with backgrounding in the given command, leading to an error. This observation aims to highlight this issue and provide suggestions on how to improve the script for future runs.

## Facts
- Foreground command uses '&' backgrounding.
- Re-send command without '&' to fix issue.
- Prior to sending with '&'
- Gave exit code -1 (command failed)
- Error message: Foreground command uses '&' backgroundging.
- New timeout value is 20 seconds.
- Working directory path: /Volumes/projects/uv/Camera Grid/.worktrees/webapp
- Prior working directory path was:

## Concepts
- backgrounding issues

_Importance: 5 · Confidence: 1_
