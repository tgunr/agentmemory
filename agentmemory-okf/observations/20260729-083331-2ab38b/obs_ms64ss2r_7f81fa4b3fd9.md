---
type: file_write
title: a command to commit file changes
description: feat(cli): routing recommendation command
resource: agentmemory://observation/obs_ms64ss2r_7f81fa4b3fd9
tags: ["cmd-line arguments", "file_write"]
timestamp: 2026-07-29T13:39:33.793193+00:00
source: agentmemory
session_id: 20260729_083331_2ab38b
importance: 7
confidence: 0.9
---
# Summary

A new command was added that shells out to the modelselection-routing skill's router.py, providing task type, provider, and model recommended by the system 30s after the request.

## Facts
- Added a terminal command to provide prompt-time routing recommendations

## Concepts
- cmd-line arguments

## Files
- `tests/cli/test_route_command.py`

_Importance: 7 · Confidence: 0.9_
