---
type: Observation
title: post_tool_call hook received without payload
description: Missing tool observation data
resource: agentmemory://observation/obs_mrnvrdw0_fd6ee582e20b
tags: ["event hook", "memory compression", "observation"]
timestamp: 2026-07-16T19:06:41.036695+00:00
source: agentmemory
session_id: 20260716_135831_0178ff
importance: 1
confidence: 0.9
---
# Summary

The system received a post_tool_call hook event but lacked the actual tool observation data to compress. The memory compression engine requires the tool output to generate structured data.

## Facts
- Timestamp: 2026-07-16T19:06:41.036695+00:00
- Hook: post_tool_call

## Concepts
- event hook
- memory compression

_Importance: 1 · Confidence: 0.9_
