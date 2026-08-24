---
type: Observation
title: Missing observation in post_tool_call hook
description: Compression engine invoked without tool usage data
resource: agentmemory://observation/obs_mrooaf1h_715911cfc6af
tags: ["hook execution", "memory compression", "observation"]
timestamp: 2026-07-17T08:25:18.243343+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 1
confidence: 1
---
# Summary

The post_tool_call hook was triggered, but no tool usage observation data was provided to the compression engine. This results in a null state for memory extraction.

## Facts
- Hook: post_tool_call
- Timestamp: 2026-07-17T08:25:18.243343+00:00
- Observation payload is empty or missing from input

## Concepts
- hook execution
- memory compression

_Importance: 1 · Confidence: 1_
