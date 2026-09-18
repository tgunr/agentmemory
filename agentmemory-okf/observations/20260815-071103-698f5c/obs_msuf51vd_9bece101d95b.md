---
type: file_edit
title: MCP server staleness detection and reconnection mechanism
description: 
resource: agentmemory://observation/obs_msuf51vd_9bece101d95b
tags: ["file_edit"]
timestamp: 2026-08-15T13:35:30.741282+00:00
source: agentmemory
session_id: 20260815_071103_698f5c
importance: 5
confidence: 0.75
---
# Summary

The code implements a mechanism to detect stale cached manifests and reconnect with the live server. When detected, it deregisters the phantom tools and marks the server call as started.

## Facts
- This function detects when the live server no longer serves a tool and deregisters it from the cached manifest so the model can stop seeing non-existent tools.
- The _get_connected_server_for_call function returns a connected, reconnected, or recycled stdio server for a given call.

## Files
- `/Users/davec/.hermes/hermes-agent/tools/mcp_tool.py`

_Importance: 5 · Confidence: 0.75_
