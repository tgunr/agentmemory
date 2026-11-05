---
type: FileRead
title: Kilo Code sessions integration into AgentMemory
description: Repair and wire Kilo Code sessions into AgentMemory, verify facts and functionality
resource: agentmemory://observation/obs_mw1wlruj_8ffbce6ede06
tags: ["React hooks", "fileread"]
timestamp: 2026-11-04T09:17:54.617370+00:00
source: agentmemory
session_id: local-631a4a28220271763ee0bb2b92fcd5fa36a4f37349b5cb097f3f9a12d21d4d49
importance: 7
confidence: 1
---
# Summary

The integration of Kilo Code sessions into AgentMemory has been repaired and wired. However, some limitations and breakages have been identified, including the removal of absolute references to /Volumes/AI/agentmemory-hooks/ and the lack of hook subsystem in Kilo 7.4.21.

## Facts
- Hooks use throwaway IDs and capture no transcript content — envelope only, no remember/observe.
- Kilo `mcp_settings.json` is {“mcpServers”: {}} — NO “agentmemory” entry.
- Kilo Code *hook* wiring was NOT preserved.
- Result: Kilo sessions no longer roll into AM.

## Concepts
- React hooks

## Files
- `/Volumes/AI/agentmemory-hooks/`

_Importance: 7 · Confidence: 1_
