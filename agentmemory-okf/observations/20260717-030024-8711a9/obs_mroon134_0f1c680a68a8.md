---
type: Error
title: Missing tool usage observation data
description: Hook called with timestamp but no actual tool result provided
resource: agentmemory://observation/obs_mroon134_0f1c680a68a8
tags: ["hook processing", "missing data", "error"]
timestamp: 2026-07-17T08:35:06.686295+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 2
confidence: 1
---
# Summary

The post_tool_call hook was triggered but no actual tool usage observation was included in the request. Cannot compress or extract information from missing data.

## Facts
- Hook type: post_tool_call
- Timestamp: 2026-07-17T08:35:06.686295+00:00
- No tool name, result, or observation data provided

## Concepts
- hook processing
- missing data

_Importance: 2 · Confidence: 1_
