---
type: file_edit
title: Errors during mcp-server connections
description: No errors found initially, but failed connect attempt and hermes config parsing issues occurred.
resource: agentmemory://observation/obs_mseokwun_45baab254fdb
tags: ["TaskGroup errors", "Grammar syntax issues", "file_edit"]
timestamp: 2026-08-04T13:15:28.458554+00:00
source: agentmemory
session_id: 209ee33e5682
importance: 5
confidence: 1
---
# Summary

MCP server connections failed for 'comfyui', 'mcp-router' and 'agentmemory', resulting in retries. An additional grammar error occurred while restarting the Gateway service.

## Facts
- MCP servers 'comfyui', 'mcp-router' and 'agentmemory' connection failures
- Unsuccessful connection attempts to these servers resulted in retries with different intervals
- Grammar error during Gateway service restart, specifically a syntax error

## Concepts
- TaskGroup errors
- Grammar syntax issues

_Importance: 5 · Confidence: 1_
