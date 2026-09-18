---
type: FileRead
title: LaunchAgent plist configuration for agentmemory service
description: macOS LaunchAgent configuration file with environment setup
resource: agentmemory://observation/obs_mroq2a0s_2197005de0dc
tags: ["LaunchAgent", "plist configuration", "environment variables", "Redis connection", "daemon configuration", "fileread"]
timestamp: 2026-07-17T09:14:57.721079+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 4
confidence: 1
---
# Summary

A LaunchAgent configuration was read that sets up the agentmemory service with Redis connectivity, custom environment variables, and a wrapper script execution. This defines the runtime environment for a persistent agent process.

## Facts
- File is a macOS LaunchAgent plist at ~/Library/LaunchAgents/com.github.agentmemory.plist
- Label: com.github.agentmemory, runs at load with 30-second throttle interval
- AGENTMEMORY_DATA_DIR set to /Users/davec/data/agentmemory
- REDIS_URL configured as redis://localhost:6379
- WorkingDirectory: /Users/davec/data/agentmemory with HOME override
- ProgramArguments executes /Users/davec/.agentmemory/launchd-wrapper.sh
- AGENTMEMORY_SECRET environment variable present (secret value filtered)

## Concepts
- LaunchAgent
- plist configuration
- environment variables
- Redis connection
- daemon configuration

## Files
- `/Users/davec/Library/LaunchAgents/com.github.agentmemory.plist`

_Importance: 4 · Confidence: 1_
