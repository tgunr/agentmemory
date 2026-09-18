---
type: FileRead
title: Read AgentMemory Observer plugin init file
description: Hermes post_tool_call hook for syncing observations to AgentMemory REST API
resource: agentmemory://observation/obs_mrq7ai18_16545b2d2d4d
tags: ["Hermes plugin system", "post_tool_call hook", "AgentMemory REST API integration", "Dynamic path resolution", "SQLite state database", "fileread"]
timestamp: 2026-07-18T10:05:00.994626+00:00
source: agentmemory
session_id: 20260717_190757_299949
importance: 4
confidence: 1
---
# Summary

The agent read the initialization file of the AgentMemory Observer Hermes plugin to understand its configuration and hook registration. The plugin intercepts post_tool_call events to sync execution observations and session titles with a local AgentMemory REST API, dynamically resolving the active profile and state database paths based on its own installation directory.

## Facts
- File is 229 lines total; first 32 lines read
- Plugin registers a post_tool_call hook to send tool observations to AgentMemory REST API
- API URL defaults to http://127.0.0.1:3111 via AGENTMEMORY_URL env var
- Dynamically derives active Hermes profile from plugin file path (4 directories up)
- Locates Hermes state database (state.db) 3 directories up from the plugin file
- Debug logging writes to ~/.hermes/agentmemory_observer_debug.log

## Concepts
- Hermes plugin system
- post_tool_call hook
- AgentMemory REST API integration
- Dynamic path resolution
- SQLite state database

## Files
- `/Users/davec/.hermes/profiles/ollama/plugins/agentmemory_observer/__init__.py`

_Importance: 4 · Confidence: 1_
