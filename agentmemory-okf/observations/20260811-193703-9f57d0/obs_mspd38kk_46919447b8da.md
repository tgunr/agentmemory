---
type: file_edit
title: Kilo Code integration with AgentMemory
description: wire sessions and repair reorg breakage in 2026-08-11
resource: agentmemory://observation/obs_mspd38kk_46919447b8da
tags: ["OKF indexing", "MCP settings", "Kilo Code sessions", "file_edit"]
timestamp: 2026-08-12T00:39:16.000562+00:00
source: agentmemory
session_id: 20260811_193703_9f57d0
importance: 8
confidence: 0.9
---
# Summary

The Kilode agents' integration with AgentMemory was initially broken due to relocated hooks and missing MCP server configuration. This change aimed to wire Kilo sessions into the memory, repair the reorg-broken hook integration, and verify session startup into AM after a successful test.

## Facts
- Hook scripts moved from /Servers/ to /Volumes/AI/agentmemory-kilo-hooks
- Kilo `mcp_settings.json` is missing an `agentmemory` entry

## Concepts
- OKF indexing
- MCP settings
- Kilo Code sessions

## Files
- `/Volumes/AI/agentmemory-kilo-hooks`

_Importance: 8 · Confidence: 0.9_
