---
type: FileRead
title: Listening process details
description: List of listening processes for PID 44523 and 76169
resource: agentmemory://observation/obs_msrcx8ft_1ba018f738d8
tags: ["tcp listening", "fileread"]
timestamp: 2026-08-13T10:10:08.244365+00:00
source: agentmemory
session_id: 20260813_045428_e116af
importance: 8
confidence: 1
---
# Summary

The tool executed a series of commands to gather process details. It identified listening processes for PID 44523 and 76169, including rapportd and ControlCe.

## Facts
- Command executed: echo \"=== is PID 44523 (serve --port 0) actually listening? ===\"; lsof -nP -p 44523 -iTCP -sTCP:LISTEN 2>/dev/null | head;
- Command executed: ps -p 76169 -o pid,ppid,command | cut -c1-120;
- Process details for PID 44523:

## Concepts
- tcp listening

_Importance: 8 · Confidence: 1_
