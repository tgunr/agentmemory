---
type: CommandRun
title: mcp__desktop_commander__start_process
description: (password + host)
resource: agentmemory://observation/obs_msr6gzs6_071a7cedb231
tags: ["Command Runner", "Pipeline Execution", "Data Exposure", "commandrun"]
timestamp: 2026-08-13T07:09:32.834408+00:00
source: agentmemory
session_id: 20260812_081748_d67311
importance: 8
confidence: 1
---
# Summary

A tool command was run to initiate a new process. The initial output showed the configuration file content which revealed sensitive data containing a password, server URL, and group sessions per user settings.

## Facts
- Process started with PID 5479 (shell: /bin/zsh)
- Initial output:
- === bluebubbles config block (password + host) ===

## Concepts
- Command Runner
- Pipeline Execution
- Data Exposure

## Files
- `.hermes/config.yaml`

_Importance: 8 · Confidence: 1_
