---
type: Observation
title: Repair and wire Kilo Code sessions into AgentMemory
description: Reorganization breakages in Kilo Code and repair process
resource: agentmemory://observation/obs_mvqexiqz_0c67001279fb
tags: ["okf[*] scripts", "kilo-code", "agentmemory", "observation"]
timestamp: 2026-10-27T08:17:41.673462+00:00
source: agentmemory
session_id: local-209b024e3f6a257e424b5b24d05332c3080712906c729081bc69867754833c21
importance: 8
confidence: 1
---
# Summary

Reorganization breakages in Kilo Code and repair process. The fix involved re-penting absolute references, registering the agentmemory MCP server, and restarting Kilo and VS Code. The system now properly rolls Kilo sessions into AgentMemory.

## Facts
- Hooks relocated without reference to kilo-code settings
- Kilo Code can't call AM via MCP
- Result: Kilo sessions no longer roll into AM
- Reference session: 20260718_061804_159701
- Kilo 7.4.21 has no hook subsystem

## Concepts
- okf[*] scripts
- kilo-code
- agentmemory

## Files
- `/Volumes/AI/agentmemory-hooks/`

_Importance: 8 · Confidence: 1_
