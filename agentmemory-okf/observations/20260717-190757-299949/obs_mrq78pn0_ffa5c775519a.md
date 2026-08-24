---
type: FileRead
title: AgentMemory Observer plugin initialization
description: Hermes plugin that captures tool executions and sends to AgentMemory REST API
resource: agentmemory://observation/obs_mrq78pn0_ffa5c775519a
tags: ["Hermes plugin system", "post_tool_call hooks", "AgentMemory REST API", "SQLite state management", "profile-based configuration", "AI agent memory", "fileread"]
timestamp: 2026-07-18T10:03:37.540116+00:00
source: agentmemory
session_id: 20260717_190757_299949
importance: 5
confidence: 1
---
# Summary

Reading the AgentMemory Observer plugin which implements automatic observation capture for Hermes AI agent. The plugin hooks into post_tool_call events to send execution data to a local REST API and syncs session titles. It uses profile-based configuration derived from its own file path location.

## Facts
- Plugin registers post_tool_call hook to send observations to local AgentMemory API
- API endpoint defaults to http://127.0.0.1:3111 (configurable via AGENTMEMORY_URL env var)
- Derives active profile from plugin file location (4 levels up from __file__)
- Uses SQLite state database at ~/.hermes/profiles/<profile>/state.db
- Tracks seen sessions and tool calls using in-memory sets/dicts
- Debug logging to ~/.hermes/agentmemory_observer_debug.log
- File is 229 lines total, showing first 45 lines

## Concepts
- Hermes plugin system
- post_tool_call hooks
- AgentMemory REST API
- SQLite state management
- profile-based configuration
- AI agent memory

## Files
- `/Users/davec/.hermes/profiles/cc/plugins/agentmemory_observer/__init__.py`

_Importance: 5 · Confidence: 1_
