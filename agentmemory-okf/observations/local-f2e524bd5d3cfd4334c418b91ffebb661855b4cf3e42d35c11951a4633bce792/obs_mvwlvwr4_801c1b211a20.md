---
type: file_edit
title: Adding or debugging a Hermes slash command
description: 
resource: agentmemory://observation/obs_mvwlvwr4_801c1b211a20
tags: ["Hermes CLI dispatch layer", "State ownership", "file_edit"]
timestamp: 2026-10-31T16:19:00.873582+00:00
source: agentmemory
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
importance: 7
confidence: 0.9
---
# Summary

The Hermes CLI dispatch layer passes user input to the configured shell command. When adding a new slash command, it's essential to follow a well-defined process, such as picking the surface by state ownership, registering the command in `hermes_cli/commands.py`, and regenerating the desktop dump. The command's behavior depends on the user's action and the current state of the system.

## Facts
- Dispatch layer passes user's typed args to configured shell command
- Pick the surface by state ownership when creating a new slash command

## Concepts
- Hermes CLI dispatch layer
- State ownership

## Files
- `scripts/dump_desktop_slash_registry.py`

_Importance: 7 · Confidence: 0.9_
