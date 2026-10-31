---
type: CommandRun
title: pytest failed
description: Command output shows failures
resource: agentmemory://observation/obs_mvv79na9_3636ead267a4
tags: ["test assertion error", "commandrun"]
timestamp: 2026-10-30T16:42:01.372101+00:00
source: agentmemory
session_id: local-e49df9712a3e9a279be8ea5d6eb7d66d5d70ae98d740e8f9f548cc83098b4aac
importance: 5
confidence: 1
---
# Summary

The pytest command failed with an assertion error.

## Facts
- Tool used: terminal
- Command executed: cd /Users/davec/Desktop/telegram-warden && .venv/bin/python -m pytest tests/test_business.py::test_connection_is_persisted_with_rights -q 2>&1 | head -40
- Exit code: 0

## Concepts
- test assertion error

## Files
- `/Users/davec/Desktop/telegram-warden/.venv/bin/python`

_Importance: 5 · Confidence: 1_
