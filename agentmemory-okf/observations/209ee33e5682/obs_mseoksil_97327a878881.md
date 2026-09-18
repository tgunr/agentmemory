---
type: CommandRun
title: Tail and grep output
description: Finding distinct error types in webui.error.log
resource: agentmemory://observation/obs_mseoksil_97327a878881
tags: ["MallocStackLogging", "commandrun"]
timestamp: 2026-08-04T13:15:22.840252+00:00
source: agentmemory
session_id: 209ee33e5682
importance: 5
confidence: 0.9
---
# Summary

The code runs the command `tail -50 ~/.hermes/logs/webui.error.log`, which outputs 20 lines. Upon closer inspection, these lines contain repeated error messages involving malloc stack logging.

## Facts
- Hermes is using a version of Python with malloc stack logging enabled.

## Concepts
- MallocStackLogging

## Files
- `~/.hermes/logs/webui.error.log`

_Importance: 5 · Confidence: 0.9_
