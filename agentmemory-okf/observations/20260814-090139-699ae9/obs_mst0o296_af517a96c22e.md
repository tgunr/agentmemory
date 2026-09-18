---
type: file_edit
title: Gateway process env verification failed
description: No /proc (darwin) found, using launchctl.
resource: agentmemory://observation/obs_mst0o296_af517a96c22e
tags: ["hermes", "Python", "launchctl", "file_edit"]
timestamp: 2026-08-14T14:02:37.287053+00:00
source: agentmemory
session_id: 20260814_090139_699ae9
importance: 6
confidence: 0.9
---
# Summary

The tool executed a command to verify the presence of TERMINAL_CWD in the environment variables of the gateway process. Since /proc was not found (macOS) it employed launchctl domain using the variable.

## Facts
- GW=$(hermes gateway list 2>/dev/null | grep -oE 'PID [0-9]+' | head -1 | awk '{print $2}')

## Concepts
- hermes
- Python
- launchctl

_Importance: 6 · Confidence: 0.9_
