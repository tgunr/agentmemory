---
type: FileRead
title: Command failed in Python script
description: Failed pipeline processing
resource: agentmemory://observation/obs_mvx1hdbq_259f1636547f
tags: ["Python script error", "fileread"]
timestamp: 2026-10-31T23:35:36.371479+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 6
confidence: 1
---
# Summary

The command to run the Python script /tmp/probe_tree2.py failed with a NameError due to an undefined variable.

## Facts
- Tool: terminal
- Command: cd ~/.hermes/hermes-agent && venv/bin/python /tmp/probe_tree2.py 2>&1 | tail -18
- Output: db: SessionDBTraceback (most recent call last): ...
- Error: NameError: name '_load_cfg' is not defined

## Concepts
- Python script error

## Files
- `/tmp/probe_tree2.py`
- `/Users/davec/.hermes/hermes-agent/tui_gateway/methods_projects.py`

_Importance: 6 · Confidence: 1_
