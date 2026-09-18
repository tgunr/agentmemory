---
type: Observation
title: Post-tool-call hook triggered without payload
description: Missing tool usage data for compression
resource: agentmemory://observation/obs_mrnugvq0_18842035cfed
tags: ["memory compression", "hook trigger", "observation"]
timestamp: 2026-07-16T18:30:31.315859+00:00
source: agentmemory
session_id: 20260716_132220_650ede
importance: 1
confidence: 1
---
# Summary

The post_tool_call hook was triggered but the actual tool usage observation data is missing. Memory compression cannot extract facts, files, or concepts without the tool call payload.

## Facts
- Timestamp: 2026-07-16T18:30:31.315859+00:00
- Hook: post_tool_call
- No tool call details provided in the input

## Concepts
- memory compression
- hook trigger

_Importance: 1 · Confidence: 1_
