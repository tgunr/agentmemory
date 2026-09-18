---
type: FileRead
title: Kilo AgentMemory Integration Repair
description: Wire Kilo Code into AgentMemory and repair reorg-broken hook integration.
resource: agentmemory://observation/obs_mspd3k8p_afd662718a42
tags: ["React hooks", "SQL migration", "fileread"]
timestamp: 2026-08-12T00:39:31.125637+00:00
source: agentmemory
session_id: 20260811_193703_9f57d0
importance: 7
confidence: 0.9
---
# Summary

kilo-agentmemory-integration: repair reorg-broken hook integration with Kilo Code wiring and AgentMemory integration. Verify correct Kilo session roll into AM.

## Facts
- Hook scripts: `/Volumes/AI/agentmemory-kilo-hooks/` (MOVED from `/Volumes/AI/Servers/agentmemory-kilo-hooks/` in the 2026-08-11 reorg)
- Kilo `mcp_settings.json` is `{\"mcpServers\": {}}` — NO `agentmemory` entry

## Concepts
- React hooks
- SQL migration

## Files
- `/Volumes/AI/agentmemory-kilo-hooks/`

_Importance: 7 · Confidence: 0.9_
