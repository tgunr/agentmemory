---
type: Error
title: Insufficient observation data for compression
description: Only hook metadata provided without tool call content
resource: agentmemory://observation/obs_mrnsrwrq_c30fe5610b16
tags: ["memory compression", "observation processing", "error"]
timestamp: 2026-07-16T17:43:06.658624+00:00
source: agentmemory
session_id: 20260716_122629_af7dd2
importance: 1
confidence: 1
---
# Summary

Cannot compress the observation because only hook metadata was provided without the actual tool call details such as command output, file content, or search results. Need the full observation data to create the compressed format.

## Facts
- Timestamp provided: 2026-07-16T17:43:06.658624+00:00
- Hook type: post_tool_call
- No actual tool usage observation content was included in the input

## Concepts
- memory compression
- observation processing

_Importance: 1 · Confidence: 1_
