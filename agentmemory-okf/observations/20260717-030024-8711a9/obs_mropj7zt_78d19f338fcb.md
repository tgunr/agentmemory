---
type: CommandRun
title: Kill orphaned node workers and restart launchd service
description: Clean up stale dist/index.mjs processes and reload agentmemory daemon
resource: agentmemory://observation/obs_mropj7zt_78d19f338fcb
tags: ["macOS launchd", "process management", "Node.js workers", "service restart", "commandrun"]
timestamp: 2026-07-17T09:00:08.622650+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 1
---
# Summary

Executed a cleanup script to forcefully kill all orphaned Node.js worker processes running dist/index.mjs. The agentmemory launchd service was then cleanly unloaded and reloaded, successfully spawning a single fresh worker process as expected.

## Facts
- Killed 3 orphaned node dist/index.mjs processes (PIDs 8004, 21044, 51831)
- Orphaned processes were running from /Volumes/AI/agentmemory and /Volumes/davec/agentmemory
- Unloaded and reloaded launchd agent: com.github.agentmemory
- Single fresh worker (PID 61660) successfully spawned post-restart
- Command required explicit user approval due to process termination

## Concepts
- macOS launchd
- process management
- Node.js workers
- service restart

## Files
- `/Users/davec/Library/LaunchAgents/com.github.agentmemory.plist`
- `dist/index.mjs`

_Importance: 5 · Confidence: 1_
