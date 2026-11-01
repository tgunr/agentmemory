---
type: file_edit
title: terminal edit: grep file
description: searches for command in Hermes agent
resource: agentmemory://observation/obs_mvwi44xd_baa54f2f0939
tags: ["authorization patterns", "file_edit"]
timestamp: 2026-10-31T14:33:26.254001+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 7
confidence: 0.9
---
# Summary

Edited a grep command to find a specific function in the Hermes agent code, yielding output with multiple instances of a read authority function.

## Facts
- Tool used: terminal
- Command executed: cd /Users/davec/.hermes/hermes-agent && grep -n \"session:read\\|session:control\\|_HANDLERS\\|def _handler\\|async def _projects\\|_HANDLER_TABLE\\|requires=\" gateway/session_commands.py | head -30

## Concepts
- authorization patterns

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/session_commands.py`

_Importance: 7 · Confidence: 0.9_
