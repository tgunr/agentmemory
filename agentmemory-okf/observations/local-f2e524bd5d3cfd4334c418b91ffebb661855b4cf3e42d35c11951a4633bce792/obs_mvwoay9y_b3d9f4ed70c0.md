---
type: file_edit
title: Probe dispatch test
description: No operation, test file
resource: agentmemory://observation/obs_mvwoay9y_b3d9f4ed70c0
tags: ["asyncio", "file_edit"]
timestamp: 2026-10-31T17:26:41.922682+00:00
source: agentmemory
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
importance: 8
confidence: 0.9
---
# Summary

The experiment tested the dispatch functionality of the Hermes agent with a probe script. The script inserted a custom CASE definition and executed a set of test cases, including a list command. The test reported results on each case, noting that two cases timed out with a GatewayRPCError.

## Facts
- Task timeout set to 180 seconds for all tool calls

## Concepts
- asyncio

## Files
- `/tmp/probe-dispatch.py`

_Importance: 8 · Confidence: 0.9_
