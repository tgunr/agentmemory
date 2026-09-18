---
type: Error
title: No tool usage observation data provided
description: Hook received but missing observation content to compress
resource: agentmemory://observation/obs_mrnv76nt_9462c19e2c2d
tags: ["observation compression", "tool call logging", "error"]
timestamp: 2026-07-16T18:50:58.545245+00:00
source: agentmemory
session_id: 20260716_132220_650ede
importance: 1
confidence: 0.9
---
# Summary

Missing the actual tool call observation data needed to compress into structured format. The hook was triggered but no observation payload was included in the request.

## Facts
- Hook type: post_tool_call
- Timestamp: 2026-07-16T18:50:58.545245+00:00

## Concepts
- observation compression
- tool call logging

_Importance: 1 · Confidence: 0.9_
