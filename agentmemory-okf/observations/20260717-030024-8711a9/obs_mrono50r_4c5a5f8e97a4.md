---
type: Error
title: Missing tool call observation data
description: Post-tool call hook received but no tool call details provided
resource: agentmemory://observation/obs_mrono50r_4c5a5f8e97a4
tags: ["tool call observation", "error"]
timestamp: 2026-07-17T08:07:58.825056+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 1
confidence: 1
---
# Summary

Received a post_tool_call hook event but the actual tool call observation data (command results, file changes, etc.) was not provided in the message. Cannot compress an empty observation.

## Facts
- Hook type: post_tool_call
- Timestamp: 2026-07-17T08:07:58.825056+00:00
- No tool call result or command output included in request

## Concepts
- tool call observation

_Importance: 1 · Confidence: 1_
