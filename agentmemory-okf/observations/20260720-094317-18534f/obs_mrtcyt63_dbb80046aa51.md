---
type: FileRead
title: Read agentmemory LaunchAgent plist configuration
description: macOS launchd service configuration for agentmemory
resource: agentmemory://observation/obs_mrtcyt63_dbb80046aa51
tags: ["macOS launchd", "LaunchAgent plist", "service daemon configuration", "Redis connection", "KeepAlive restart policy", "fileread"]
timestamp: 2026-07-20T15:07:11.784698+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

Read the macOS launchd plist configuration for the agentmemory service. It defines a background daemon that runs a wrapper script, connects to local Redis, stores data in /Users/davec/data/agentmemory, and auto-restarts on failure with a 30-second throttle.

## Facts
- File: /Users/davec/Library/LaunchAgents/com.github.agentmemory.plist
- Label: com.github.agentmemory
- ProgramArguments: /Users/davec/.agentmemory/launchd-wrapper.sh
- AGENTMEMORY_DATA_DIR: /Users/davec/data/agentmemory
- REDIS_URL: redis://localhost:6379
- KeepAlive with SuccessfulExit=false (restarts on non-zero exit)
- RunAtLoad: true (starts on login)
- ThrottleInterval: 30 seconds
- Logs: /tmp/agentmemory.stderr.log and /tmp/agentmemory.stdout.log
- WorkingDirectory: /Users/davec/data/agentmemory

## Concepts
- macOS launchd
- LaunchAgent plist
- service daemon configuration
- Redis connection
- KeepAlive restart policy

## Files
- `/Users/davec/Library/LaunchAgents/com.github.agentmemory.plist`

_Importance: 5 · Confidence: 1_
