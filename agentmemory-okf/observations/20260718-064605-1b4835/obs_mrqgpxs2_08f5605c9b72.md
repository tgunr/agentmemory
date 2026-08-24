---
type: CommandRun
title: Hermes Gateway failed to start due to duplicate instance
description: Process exited with code 1 after detecting existing gateway instance
resource: agentmemory://observation/obs_mrqgpxs2_08f5605c9b72
tags: ["process management", "singleton pattern", "SSH tunnel", "daemon conflict", "commandrun"]
timestamp: 2026-07-18T14:28:57.791377+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The hermes gateway command failed to start because an existing instance (PID 65055) was already running, despite the --replace flag being used. The SSH tunnel (PID 8167) was also already active. This prevented the gateway from launching and resulted in an error exit code.

## Facts
- Command "hermes gateway run --replace" exited with code 1
- Existing gateway instance detected with PID 65055
- SSH tunnel already running with PID 8167
- System is macOS 27.0 (BuildVersion 26A5378n)
- Warning message: "Another gateway instance (PID 65055) started during our startup. Exiting to avoid double-running."

## Concepts
- process management
- singleton pattern
- SSH tunnel
- daemon conflict

_Importance: 5 · Confidence: 1_
