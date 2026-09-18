---
type: CommandRun
title: Check port ownership and process hierarchy for agentmemory
description: Diagnosing which processes hold ports 3111-3113 and inspecting PIDs 92564 and 17256
resource: agentmemory://observation/obs_mrowoiud_1d51f2423149
tags: ["port ownership mapping", "process hierarchy debugging", "lsof and ps diagnostics", "Node.js TCP connections", "commandrun"]
timestamp: 2026-07-17T12:20:13.278700+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 4
confidence: 1
---
# Summary

Executed a diagnostic script to map port ownership for 3111-3113 and inspect specific process IDs. Found that the 'iii' binary owns ports 3111 and 3112, while PID 92568 owns 3113. The node process (PID 17256) is only holding established client connections, not listening on the target ports.

## Facts
- Ports 3111 and 3112 are owned by PID 92564
- Port 3113 is owned by PID 92568
- PID 92564 is the 'iii' binary (/Users/davec/.local/bin/iii) using config /Volumes/AI/agentmemory/iii-config.yaml with parent PID 1
- PID 17256 is a node process holding established TCP connections to localhost:49134, not listening on the target ports

## Concepts
- port ownership mapping
- process hierarchy debugging
- lsof and ps diagnostics
- Node.js TCP connections

## Files
- `/Users/davec/.local/bin/iii`
- `/Volumes/AI/agentmemory/iii-config.yaml`

_Importance: 4 · Confidence: 1_
