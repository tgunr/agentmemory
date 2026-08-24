---
type: CommandRun
title: Check Python 3.11 installation locations and hermes process runtime
description: Investigating which Python the hermes process is using
resource: agentmemory://observation/obs_mrs1mg23_86ce3d8d7bad
tags: ["UV Python management", "Process runtime inspection", "Python version detection", "commandrun"]
timestamp: 2026-07-19T17:01:52.968242+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 5
confidence: 1
---
# Summary

The system uses UV (a Python package installer) to manage Python rather than Homebrew or Framework installations. The hermes process is running on Python 3.11.11 installed via UV at the user's local share directory.

## Facts
- No python@3.11 found in Homebrew Cellar at /opt/homebrew/Cellar/python@3.11
- No python@3.11 found in /opt/homebrew/opt/python@3.11/bin
- No Python Framework installations found in /Library/Frameworks/Python.framework/Versions/
- Hermes process PID 6336 is using Python from UV: /Users/davec/.local/share/uv/python/cpython-3.11.11-macos-aarch64-none/bin/python3.11

## Concepts
- UV Python management
- Process runtime inspection
- Python version detection

## Files
- `/Users/davec/.local/share/uv/python/cpython-3.11.11-macos-aarch64-none/bin/python3.11`

_Importance: 5 · Confidence: 1_
