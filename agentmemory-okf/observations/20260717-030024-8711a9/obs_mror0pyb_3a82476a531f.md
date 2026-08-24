---
type: CommandRun
title: Query local AgentMemory API for session list
description: Retrieved 49 sessions via localhost:3111 API using plist-extracted auth token
resource: agentmemory://observation/obs_mror0pyb_3a82476a531f
tags: ["macOS LaunchAgent plist", "Local API querying", "JSON parsing with python3", "AgentMemory service", "Session management", "commandrun"]
timestamp: 2026-07-17T09:41:44.671497+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 4
confidence: 1
---
# Summary

The agent executed a terminal command to inspect the local AgentMemory service state by extracting an auth secret from a macOS plist file. It authenticated a curl request to the local API on port 3111 and parsed the JSON response. The output revealed 49 active sessions, highlighting a mix of high-observation historical sessions and empty test sessions.

## Facts
- Command queried http://localhost:3111/agentmemory/sessions using Bearer token extracted from macOS LaunchAgent plist
- API returned 49 total sessions
- Top sessions by observation count include 20260716_122629_af7dd2 (135 obs), 20260716_132220_650ede (119 obs), and 20260716_130051_9366bd (116 obs)
- Multiple test sessions (e.g., test_plugin_123, test_hermes_fallback) exist with 0 observations
- Command triggered a security scan warning for piping curl to python3 but was user-approved

## Concepts
- macOS LaunchAgent plist
- Local API querying
- JSON parsing with python3
- AgentMemory service
- Session management

## Files
- `/Users/davec/Library/LaunchAgents/com.github.agentmemory.plist`

_Importance: 4 · Confidence: 1_
