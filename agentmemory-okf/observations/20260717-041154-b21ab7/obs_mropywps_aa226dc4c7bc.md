---
type: FileRead
title: Read MetricsStore class implementation
description: Function metrics tracking with cache and KV persistence
resource: agentmemory://observation/obs_mropywps_aa226dc4c7bc
tags: ["TypeScript class", "metrics tracking", "running average calculation", "in-memory cache with persistent storage", "key-value store integration", "error swallowing pattern", "fileread"]
timestamp: 2026-07-17T09:12:20.508927+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 3
confidence: 1
---
# Summary

Read the MetricsStore implementation which provides function-level metrics tracking including latency, success rates, and quality scores. The class uses a two-tier storage pattern with in-memory cache for fast reads and KV store for persistence, using running averages to efficiently update metrics without storing all historical data.

## Facts
- MetricsStore class manages FunctionMetrics with in-memory Map cache and StateKV persistence
- Tracks totalCalls, successCount, failureCount, avgLatencyMs, avgQualityScore per functionId
- Uses running average formula: (prev_avg * prev_count + new_value) / new_count for latency and quality
- getAll() merges KV store data with in-memory cache, with cache values taking precedence
- KV persistence errors on set are silently swallowed with .catch(() => {})
- Quality call counts tracked separately in qualityCallCounts Map for accurate averaging

## Concepts
- TypeScript class
- metrics tracking
- running average calculation
- in-memory cache with persistent storage
- key-value store integration
- error swallowing pattern

## Files
- `/Volumes/AI/agentmemory/src/eval/metrics-store.ts`

_Importance: 3 · Confidence: 1_
