---
type: Observation
title: Colo: Kilo Code sessions into AgentMemory
description: Update hooks, MCP server, and Kilo Code session repair
resource: agentmemory://observation/obs_mvozhogk_42559522f115
tags: ["hook repair", "observation"]
timestamp: 2026-10-26T08:17:42.162136+00:00
source: agentmemory
session_id: local-b05aa39d4b1be7660032504cc6b1bef01d0f17ba006c1f23ce4a3f80b001d995
importance: 8
confidence: 1
---
# Summary

The integration fixes issues with Kilo Code sessions into AgentMemory. The main issues were with the hooks, MCP server, and Kilo Code session repair.

The old 
    [truncated]

## Facts
- Hook scripts moved from `agentmemory-kilo-hooks/` to `/Volumes/...` in the 2026-08-23 rename; OKF-facing `okf_*` scripts moved to `mirror-okf.sh`/`okf-bridge.py`.
- Limitation of hooks using throwaway IDs and capturing no transcript content.
- Kilo `mcp_settings.json` has no `agentmemory` entry, causing Kilo sessions no longer rolling into AM.

## Concepts
- hook repair

## Files
- `/Volumes/AI/agentmemoryHooks/`

_Importance: 8 · Confidence: 1_
