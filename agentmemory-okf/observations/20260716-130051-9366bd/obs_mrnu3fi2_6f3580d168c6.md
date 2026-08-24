---
type: Error
title: No tool usage observation provided in hook call
description: Hook received timestamp but missing observation data
resource: agentmemory://observation/obs_mrnu3fi2_6f3580d168c6
tags: ["hook observation processing", "error"]
timestamp: 2026-07-16T18:20:03.644618+00:00
source: agentmemory
session_id: 20260716_130051_9366bd
importance: 2
confidence: 1
---
# Summary

The post_tool_call hook was invoked with a timestamp but did not contain any actual tool usage observation data to compress into structured format. Without the observation details, no meaningful compression can be performed.

## Facts
- Hook type: post_tool_call
- Timestamp provided: 2026-07-16T18:20:03.644618+00:00
- No tool usage data or observation details included in request

## Concepts
- hook observation processing

_Importance: 2 · Confidence: 1_
