---
type: CommandRun
title: tui_gateway error handling
description: session DB persistence issue on first real activity
resource: agentmemory://observation/obs_mryz9qc2_67b89fddff45
tags: ["commandrun"]
timestamp: 2026-07-24T13:30:23.755349+00:00
source: agentmemory
session_id: 20260724_082040_88f841
importance: 7
confidence: 0.85
---
# Summary

The TUI Gateway experienced an error handling issue with session DB persistence on the first real activity, prompting a user to select a workspace. This highlights the need for a more robust persistence mechanism.

## Facts
- wrapper around tools.terminal_tool.register_task_env_overrides
- yields KeyError due to session[\"session_key\"]
- Prompts user for workspace selection, groups sessions under "No workspace" when none specified

## Files
- `/Users/davec/.hermes/hermes-agent/tui_gateway/server.py`

_Importance: 7 · Confidence: 0.85_
