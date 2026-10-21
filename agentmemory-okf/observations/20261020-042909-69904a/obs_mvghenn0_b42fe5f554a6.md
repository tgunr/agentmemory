---
type: CommandRun
title: TQ Server Hang Issue
description: Troubleshooting guide for TurboQuant local model server hangs
resource: agentmemory://observation/obs_mvghenn0_b42fe5f554a6
tags: ["TurboQuant local model server", "Double-spawn", "Dead port", "commandrun"]
timestamp: 2026-10-20T09:29:18.631619+00:00
source: agentmemory
session_id: 20261020_042909_69904a
importance: 7
confidence: 0.9
---
# Summary

The TQ local model server hangs or times out when generating completions, but responds on other endpoints. The issue is likely related to the provider pointing to a dead port or double-spawn causing a wedged orphan.

## Facts
- Recent command &quot;tq-serve-debug&quot; executed
- Command output includes &quot;[Errno 48] Address already in use&quot; error

## Concepts
- TurboQuant local model server
- Double-spawn
- Dead port

## Files
- `/Users/davec/MCP_Local/turboquant-mlx-work/tq_switch.sh`

_Importance: 7 · Confidence: 0.9_
