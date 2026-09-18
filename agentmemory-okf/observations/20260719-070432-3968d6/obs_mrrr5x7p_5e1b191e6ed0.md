---
type: Error
title: write_file denied by background review
description: Non-whitelisted tool blocked during MCP Router guide creation
resource: agentmemory://observation/obs_mrrr5x7p_5e1b191e6ed0
tags: ["MCP Router proxy", "tool whitelisting", "background review restrictions", "web search fallback", "tool discovery workflow", "Brave/DuckDuckGo search", "error"]
timestamp: 2026-07-19T12:09:05.887948+00:00
source: agentmemory
session_id: 20260719_070432_3968d6
importance: 5
confidence: 1
---
# Summary

Attempted to write a detailed MCP Router guide documenting web search fallback mechanisms and tool discovery workflows. The write_file tool was blocked because background review only permits memory/skill tools, preventing documentation creation in this context.

## Facts
- Tool write_file was rejected by background review system
- Only memory/skill tools are whitelisted for background execution
- Content attempted: comprehensive MCP Router guide (v1.2.0) covering native web search, fallback tools, discovery workflow, and remote bridge configuration
- Guide includes Brave/DuckDuckGo search tools, three-step discovery pattern (search→describe→call), and troubleshooting matrix

## Concepts
- MCP Router proxy
- tool whitelisting
- background review restrictions
- web search fallback
- tool discovery workflow
- Brave/DuckDuckGo search

## Files
- `mcp-router-guide.md`

_Importance: 5 · Confidence: 1_
