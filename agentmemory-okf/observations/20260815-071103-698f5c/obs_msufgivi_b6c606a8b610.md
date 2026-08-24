---
type: Observation
title: Failed to connect to MCP servers
description: No real per-server errors in webui.error.log found
resource: agentmemory://observation/obs_msufgivi_b6c606a8b610
tags: ["McPError", "MCP server connection issues", "Failed connections", "observation"]
timestamp: 2026-08-15T13:44:25.991609+00:00
source: agentmemory
session_id: 20260815_071103_698f5c
importance: 6
confidence: 0.9
---
# Summary

The tool tried to run a command on terminal to search for real per-server errors in webui.error.log. However, only failed initial connections were found.

## Facts
- MCP server 'comfyui' failed initial connection after 3 attempts, parking until a reconnect is requested (state: connecting → parked): McpError: Connection closed

## Concepts
- McPError
- MCP server connection issues
- Failed connections

_Importance: 6 · Confidence: 0.9_
