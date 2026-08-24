---
type: FileRead
title: Read Hermes AgentMemory Observer Plugin
description: Examining post_tool_call hook implementation for AgentMemory integration
resource: agentmemory://observation/obs_mrq7ai19_3cf1cbcdb79e
tags: ["Hermes plugin system", "post_tool_call hooks", "AgentMemory REST API", "profile management", "SQLite state database", "environment variable configuration", "fileread"]
timestamp: 2026-07-18T10:05:01.000420+00:00
source: agentmemory
session_id: 20260717_190757_299949
importance: 3
confidence: 1
---
# Summary

Read the AgentMemory Observer plugin for the Hermes AI coding agent framework. This plugin automatically captures tool execution observations and syncs them to a local AgentMemory REST API. The plugin derives the active Hermes profile from its file location rather than environment variables, ensuring it works correctly regardless of which profile loads it.

## Facts
- File is 229 lines total, 7302 bytes, first 32 lines read
- Plugin registers post_tool_call hook to send observations to AgentMemory REST API
- API endpoint configured via AGENTMEMORY_URL env var, defaults to http://127.0.0.1:3111
- Authentication uses AGENTMEMORY_SECRET environment variable
- Active profile derived from plugin file path: ~/.hermes/profiles/&lt;profile&gt;/plugins/agentmemory_observer/__init__.py
- State database located at ~/.hermes/profiles/&lt;profile&gt;/state.db
- Debug logging to ~/.hermes/agentmemory_observer_debug.log

## Concepts
- Hermes plugin system
- post_tool_call hooks
- AgentMemory REST API
- profile management
- SQLite state database
- environment variable configuration

## Files
- `/Users/davec/.hermes/profiles/shop/plugins/agentmemory_observer/__init__.py`

_Importance: 3 · Confidence: 1_
