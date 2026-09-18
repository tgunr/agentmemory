---
type: Error
title: No tool usage observation provided for compression
description: Hook triggered but missing observation data
resource: agentmemory://observation/obs_mrntx59x_b75ae6fa0b0d
tags: ["memory compression", "error handling", "error"]
timestamp: 2026-07-16T18:15:10.577700+00:00
source: agentmemory
session_id: 20260716_130051_9366bd
importance: 2
confidence: 1
---
# Summary

Memory compression hook was triggered but no actual tool usage observation was provided to compress. This error observation indicates the compression engine received an empty or incomplete request.

## Facts
- Timestamp: 2026-07-16T18:15:10.577700+00:00
- Hook: post_tool_call
- No tool call or observation data found in request

## Concepts
- memory compression
- error handling

_Importance: 2 · Confidence: 1_
