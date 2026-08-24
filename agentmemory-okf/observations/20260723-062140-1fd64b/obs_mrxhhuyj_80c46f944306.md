---
type: Observation
title: Error in jq while parsing agent memory health
description: No circuitBreaker data due to failed function metrics
resource: agentmemory://observation/obs_mrxhhuyj_80c46f944306
tags: ["CURL", "jq error handling", "circuitBreaker pattern", "observation"]
timestamp: 2026-07-23T12:25:03.734650+00:00
source: agentmemory
session_id: 20260723_062140_1fd64b
importance: 5
confidence: 0.9
---
# Summary

The execution of the command 'sleep 5 && curl -s http://localhost:3111/agentmemory/health | jq '{status, circuitBreaker, functionMetrics: [.functionMetrics[] | {functionId, successCount, failureCount}]}'' resulted in an error.

## Facts
- Agent memory health query failed with exit code 5
- CURLError: Cannot iterate over null (null) at stdin:0

## Concepts
- CURL
- jq error handling
- circuitBreaker pattern

_Importance: 5 · Confidence: 0.9_
