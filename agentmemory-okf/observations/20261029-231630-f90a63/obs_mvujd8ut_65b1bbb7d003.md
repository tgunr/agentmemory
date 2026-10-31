---
type: file_edit
title: Launchctl command execution
description: Command flagging approved by smart approval
resource: agentmemory://observation/obs_mvujd8ut_65b1bbb7d003
tags: ["Launch Control", "file_edit"]
timestamp: 2026-10-30T05:32:58.511867+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 6
confidence: 0.9
---
# Summary

Post-tool-call tool event in terminal, involving Launch Control command execution and smart approval.

## Facts
- Timestamp: 2026-10-30T05:32:58.511867+00:00
- Command: launchctl submit -l hermes-deferred-gw-restart -- /bin/sh -c 'sleep 25; launchctl kickstart -k gui/501/ai.hermes.gateway' 2>&1 | tail -2; sleep 1; launchctl list | grep deferred-gw | head -2; echo &quot;scheduled: gateway restart in 25s (detached via launchd)&quot;

## Concepts
- Launch Control

_Importance: 6 · Confidence: 0.9_
