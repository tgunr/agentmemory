---
type: file_edit
title: Error in test: launch agentmemory Through the real watchdog
description: Wrong usage of '&' in foreground command
resource: agentmemory://observation/obs_msuf9eiy_cf3338fef9b1
tags: ["file_edit"]
timestamp: 2026-08-15T13:38:53.766121+00:00
source: agentmemory
session_id: 20260815_071103_698f5c
importance: 6
confidence: 0.75
---
# Summary

The tool execution failed with exit code -1 due to incorrect command usage, highlighting a need for clarification on foreground command handling and proper terminal configuration to avoid '&' backgrounding.

## Facts
- Foreground command uses '&' backgrounding. Re-send WITHOUT the '&' as terminal(command="<cmd>", background=true) — add notify_on_complete=true for bounded jobs — then run health checks and tests in follow-up terminal calls.

_Importance: 6 · Confidence: 0.75_
