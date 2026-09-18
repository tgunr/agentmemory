---
type: discovery
title: MCP Router Guide: Master Proxy for MCP Servers
description: Configuration, fallback tools, and remote bridge setup for MCP Router
resource: agentmemory://observation/obs_mrrr3cb0_840895d10ea3
tags: ["MCP Router", "Model Context Protocol", "Tool proxying", "Web search fallback", "Remote CLI bridge", "discovery"]
timestamp: 2026-07-19T12:07:05.481229+00:00
source: agentmemory
session_id: 20260719_070432_3968d6
importance: 7
confidence: 1
---
# Summary

The agent viewed the mcp-router-guide skill to understand how to use the MCP Router app as a master proxy for MCP servers. The guide details native vs. fallback web search tools, remote bridge configuration via CLI, and troubleshooting steps for server connectivity and database state.

## Facts
- MCP Router app is located at /Applications/MCP Router.app and acts as the master proxy for all MCP servers.
- Native web_search uses Brave directly; fallbacks include mcp_mcp_router_brave_web_search, mcp_mcp_router_brave_local_search, and mcp_mcp_router_webSearch (DuckDuckGo).
- Remote connections use @mcp_router/cli@latest connect --host &lt;IP&gt; --port 3282 and require MCPR_TOKEN.
- MCP Router binds to *:3282 by default, requiring firewall or VPN restrictions for security.
- Server configuration state is stored in ~/Library/Application Support/MCP Router/mcprouter.db.
- Tools from underlying servers (e.g., Redmine) are accessed via the mcp_mcp_router_* namespace.

## Concepts
- MCP Router
- Model Context Protocol
- Tool proxying
- Web search fallback
- Remote CLI bridge

## Files
- `/Applications/MCP Router.app`
- `~/Library/Application Support/MCP Router/mcprouter.db`

_Importance: 7 · Confidence: 1_
