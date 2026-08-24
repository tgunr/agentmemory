---
type: file_edit
title: OpenAI client initialization failed
description: No module named 'pydantic_core._pydantic_core' detected
resource: agentmemory://observation/obs_mrxe13kz_1c7dfccc3ebc
tags: ["pydantic errors", "file_edit"]
timestamp: 2026-07-23T10:48:02.911636+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 7
confidence: 1
---
# Summary

The OpenAI client initialization failed due to a missing module, resulting in a runtime error during pytest test execution.

## Facts
- Running pytest tests/cli/ with command:
- Warning: coroutine 'Process.communicate' was never awaited and traceback is missing
- Error in agent/agent_init.py:1124 with exit_code 1

## Concepts
- pydantic errors

_Importance: 7 · Confidence: 1_
