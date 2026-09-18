---
type: CommandRun
title: Restart agentmemory engine and workers via launchctl
description: Kill existing processes and verify fresh launch with livez health check
resource: agentmemory://observation/obs_mrox2uwj_0ad1f9170d07
tags: ["launchctl", "process management", "health check", "macOS LaunchAgent", "agentmemory", "commandrun"]
timestamp: 2026-07-17T12:31:22.088063+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 1
---
# Summary

Executed a script to forcefully terminate all existing agentmemory engine and worker processes, then restarted them using launchctl. Verified the fresh process pair was running and confirmed the service health endpoint returned a 200 OK status.

## Facts
- Killed existing worker PID 821 and engine PID 819
- Engine binary located at /Users/davec/.local/bin/iii with config /Volumes/AI/agentmemory/iii-config.yaml
- Worker script executed as node dist/index.mjs
- Service managed via macOS LaunchAgent at /Users/davec/Library/LaunchAgents/com.github.agentmemory.plist
- Fresh engine PID 6803 and worker PID 6804 successfully spawned
- Health endpoint http://localhost:3111/agentmemory/livez returned HTTP 200

## Concepts
- launchctl
- process management
- health check
- macOS LaunchAgent
- agentmemory

## Files
- `/Volumes/AI/agentmemory/iii-config.yaml`
- `/Users/davec/.local/bin/iii`
- `/Users/davec/Library/LaunchAgents/com.github.agentmemory.plist`
- `dist/index.mjs`

_Importance: 5 · Confidence: 1_
