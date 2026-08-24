---
type: CommandRun
title: Hermes gateway restart blocked from within gateway process
description: Command failed due to architectural constraint preventing self-termination
resource: agentmemory://observation/obs_mrqh2ulv_c41822c80b92
tags: ["hermes gateway", "process management", "SIGTERM propagation", "system administration", "commandrun"]
timestamp: 2026-07-18T14:39:00.208734+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

The hermes gateway restart command failed because the system intentionally blocks restart/stop operations from executing within the gateway process itself. This is a safety mechanism to prevent SIGTERM signals from killing the restart command before completion, which would leave the gateway in an inconsistent state. The proper approach is to execute this command from a separate terminal session.

## Facts
- Command exit code was 1 (failure)
- Hermes gateway prevents restart/stop operations from within its own process
- SIGTERM signal would propagate to child processes and kill the command
- Solution requires running restart from separate shell outside running gateway

## Concepts
- hermes gateway
- process management
- SIGTERM propagation
- system administration

## Files
- `~/.hermes/logs/gateway.log`

_Importance: 7 · Confidence: 1_
