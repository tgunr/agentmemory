---
type: FileRead
title: Kilo Code sessions integrated with AgentMemory
description: Reorganization breakage and integration with AM
resource: agentmemory://observation/obs_mvm4m9un_4cece7bf82ec
tags: ["React hooks", "fileread"]
timestamp: 2026-10-24T08:17:56.059895+00:00
source: agentmemory
session_id: local-6a417801a22f8e437858649ef797c4b6df6e7c078e5e912fd49ee6f717861285
importance: 7
confidence: 0.9
---
# Summary

The kilo-agentmemory-integration tool integrates Kilo Code sessions with AgentMemory. The reorganization breakage is fixed, and the tool provides a guide on how to repair the integration. The integration includes a `/am` slash command for searching and recalling sessions.

## Facts
- Hooks relocated: `Servers/` prefix dropped.
- Kilo `mcp_settings.json` is `{\"mcpServers\": {}}` — NO `agentmemory` entry

## Concepts
- React hooks

## Files
- `/Volumes/AI/agentmemory-hooks/`

_Importance: 7 · Confidence: 0.9_
