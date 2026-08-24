---
type: Error
title: Gateway restart blocked from within gateway process
description: launchctl stop/start fails due to SIGTERM propagation
resource: agentmemory://observation/obs_mrqh31js_c460e2c01c8d
tags: ["process signal propagation", "launchctl service management", "process lifecycle constraints", "Hermes gateway", "error"]
timestamp: 2026-07-18T14:39:09.203942+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

An attempt to restart the Hermes gateway using launchctl from within the gateway process was blocked by the system. This constraint exists because SIGTERM propagates to child processes, which would kill the restart command before it completes. The required workaround is to run `hermes gateway restart` from a separate external shell.

## Facts
- Attempted command: launchctl stop ai.hermes.gateway; sleep 3; launchctl start ai.hermes.gateway
- Execution was blocked by the system to prevent self-termination
- SIGTERM propagates to child processes, killing the restart command before completion
- Required workaround: run 'hermes gateway restart' from a separate external shell

## Concepts
- process signal propagation
- launchctl service management
- process lifecycle constraints
- Hermes gateway

_Importance: 7 · Confidence: 1_
