---
type: CommandRun
title: Blocked gateway restart from inside gateway process
description: launchctl kickstart command aborted to prevent self-termination
resource: agentmemory://observation/obs_mrqh2qsx_366fe7c6727b
tags: ["launchctl kickstart", "LaunchAgent", "SIGTERM propagation", "process group", "gateway lifecycle", "commandrun"]
timestamp: 2026-07-18T14:38:55.277715+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

An attempt to restart the Hermes gateway via `launchctl kickstart` from within the gateway process was blocked. This is a safety measure: stopping the gateway would also terminate the command's own process group, leaving the restart unfinished.

## Facts
- Command attempted: `launchctl kickstart -k ai.hermes.gateway` to restart the LaunchAgent
- Exit code: 1; status: error
- Blocked because the terminal command is running inside the gateway process; SIGTERM would propagate to child processes and kill the command before it completes
- Recommended alternative: run `hermes gateway restart` from a separate shell outside the running gateway

## Concepts
- launchctl kickstart
- LaunchAgent
- SIGTERM propagation
- process group
- gateway lifecycle

_Importance: 5 · Confidence: 1_
