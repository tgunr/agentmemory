---
type: Error
title: Missing tool usage data in observation
description: Hook received but no tool call details provided
resource: agentmemory://observation/obs_mrnu6mcu_29cb14d3adfa
tags: ["data validation", "error handling", "error"]
timestamp: 2026-07-16T18:22:32.618945+00:00
source: agentmemory
session_id: 20260716_132220_650ede
importance: 1
confidence: 1
---
# Summary

Received a post_tool_call hook notification but the required tool usage details were not provided in the input, making it impossible to compress the observation data.

## Facts
- Timestamp provided: 2026-07-16T18:22:32.618945+00:00
- Hook type: post_tool_call
- No actual tool call data or results included

## Concepts
- data validation
- error handling

_Importance: 1 · Confidence: 1_
