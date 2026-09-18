---
type: file_edit
title: hmes-service-debugging
description: No derived memory tiers exist for sessions/summaries but the agentmemory pipeline captures and summarizes observations, resulting in a no-op derivation
resource: agentmemory://observation/obs_mrtqsx05_c69d9f6b7bf8
tags: ["LLM-backed pipelines", "Circuit breakers", "file_edit"]
timestamp: 2026-07-20T21:34:31.441956+00:00
source: agentmemory
session_id: 20260720_151652_9240be
importance: 6
confidence: 0.9
---
# Summary

The agentmemory pipeline captures and summarizes observations but fails to derive insights due to an empty derived memory tier, and two potential failure modes (LLM circuit breaker and viewer proxy timeout) are present.

## Facts
- CircuitBreaker auto-recovers after consecutive successes.
- MCP `memory_crystallize` is NOT on any boot timer — only `mem::consolidate-pipeline` is scheduled every CONSOLIDATION_INTERVAL_MS.

## Concepts
- LLM-backed pipelines
- Circuit breakers

## Files
- `references/derived-memory-empty.md`

_Importance: 6 · Confidence: 0.9_
