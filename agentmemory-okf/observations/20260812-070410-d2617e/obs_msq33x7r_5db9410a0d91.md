---
type: FileRead
title: Hermes process started and initialized
description: Command execution at 12:47:37.955923+00:00
resource: agentmemory://observation/obs_msq33x7r_5db9410a0d91
tags: ["fileread"]
timestamp: 2026-08-12T12:47:37.955923+00:00
source: agentmemory
session_id: 20260812_070410_d2617e
importance: 4
confidence: 0.75
---
# Summary

The mcp_router started a new process using the 'pgrep' and 'launchctl list' commands to find and identify the running HermesModule process. The launched process has several different processes with standard names such as hermes-gateway, hermes-agent, and Hermes Helper (Renderer)

## Facts
- PID of the HermesModule process is 34979 (shell: /bin/zsh)
- Bash output showing the command used to launch the Hermes process

## Files
- `/Users/davec/.docker/config.json`
- `/Volumes/AI/agentmemory-kilo-hooks/agentmemory-wrapper.sh`

_Importance: 4 · Confidence: 0.75_
