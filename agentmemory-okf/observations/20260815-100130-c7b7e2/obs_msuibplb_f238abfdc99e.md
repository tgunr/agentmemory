---
type: FileRead
title: TUI Gateway file read
description: Reading server.py from /Users/davec/.hermes/hermes-agent/tui_gateway/server.py
resource: agentmemory://observation/obs_msuibplb_f238abfdc99e
tags: ["MCP discovery", "Cache safety", "fileread"]
timestamp: 2026-08-15T15:04:40.265079+00:00
source: agentmemory
session_id: 20260815_100130_c7b7e2
importance: 4
confidence: 0.9
---
# Summary

Tool Gateway read file operation resulted in a cache safety check, which ensures that the tool snapshot is rebuilt automatically without invalidating the prompt cache.

## Facts
- A daemon thread waits for MCP discovery to finish and then rebuilds the tool snapshot.
- The cache safety feature prevents rebuilding the snapshot during an API call.

## Concepts
- MCP discovery
- Cache safety

_Importance: 4 · Confidence: 0.9_
