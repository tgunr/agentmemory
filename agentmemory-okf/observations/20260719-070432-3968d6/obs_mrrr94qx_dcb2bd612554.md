---
type: file_write
title: Created MCP Router guide skill for proxy and fallback tool usage
description: Documents MCP Router app usage, native web search, and fallback tool discovery workflow
resource: agentmemory://observation/obs_mrrr94qx_dcb2bd612554
tags: ["MCP Router proxy", "web search fallback tools", "tool discovery workflow", "Brave search API", "DuckDuckGo search", "remote MCP bridge", "skill creation", "tool_search tool_describe tool_call pattern", "file_write"]
timestamp: 2026-07-19T12:11:35.621024+00:00
source: agentmemory
session_id: 20260719_070432_3968d6
importance: 6
confidence: 1
---
# Summary

A comprehensive skill guide was created documenting the MCP Router app as the master proxy for all MCP servers. The guide covers native Brave web search, fallback tool usage when native search fails, the three-step discovery workflow for MCP Router tools, remote bridge configuration, and common troubleshooting scenarios. This establishes a reference for proper tool invocation patterns and pitfall avoidance.

## Facts
- MCP Router app located at /Applications/MCP Router.app acts as master proxy for all MCP servers
- Native web_search tool uses Brave plugin directly when BRAVE_SEARCH_API_KEY is configured
- Fallback tools available: mcp_mcp_router_brave_web_search, mcp_mcp_router_brave_local_search, mcp_mcp_router_webSearch (DuckDuckGo)
- MCP Router tools require three-step discovery: tool_search → tool_describe → tool_call
- web_extract with Brave Free backend is search-only and cannot extract URL content
- Remote MCP Router Bridge requires --host and --port flags with MCPR_TOKEN authentication
- Default MCP Router port is 3282, binds to *:3282 by default
- Common MCP Router tools: redmine_*, brave_*, webSearch
- Skill created at /Users/davec/.hermes/profiles/personal/skills/mcp-router-guide/SKILL.md

## Concepts
- MCP Router proxy
- web search fallback tools
- tool discovery workflow
- Brave search API
- DuckDuckGo search
- remote MCP bridge
- skill creation
- tool_search tool_describe tool_call pattern
- web_extract limitations

## Files
- `/Users/davec/.hermes/profiles/personal/skills/mcp-router-guide/SKILL.md`

_Importance: 6 · Confidence: 1_
