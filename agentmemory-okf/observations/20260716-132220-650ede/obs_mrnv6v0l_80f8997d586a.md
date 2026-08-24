---
type: Error
title: Missing tool call observation data
description: No tool call details provided in hook event
resource: agentmemory://observation/obs_mrnv6v0l_80f8997d586a
tags: ["hook processing", "observation compression", "error"]
timestamp: 2026-07-16T18:50:43.456798+00:00
source: agentmemory
session_id: 20260716_132220_650ede
importance: 1
confidence: 1
---
# Summary

Received a post-tool call hook event but the actual tool call observation data is missing from the payload. Cannot compress the observation without the tool call details.

## Facts
- Hook type: post_tool_call
- Timestamp: 2026-07-16T18:50:43.456798+00:00
- No actual tool invocation details included in message

## Concepts
- hook processing
- observation compression

_Importance: 1 · Confidence: 1_
