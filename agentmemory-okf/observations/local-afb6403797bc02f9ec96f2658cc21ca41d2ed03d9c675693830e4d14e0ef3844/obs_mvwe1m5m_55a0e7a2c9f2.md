---
type: file_edit
title: Fix Hermes slash command dispatch bugs
description: Fix empty-arg dispatch bugs AND commands that run but are missing from autocomplete popover
resource: agentmemory://observation/obs_mvwe1m5m_55a0e7a2c9f2
tags: ["React hooks", "SQL migration", "file_edit"]
timestamp: 2026-10-31T12:39:30.145353+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 7
confidence: 0.9
---
# Summary

The Hermes slash command dispatch fixes empty-arg dispatch bugs and commands that run but are missing from the autocomplete popover. The fix involves setting the correct quick command type using the `args_hint` and `description` keys.

## Facts
- Invalid quick command types
- Stale backend process or unregistered skill command

## Concepts
- React hooks
- SQL migration

## Files
- `~/.hermes/profiles/develop/config.yaml`

_Importance: 7 · Confidence: 0.9_
