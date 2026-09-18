---
type: CommandRun
title: Debugging port 49134 and node/iii process states
description: Investigating websocket connections and zombie processes for iii engine
resource: agentmemory://observation/obs_mrowou5j_b36e82d5446f
tags: ["lsof port inspection", "process state debugging", "websocket port management", "zombie process detection", "commandrun"]
timestamp: 2026-07-17T12:20:27.923686+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 1
---
# Summary

Ran diagnostic commands to map process IDs to TCP port 49134 and inspect running node/iii instances. Discovered PID 92564 is the main iii engine listening on the websocket port, while older PID 17256 and newer PID 92568 are connected clients. Confirmed PID 17256 is still actively holding 28 file descriptors.

## Facts
- PID 92564 (/Users/davec/.local/bin/iii --config /Volumes/AI/agentmemory/iii-config.yaml) is listening on TCP port 49134
- PIDs 17256 and 92568 (node dist/index.mjs) have active connections to port 49134
- PID 17256 started at 04:43:34, while PIDs 92564 and 92568 started later at 07:19:33
- PID 17256 has 28 open TCP/REG file descriptors, confirming it is active and not a socket ghost

## Concepts
- lsof port inspection
- process state debugging
- websocket port management
- zombie process detection

## Files
- `/Volumes/AI/agentmemory/iii-config.yaml`
- `/Users/davec/.local/bin/iii`
- `dist/index.mjs`

_Importance: 5 · Confidence: 1_
