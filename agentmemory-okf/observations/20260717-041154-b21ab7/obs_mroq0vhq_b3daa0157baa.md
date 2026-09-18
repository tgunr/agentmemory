---
type: Search
title: Search for endpoint registration and metrics store in index.ts
description: Found 23 matches showing API endpoint registration patterns
resource: agentmemory://observation/obs_mroq0vhq_b3daa0157baa
tags: ["endpoint registration", "dependency injection", "metrics tracking", "SDK initialization", "search"]
timestamp: 2026-07-17T09:13:52.234652+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 7
confidence: 1
---
# Summary

The search reveals the API endpoint registration architecture in agentmemory, showing how metrics tracking is integrated through MetricsStore and how various SDK endpoints are registered with dependencies like kv store and provider. The system exposes 128 REST endpoints for agent memory operations.

## Facts
- MetricsStore initialized on line 221 with kv (StateKV) dependency
- registerApiTriggers called on line 372 with kv, secret, metricsStore, and provider parameters
- registerMcpEndpoints called on line 374 with kv and secret parameters
- Boot log on line 521 references 128 REST API endpoints at agentmemory path
- Multiple registration functions called: DiskSizeManager, CompressFunction, SearchFunction, ContextFunction, SummarizeFunction, MigrateFunction, FileIndexFunction

## Concepts
- endpoint registration
- dependency injection
- metrics tracking
- SDK initialization

## Files
- `/Volumes/AI/agentmemory/src/index.ts`

_Importance: 7 · Confidence: 1_
