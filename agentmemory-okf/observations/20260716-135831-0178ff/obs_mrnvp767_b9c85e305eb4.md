---
type: Error
title: Missing tool usage observation data
description: No actual tool call results provided for compression
resource: agentmemory://observation/obs_mrnvp767_b9c85e305eb4
tags: ["memory compression", "tool observation processing", "error"]
timestamp: 2026-07-16T19:04:59.018772+00:00
source: agentmemory
session_id: 20260716_135831_0178ff
importance: 3
confidence: 1
---
# Summary

The hook was triggered but no actual tool usage observation was provided to compress. The request only contains timestamp and hook type information without the actual tool call results that need to be processed.

## Facts
- Timestamp provided: 2026-07-16T19:04:59.018772+00:00
- Hook type indicated: post_tool_call
- No tool_call_id or observation data in the request

## Concepts
- memory compression
- tool observation processing

## Files
- `N/A`

_Importance: 3 · Confidence: 1_
