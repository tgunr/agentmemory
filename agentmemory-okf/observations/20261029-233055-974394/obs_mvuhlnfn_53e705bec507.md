---
type: file_edit
title: Review of `legacy_fallback_allowed` usage in agent scripts
description: Inspecting Python scripts for agent-specific configurations
resource: agentmemory://observation/obs_mvuhlnfn_53e705bec507
tags: ["Python string pattern search", "file_edit"]
timestamp: 2026-10-30T04:43:31.423186+00:00
source: agentmemory
session_id: 20261029_233055_974394
importance: 8
confidence: 0.9
---
# Summary

The agent script reviewed the use of `legacy_fallback_allowed` in test Python files, ensuring it aligns with its configuration. The search returned relevant findings in specific scripts.

## Facts
- Used `grep` command to search for specific string patterns in Python files
- Found references to `legacy_fallback_allowed` and `_SESSION_FALLBACK_ALLOWED` in several script locations

## Concepts
- Python string pattern search

## Files
- `/Users/davec/.hermes/hermes-agent && cd /Users/davec/.hermes/hermes-agent && .`
- `./tests/tui_gateway/test_legacy_fallback_profile_scope.py`
- `./tui_gateway/ws.py`
- `./scripts/gen_gateway_command_parity.py`

_Importance: 8 · Confidence: 0.9_
