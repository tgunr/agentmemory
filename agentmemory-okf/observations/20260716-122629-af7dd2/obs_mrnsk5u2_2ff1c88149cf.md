---
type: Error
title: Insufficient observation data provided
description: Missing actual tool call details in post_tool_call hook
resource: agentmemory://observation/obs_mrnsk5u2_2ff1c88149cf
tags: ["missing_observation", "error"]
timestamp: 2026-07-16T17:37:05.158835+00:00
source: agentmemory
session_id: 20260716_122629_af7dd2
importance: 2
confidence: 1
---
# Summary

The observation lacks essential details about which tool was called and what the result was. This prevents proper compression and summary.

## Facts
- Timestamp: 2026-07-16T17:37:05.158835+00:00
- Hook type: post_tool_call
- No tool name, parameters, or result data provided

## Concepts
- missing_observation

_Importance: 2 · Confidence: 1_
