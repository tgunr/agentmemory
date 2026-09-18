---
type: Error
title: read_file tool denied in background review context
description: Background review only allows memory/skill tools
resource: agentmemory://observation/obs_mrrr9aca_3413362f4ca6
tags: ["background review restrictions", "tool whitelisting", "permission boundaries", "memory tools", "skill tools", "error"]
timestamp: 2026-07-19T12:11:42.870017+00:00
source: agentmemory
session_id: 20260719_070432_3968d6
importance: 4
confidence: 1
---
# Summary

The read_file tool was blocked because background review mode restricts tool usage to only memory and skill tools. This prevents file reading operations during background review contexts, requiring an alternative approach or different execution mode.

## Facts
- Tool attempted: read_file with limit=50
- Target path: /Users/davec/.hermes/profiles/personal/skills/mcp-router-guide/SKILL.md
- Error: Background review denied non-whitelisted tool
- Only memory/skill tools are allowed in background review mode

## Concepts
- background review restrictions
- tool whitelisting
- permission boundaries
- memory tools
- skill tools

## Files
- `/Users/davec/.hermes/profiles/personal/skills/mcp-router-guide/SKILL.md`

_Importance: 4 · Confidence: 1_
