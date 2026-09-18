---
type: Error
title: Invalid observation - missing tool call data
description: Post-tool call hook triggered but no tool usage provided
resource: agentmemory://observation/obs_mrntpm88_301de8880c5d
tags: ["memory compression", "error handling", "error"]
timestamp: 2026-07-16T18:09:19.299881+00:00
source: agentmemory
session_id: 20260716_130051_9366bd
importance: 3
confidence: 0.9
---
# Summary

Incomplete observation data received - cannot compress tool usage without actual tool call details. Need tool name, parameters, and results to create valid compressed memory entry.

## Facts
- No tool call data included in observation
- Only timestamp and hook type provided

## Concepts
- memory compression
- error handling

_Importance: 3 · Confidence: 0.9_
