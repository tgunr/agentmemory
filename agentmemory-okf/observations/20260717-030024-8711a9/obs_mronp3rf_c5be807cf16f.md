---
type: Error
title: Missing tool usage observation data
description: Hook post_tool_call received but no observation payload provided
resource: agentmemory://observation/obs_mronp3rf_c5be807cf16f
tags: ["observation processing", "memory compression", "error"]
timestamp: 2026-07-17T08:08:43.849308+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 1
confidence: 1
---
# Summary

Received a post_tool_call hook notification but the actual tool usage observation data was not included, preventing compression into the required XML format.

## Facts
- Timestamp provided: 2026-07-17T08:08:43.849308+00:00
- Hook name: post_tool_call
- No tool result or action details included in message

## Concepts
- observation processing
- memory compression

_Importance: 1 · Confidence: 1_
