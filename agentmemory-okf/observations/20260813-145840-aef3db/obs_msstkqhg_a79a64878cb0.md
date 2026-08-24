---
type: file_edit
title: MCP Router migration and native Hermes servers
description: No longer uses MCP Router proxy for server preference
resource: agentmemory://observation/obs_msstkqhg_a79a64878cb0
tags: ["MCP Router proxy", "Native Hermes servers", "file_edit"]
timestamp: 2026-08-14T10:44:04.751911+00:00
source: agentmemory
session_id: 20260813_145840_aef3db
importance: 5
confidence: 0.9
---
# Summary

The replacement of native Hermes mcp_servers with MCP Router proxy created more issues than it solved; the older preference is removed from 9 profiles and the related daemon is killed. Restart instructions are provided.

## Facts
- Replacement would put memory at 2,283/2,200 chars. Shorten the new content, or 'remove' other stale or less important entries to make room (see current_entries below), then retry — all in this turn.
- Hermes desktop app vs AgentMemory are SEPARATE: user watches AM web viewer localhost:3113/#lessons (AM lessons = portable heuristics; POST /agentmemory/lessons on :3111, Bearer LAST AGENTMEMORY_SECRET= in ~/.agentmemory/.env).

## Concepts
- MCP Router proxy
- Native Hermes servers

_Importance: 5 · Confidence: 0.9_
