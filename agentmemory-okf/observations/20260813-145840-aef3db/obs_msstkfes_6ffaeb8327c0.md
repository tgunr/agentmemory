---
type: file_edit
title: Updated Hermes mcp_servers configuration
description: Removed MCP Router proxy and replaced it with native Hermes servers
resource: agentmemory://observation/obs_msstkfes_6ffaeb8327c0
tags: ["Hermes servers", "file_edit"]
timestamp: 2026-08-14T10:43:50.400041+00:00
source: agentmemory
session_id: 20260813_145840_aef3db
importance: 8
confidence: 0.9
---
# Summary

The update removed the deprecated MCP Router proxy and replaced it with native Hermes servers.

## Facts
- New text: Prefers native Hermes mcp_servers over MCP Router proxy (it 'creates more issues than it solves');
- Old text: Prefers native Hermes mcp_servers over MCP Router proxy (it 'creates more issues than it solves')

## Concepts
- Hermes servers

## Files
- `/Applications/MCP Router.app daemon (port 3282)`
- `/Users/davec/MCP_Local/agentmemory/dist/standalone.mjs`

_Importance: 8 · Confidence: 0.9_
