---
type: file_edit
title: "pytest" command on terminal
description: Running pytest with timeout of 200 seconds
resource: agentmemory://observation/obs_mw15kgpq_3a3e4a49b2f8
tags: ["pytest", "file_edit"]
timestamp: 2026-11-03T20:41:03.897282+00:00
source: agentmemory
session_id: local-b81656e00a7f1ab34be63b7ef024d71aac7156f6cdcbdac7080fa93a8554ea52
importance: 7
confidence: 1
---
# Summary

The "pytest" command on the terminal output failed due to an assertion error.

## Facts
- Command: "cd /Users/davec/Desktop/telegram-warden && timeout 180 .venv/bin/python -m pytest -q 2>&1 | tail -30"
- Output: dry run=True, use_llm=False
- Output: assert actions[:2] == [policy.BAIT, policy.BAIT]
- Output: E       AssertionError: assert ['passthrough', 'passthrough'] == ['bait', 'bait']
- Output: tests/test_bait.py:182: AssertionError
- Output: engine = <warden.engine.Engine object at 0x112859e00>,

## Concepts
- pytest

## Files
- `/Users/davec/Desktop/telegram-warden`

_Importance: 7 · Confidence: 1_
