---
type: Error
title: Missing tool observation data in post_tool_call hook
description: Hook received without actual tool usage context
resource: agentmemory://observation/obs_mrntpove_b228891f3669
tags: ["memory compression", "hook system", "error"]
timestamp: 2026-07-16T18:09:22.726326+00:00
source: agentmemory
session_id: 20260716_130051_9366bd
importance: 3
confidence: 1
---
# Summary

Post-tool call hook was triggered but no tool usage observation data was included in the request, making it impossible to compress or extract meaningful information.

## Facts
- Timestamp: 2026-07-16T18:09:22.726326+00:00
- Hook type: post_tool_call
- No tool call parameters or results provided in observation

## Concepts
- memory compression
- hook system

## Files
- `none`

_Importance: 3 · Confidence: 1_
