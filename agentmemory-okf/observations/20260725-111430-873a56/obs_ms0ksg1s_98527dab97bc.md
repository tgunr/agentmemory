---
type: FileRead
title: REST worker process check
description: No tasks found in current process
resource: agentmemory://observation/obs_ms0ksg1s_98527dab97bc
tags: ["fileread"]
timestamp: 2026-07-25T16:20:35.005538+00:00
source: agentmemory
session_id: 20260725_111430_873a56
importance: 6
confidence: 0.75
---
# Summary

After running a series of commands on the terminal, we found that two node processes are running: 2020 dist/index.mjs and 2330 dist/index.mjs.

## Facts
- The current node running dist/index.mjs is PID 2330 and PPID 1406.
- The process containing iii --config /Volumes/AI/agentmemory/dist/iii-config.yaml has PIDs 2330 and 1406.

## Files
- `/dist/index.mjs`

_Importance: 6 · Confidence: 0.75_
