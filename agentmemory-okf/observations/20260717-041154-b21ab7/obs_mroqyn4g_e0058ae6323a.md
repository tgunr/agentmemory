---
type: file_write
title: Documentation for agentmemory metrics reset mechanism written to skill
description: Explains MetricsStore architecture and reset endpoint for mem::compress
resource: agentmemory://observation/obs_mroqyn4g_e0058ae6323a
tags: ["OpenTelemetry metrics reset", "KV store cache invalidation", "metrics-store architecture", "file_write"]
timestamp: 2026-07-17T09:40:07.692458+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 6
confidence: 1
---
# Summary

Documentation created explaining how to properly reset OpenTelemetry metrics for agentmemory functions. Details the dual-layer storage (cache + KV), the trap where direct edits fail to clear running memory, and the correct reset procedure through the new endpoint. Includes verification steps and deployment considerations.

## Facts
- Tool: skill_manage with write_file action
- File written to hermes-service-debugging skill: references/metrics-reset.md
- Documents MetricsStore in src/eval/metrics-store.ts with in-memory cache + KV persistence
- Introduces mem::reset-metrics function and POST /agentmemory/metrics/reset endpoint
- Warning: direct KV edits don't clear in-memory cache - must use live function for reset
- Provides curl recipe to reset mem::compress metrics on live service

## Concepts
- OpenTelemetry metrics reset
- KV store cache invalidation
- metrics-store architecture

## Files
- `references/metrics-reset.md`

_Importance: 6 · Confidence: 1_
