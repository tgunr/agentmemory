---
type: file_edit
title: Failed MCP calendar list events call
description: MCP call failed due to invalid date format
resource: agentmemory://observation/obs_mwftk5e6_e96dd0001d08
tags: ["date parsing", "file_edit"]
timestamp: 2026-11-14T03:01:26.474612+00:00
source: agentmemory
session_id: local-3290e2e903cbdb766896659529984ac9abf5a912a8f9915485d5323fa855bd74
importance: 8
confidence: 0.9
---
# Summary

The MCP calendar list events call failed with an error indicating an invalid date format. This may impact the application's ability to fetch or update calendar events.

## Facts
- Tool: mcp__NextCloud__calendar_list_events
- Input: { error: "MCP call failed: MCPError: from: expected ISO date or date-time with Z or offset" }

## Concepts
- date parsing

_Importance: 8 · Confidence: 0.9_
