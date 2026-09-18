---
type: Search
title: Search found 28 matches for metric/Metric in api.ts triggers file
description: MetricsStore imported and used in health API endpoint
resource: agentmemory://observation/obs_mropz15s_4d44f2e868f2
tags: ["MetricsStore", "health endpoint", "circuit breaker pattern", "resilient provider", "search"]
timestamp: 2026-07-17T09:12:26.269283+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 5
confidence: 1
---
# Summary

Search revealed MetricsStore integration in the API triggers module, showing how metrics collection is wired into the health check endpoint alongside circuit breaker monitoring for resilient provider state.

## Facts
- 28 total matches found for pattern "metric|Metric"
- MetricsStore imported from "../eval/metrics-store.js" as a type
- apis.registerFunction accepts optional metricsStore?: MetricsStore parameter
- Health endpoint retrieves all metrics via metricsStore.getAll()
- Metrics combined with circuit breaker state for health response

## Concepts
- MetricsStore
- health endpoint
- circuit breaker pattern
- resilient provider

## Files
- `/Volumes/AI/agentmemory/src/triggers/api.ts`

_Importance: 5 · Confidence: 1_
