---
type: file_edit
title: Error: Invalid tree RPC call
description: Failed grep command on Hermes agent
resource: agentmemory://observation/obs_mvx1fsdv_87b2fbec64aa
tags: ["tree RPC call", "grep command", "file_edit"]
timestamp: 2026-10-31T23:34:22.575851+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 5
confidence: 1
---
# Summary

The search for a method call error on Hermes Agent failed. The grep command in the `post_tool_call` hook resulted in a large output that needs to be reviewed.

## Facts
- Command run: grep -rn "def _build_project_tree|_build_project_tree" --include=*.py tui_gateway | head -4
- Result: tui_gateway/methods_config.py:130 to tui_gateway/methods_projects.py (13 lines)
- Return status code: 0

## Concepts
- tree RPC call
- grep command

## Files
- `~/.hermes/hermes-agent/tui_gateway/methods_config.py`
- `~/.hermes/hermes-agent/tui_gateway/methods_projects.py`

_Importance: 5 · Confidence: 1_
