---
type: FileRead
title: MCP Client: connect servers, register tools (stdio/HTTP)
description: Connect to MCP servers and use their tools from within Hermes Agent
resource: agentmemory://observation/obs_mvqj6asy_6951ddf96f49
tags: ["MCP", "Server", "Client", "fileread"]
timestamp: 2026-10-27T10:16:29.741451+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 0.9
---
# Summary

The MCP client enables the use of external capabilities, such as filesystem access and databases, via MCP. It also allows the agent to connect to MCP servers at startup, discover available tools, and register them with the prefix `mcp_time_*`. This provides a natural way to use the tools and ensures seamless integration with the MCP servers.

## Facts
- The MCP client connects to MCP servers at startup, discovers their tools, and makes them available as first-class tools.
- The client is required for local stdio-based MCP servers and remote HTTP/StreamableHTTP MCP servers.

## Concepts
- MCP
- Server
- Client

## Files
- `/usr/local/lib/python3.9/site-packages/mcp`

_Importance: 7 · Confidence: 0.9_
