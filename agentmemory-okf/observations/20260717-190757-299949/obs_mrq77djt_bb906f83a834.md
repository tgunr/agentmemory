---
type: FileRead
title: Read Hermes AgentMemory observer plugin
description: Plugin that auto-syncs tool observations to AgentMemory REST API
resource: agentmemory://observation/obs_mrq77djt_bb906f83a834
tags: ["Hermes plugin system", "post_tool_call hooks", "AgentMemory REST API integration", "SQLite session tracking", "Secret management with fallback", "Profile path derivation", "fileread"]
timestamp: 2026-07-18T10:02:35.221156+00:00
source: agentmemory
session_id: 20260717_190757_299949
importance: 5
confidence: 1
---
# Summary

This is a Hermes plugin that automatically captures tool execution observations and sends them to a local AgentMemory REST API. It includes robust profile detection, secret fallback logic, and session title synchronization from Hermes's SQLite state database. The plugin handles edge cases like empty profile state.db files by falling back to the top-level Hermes state.db.

## Facts
- File: /Users/davec/.hermes/profiles/default/plugins/agentmemory_observer/__init__.py
- Registers post_tool_call hook to send observations to AgentMemory API
- API endpoint: AGENTMEMORY_URL env var, default http://127.0.0.1:3111
- Secret management: reads AGENTMEMORY_SECRET from env or fallback to ~/.agentmemory/.env
- Profile detection: derives profile name from plugin path (4 levels up from __file__)
- State DB resolution: prefers profile state.db if non-empty, else falls back to ~/.hermes/state.db
- Session title sync: queries Hermes SQLite state.db and updates AgentMemory API
- Debug logging to ~/.hermes/agentmemory_observer_debug.log
- Tracks _seen_sessions, _seen_tool_calls, _last_seen_titles for deduplication

## Concepts
- Hermes plugin system
- post_tool_call hooks
- AgentMemory REST API integration
- SQLite session tracking
- Secret management with fallback
- Profile path derivation

## Files
- `/Users/davec/.hermes/profiles/default/plugins/agentmemory_observer/__init__.py`

_Importance: 5 · Confidence: 1_
