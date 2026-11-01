---
type: file_edit
title: Update desktop slash registry
description: Run scripts/dump_desktop_slash_registry.py after changing desktop= alias
resource: agentmemory://observation/obs_mvwcofev_383d0582eaca
tags: ["hermes_cli", "desktop slash registry", "file_edit"]
timestamp: 2026-10-31T12:01:15.267385+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 8
confidence: 1
---
# Summary

The script successfully updated the desktop slash registry, and this is a necessary post-change check to ensure the code still works correctly after edits to the `desktop=` value or alias in `hermes_cli/commands.py`.

## Facts
- Used sed command to extract and print a subset of a file
- Modified file was tests/hermes_cli/test_desktop_slash_registry.py
- Read file at /Users/davec/.hermes/hermes-agent was modified

## Concepts
- hermes_cli
- desktop slash registry

## Files
- `/Users/dave/.hermes/hermes-agent/tests/hermes_cli/test_desktop_slash_registry.py`

_Importance: 8 · Confidence: 1_
