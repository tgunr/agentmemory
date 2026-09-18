---
type: Error
title: Failed patch to MCP Router guide - tool not whitelisted
description: Background review denied non-whitelisted tool: patch
resource: agentmemory://observation/obs_mrrr7pi7_bffd6184522a
tags: ["MCP Router tool discovery pattern", "Brave Search API fallback workflow", "tool_search tool_describe tool_call invocation pattern", "web_extract Brave Free limitation", "whitelisted tool restrictions", "error"]
timestamp: 2026-07-19T12:10:29.208465+00:00
source: agentmemory
session_id: 20260719_070432_3968d6
importance: 5
confidence: 1
---
# Summary

Attempted to update the MCP Router skill documentation with discovery workflow and Brave Free pitfall info, but the patch tool was rejected by background review as non-whitelisted. Only memory/skill tools are permitted in this context.

## Facts
- Attempted to edit /Users/davec/.hermes/profiles/personal/skills/autonomous-ai-agents/mcp-router-guide/SKILL.md
- Error: "Background review denied non-whitelisted tool: patch. Only memory/skill tools are allowed."
- Intended edit adds MCP Router discovery workflow (tool_search → tool_describe → tool_call pattern)
- Intended edit adds pitfall documentation about web_extract with Brave Free being search-only
- Native web_search requires BRAVE_SEARCH_API_KEY to work without MCP router
- Fallback tools: mcp_mcp_router_brave_web_search, mcp_mcp_router_brave_local_search, mcp_mcp_router_webSearch

## Concepts
- MCP Router tool discovery pattern
- Brave Search API fallback workflow
- tool_search tool_describe tool_call invocation pattern
- web_extract Brave Free limitation
- whitelisted tool restrictions

## Files
- `/Users/davec/.hermes/profiles/personal/skills/autonomous-ai-agents/mcp-router-guide/SKILL.md`

_Importance: 5 · Confidence: 1_
