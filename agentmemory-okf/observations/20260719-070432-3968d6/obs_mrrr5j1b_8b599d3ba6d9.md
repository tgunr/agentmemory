---
type: Error
title: Skill patch failed due to wrong profile
description: Attempted to patch mcp-router-guide in personal profile
resource: agentmemory://observation/obs_mrrr5j1b_8b599d3ba6d9
tags: ["skill management", "profile configuration", "MCP router", "web search tools", "error"]
timestamp: 2026-07-19T12:08:47.514991+00:00
source: agentmemory
session_id: 20260719_070432_3968d6
importance: 5
confidence: 1
---
# Summary

Attempted to patch the mcp-router-guide skill to update documentation about native web search and MCP Router fallback tools, but the operation failed because the active profile is 'personal' where this skill does not exist. The skill is available in four other profiles requiring a profile switch or cross-profile operation.

## Facts
- Action: patch on skill 'mcp-router-guide'
- Active profile: 'personal' does not contain this skill
- Skill exists in profiles: 'default', 'develop', 'shop', 'cc'
- Failed to update MCP Router tools documentation about web_search failover

## Concepts
- skill management
- profile configuration
- MCP router
- web search tools

## Files
- `mcp-router-guide`

_Importance: 5 · Confidence: 1_
