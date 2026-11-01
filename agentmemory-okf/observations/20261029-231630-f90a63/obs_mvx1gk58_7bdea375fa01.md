---
type: file_edit
title: Extracting profile-db from Hermes agent
description: Running grep command on terminal output
resource: agentmemory://observation/obs_mvx1gk58_7bdea375fa01
tags: ["Python code pattern", "file_edit"]
timestamp: 2026-10-31T23:34:58.551078+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 4
confidence: 1
---
# Summary

The `grep` command was executed in the terminal to extract the `_profile_db` function from the Hermes agent.

## Facts
- Command: cd ~/.hermes/hermes-agent && grep -rn \"def _profile_db\" -A 20 tui_gateway/*.py | head -30
- Tool: terminal
- Command exit code: 0
- Cwd: /Users/davec/.hermes/hermes-agent
- Output:
- tui_gateway/server.py:378:def _profile_db(params: dict | None = None, *, writer: bool = False):...

## Concepts
- Python code pattern

## Files
- `/Users/davec/.hermes/hermes-agent/tui_gateway/server.py`

_Importance: 4 · Confidence: 1_
