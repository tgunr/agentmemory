---
type: FileRead
title: TurboQuant-MLX local server hangs fix
description: Debugging step for turboquant-mlx-run
resource: agentmemory://observation/obs_mvhucf5p_911b26f6da07
tags: ["server configuration", "double-spawn", "memory pressure", "fileread"]
timestamp: 2026-10-21T08:19:15.513767+00:00
source: agentmemory
session_id: 20261020_042909_69904a
importance: 7
confidence: 0.9
---
# Summary

The server hangs for two reasons: config pointing to a dead port or double-spawn issue.

## Facts
- Address already in use error in turboquant-serve.err
- TQ model hangs due to memory pressure on 32 GB Mac

## Concepts
- server configuration
- double-spawn
- memory pressure

## Files
- `/Users/davec/MCP_Local/turboquant-mlx-work/tq_switch.sh`

_Importance: 7 · Confidence: 0.9_
