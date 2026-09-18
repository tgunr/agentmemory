---
type: Observation
title: Empty tool observation payload
description: Post-tool-call hook received without tool data
resource: agentmemory://observation/obs_mrnsgb76_88a91b083c03
tags: ["event hook", "missing payload", "observation"]
timestamp: 2026-07-16T17:34:05.487978+00:00
source: agentmemory
session_id: 20260716_122629_af7dd2
importance: 1
confidence: 1
---
# Summary

A post-tool-call hook was triggered but the payload containing the tool usage observation was missing or empty. The engine defaults to a low-importance placeholder to maintain valid XML schema compliance.

## Facts
- Timestamp: 2026-07-16T17:34:05.487978+00:00
- Hook: post_tool_call
- No tool name, arguments, or results provided in input

## Concepts
- event hook
- missing payload

_Importance: 1 · Confidence: 1_
