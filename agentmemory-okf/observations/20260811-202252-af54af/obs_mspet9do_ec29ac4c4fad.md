---
type: file_edit
title: Repair and wire Kilo Code sessions into AgentMemory
description: (Kilo ↔ AgentMemory Integration)
resource: agentmemory://observation/obs_mspet9do_ec29ac4c4fad
tags: ["file_edit"]
timestamp: 2026-08-12T01:27:29.721687+00:00
source: agentmemory
session_id: 20260811_202252_af54af
importance: 8
confidence: 0.75
---
# Summary

This post-tool-call hook records repair steps related to integrating Kilo Code sessions with AgentMemory.<br>The KiloCode session updates include updating MCP servers and re-registering the agentmemory server in kilo-mcp_settings.json. The changes involved removing the "Servers" prefix from hook script locations, relocating `agentmemory` scripts from OKF to Server directory.

## Facts
- Difference between old and new hooks (move from `/Volumes/AI/Servers/agentmemory-kilo-hooks/` to `/Volumes/AI/agentmemory-kilo-hooks/`),

## Files
- `/Volumes/AI/agentmemory-kilo-hooks/`

_Importance: 8 · Confidence: 0.75_
