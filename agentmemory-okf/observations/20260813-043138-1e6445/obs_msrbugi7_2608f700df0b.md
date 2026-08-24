---
type: FileRead
title: Traffic from pve.root on podman ps output
description: podman ps -a command output
resource: agentmemory://observation/obs_msrbugi7_2608f700df0b
tags: ["fileread"]
timestamp: 2026-08-13T09:39:59.112194+00:00
source: agentmemory
session_id: 20260813_043138_1e6445
importance: 5
confidence: 0.75
---
# Summary

Traffic was observed from pve.root to the output of the podman ps -a command, which may be related to container status monitoring.

## Facts
- Observation timestamp: 2026-08-13T09:39:59.112194+00:00 was a normal time for the event.
- The command run event was caused by post_tool_call hook triggered on terminal tool.

## Files
- `ssh`

_Importance: 5 · Confidence: 0.75_
