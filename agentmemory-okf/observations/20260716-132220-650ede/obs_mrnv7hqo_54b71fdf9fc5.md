---
type: Error
title: Missing observation data
description: Hooks triggered but no tool call result provided
resource: agentmemory://observation/obs_mrnv7hqo_54b71fdf9fc5
tags: ["observation compression", "tool call missing", "error"]
timestamp: 2026-07-16T18:51:12.908007+00:00
source: agentmemory
session_id: 20260716_132220_650ede
importance: 1
confidence: 1
---
# Summary

The post_tool_call hook was triggered but the actual tool call result observation data was not provided, making it impossible to compress into the required structured format.

## Facts
- Timestamp provided: 2026-07-16T18:51:12.908007+00:00
- Hook type: post_tool_call
- No tool call observation content was included in the message

## Concepts
- observation compression
- tool call missing

_Importance: 1 · Confidence: 1_
