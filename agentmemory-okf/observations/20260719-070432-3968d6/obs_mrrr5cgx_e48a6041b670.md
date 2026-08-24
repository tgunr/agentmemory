---
type: Error
title: Patch tool denied - not whitelisted for background review
description: Background review rejected patch tool, only memory/skill tools allowed
resource: agentmemory://observation/obs_mrrr5cgx_e48a6041b670
tags: ["MCP Router tools", "web search fallback", "tool discovery workflow", "background review restrictions", "tool whitelisting", "Brave Search API", "web_extract backend limitations", "error"]
timestamp: 2026-07-19T12:08:39.005757+00:00
source: agentmemory
session_id: 20260719_070432_3968d6
importance: 5
confidence: 1
---
# Summary

The patch tool was denied by the background review system because it's not in the whitelist of allowed tools (only memory/skill tools are permitted). The patch was attempting to update the MCP Router guide SKILL.md file with enhanced documentation about web search fallbacks, including API key requirements, a three-step discovery workflow for MCP Router tools, and a warning about web_extract limitations with the Brave Free backend.

## Facts
- Tool 'patch' was rejected with error: "Background review denied non-whitelisted tool: patch. Only memory/skill tools are allowed."
- Target file: /Users/davec/.hermes/profiles/personal/skills/autonomous-ai-agents/mcp-router-guide/SKILL.md
- Patch attempted to update MCP Router guide documentation about web search fallbacks
- New content adds BRAVE_SEARCH_API_KEY requirement and three-step discovery workflow (tool_search → tool_describe → tool_call)
- New content documents pitfall: web_extract with Brave Free backend is search-only, cannot extract URL content
- Background review system only allows memory/skill tools, not patch

## Concepts
- MCP Router tools
- web search fallback
- tool discovery workflow
- background review restrictions
- tool whitelisting
- Brave Search API
- web_extract backend limitations

## Files
- `/Users/davec/.hermes/profiles/personal/skills/autonomous-ai-agents/mcp-router-guide/SKILL.md`

_Importance: 5 · Confidence: 1_
