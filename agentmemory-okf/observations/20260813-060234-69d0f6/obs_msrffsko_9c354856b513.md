---
type: file_edit
title: Echo '=== comfyui launch test (abs path) ===' to output and execute command with backgrounding
description: Running comfortableui-mcp
resource: agentmemory://observation/obs_msrffsko_9c354856b513
tags: ["backgrounding", "command execution", "bottlenecking", "file_edit"]
timestamp: 2026-08-13T11:20:33.319739+00:00
source: agentmemory
session_id: 20260813_060234_69d0f6
importance: 8
confidence: 0.9
---
# Summary

The tool 'comfyui-mcp' was run with unconventional syntax, leading to an error. The cause can be resolved by removing the '&' character and re-running the command within a bounded job.

## Facts
- Foreground command uses '&' backgrounding
- Command executed without specified timeout or health checks

## Concepts
- backgrounding
- command execution
- bottlenecking

## Files
- `/tmp/cu.log`
- `/Users/davec/.hermes/node/bin/comfyui-mcp`
- `/Users/davec/.hermes/node/bin/comfyui-mcp-mcp`

_Importance: 8 · Confidence: 0.9_
