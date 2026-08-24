---
type: Error
title: No tool usage data provided for compression
description: Received post_tool_call hook without observation payload
resource: agentmemory://observation/obs_mrnu67ic_40fb185f03d3
tags: ["hook processing", "error"]
timestamp: 2026-07-16T18:22:13.373166+00:00
source: agentmemory
session_id: 20260716_130051_9366bd
importance: 1
confidence: 1
---
# Summary

No tool usage observation was provided to compress. Only a post_tool_call hook event with timestamp was received without the actual tool call data that needs to be processed.

## Facts
- Timestamp 2026-07-16T18:22:13.373166+00:00 received
- Hook type: post_tool_call
- No observation data included in request

## Concepts
- hook processing

_Importance: 1 · Confidence: 1_
