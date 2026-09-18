---
type: Error
title: No tool usage observation provided
description: User sent timestamp and hook but no actual tool call data
resource: agentmemory://observation/obs_mrnsgtw3_2db2a843e2ef
tags: ["memory compression error", "error"]
timestamp: 2026-07-16T17:34:29.711685+00:00
source: agentmemory
session_id: 20260716_122629_af7dd2
importance: 1
confidence: 1
---
# Summary

No tool usage observation was provided to compress. Only timestamp and hook metadata were included. Cannot generate compressed memory without the actual tool call details.

## Facts
- Hook type was post_tool_call
- No tool name, parameters, or results were provided in the message
- Timestamp: 2026-07-16T17:34:29.711685+00:00

## Concepts
- memory compression error

## Files
- `N/A`

_Importance: 1 · Confidence: 1_
