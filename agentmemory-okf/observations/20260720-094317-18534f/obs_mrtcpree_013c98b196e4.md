---
type: discovery
title: Agentmemory service architecture and process discovery
description: Investigating how agentmemory is launched and its process hierarchy
resource: agentmemory://observation/obs_mrtcpree_013c98b196e4
tags: ["launchd plist", "process monitoring", "environment variable loading", "mcp wrapper pattern", "discovery"]
timestamp: 2026-07-20T15:00:09.586538+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

Discovered agentmemory runs via launchd with a proper plist, uses III as a wrapper process with its own YAML config, and the main service is a direct node invocation of dist/index.mjs rather than through the MCP wrapper. The system uses a watchdog pattern for process monitoring.

## Facts
- Launchd plist exists at /Users/davec/Library/LaunchAgents/com.github.agentmemory.plist with label com.github.agentmemory
- III process running as PID 6803 with config /Volumes/AI/agentmemory/iii-config.yaml via /Users/davec/.local/bin/iii
- Main agentmemory process is node dist/index.mjs (PID 37000), not the MCP wrapper
- Multiple MCP wrapper processes exist with mcp_stdio_watchdog.py monitors
- index.mjs contains loadEnv for environment variable loading

## Concepts
- launchd plist
- process monitoring
- environment variable loading
- mcp wrapper pattern

_Importance: 5 · Confidence: 1_
