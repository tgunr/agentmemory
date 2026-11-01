---
type: file_write
title: Fix Hermes slash commands: empty-arg dispatch bugs AND commands that run but are missing from the autocomplete popover
description: Fix Hermes slash commands: empty-arg dispatch bugs AND commands that run but are missing from the autocomplete popover (stale backend process or not registered as a skill command)
resource: agentmemory://observation/obs_mvwcgjuu_8d91fbb876e2
tags: ["React hooks", "file_write"]
timestamp: 2026-10-31T11:55:07.776288+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 8
confidence: 0.9
---
# Summary

Fix Hermes slash commands: empty-arg dispatch bugs AND commands that run but are missing from the autocomplete popover. This fix involves setting the correct type for shell commands to exec or alias for redirects. Check the profile's config.yaml for quick_commands and add the missing block to every profile that should have it. Verify that the command executes fine when typed but is absent from the autocomplete popover.

## Facts
- Fix Hermes slash commands: empty-arg dispatch bugs AND commands that run but are missing from the autocomplete popover
- Set type: exec (for shell commands) or type: alias (for redirects to another slash command)

## Concepts
- React hooks

## Files
- `~/.hermes/profiles/<name>/config.yaml`
- `/Developer/skilled/hermes-slash-script.py`

_Importance: 8 · Confidence: 0.9_
