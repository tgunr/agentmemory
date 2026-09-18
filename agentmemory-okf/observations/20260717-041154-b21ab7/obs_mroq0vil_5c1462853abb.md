---
type: FileRead
title: Reviewed API trigger registration and feature flags
description: Read lines 130-219 of the AgentMemory API trigger module
resource: agentmemory://observation/obs_mroq0vil_5c1462853abb
tags: ["HTTP API triggers", "bearer token authentication", "timing-safe comparison", "liveness endpoint", "feature flags", "runtime provider detection", "input validation", "fileread"]
timestamp: 2026-07-17T09:13:52.264552+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 3
confidence: 1
---
# Summary

The API module registers bearer-token authentication, service liveness, and runtime feature-flag reporting. This section establishes how health checks remain public while configuration data is authenticated and explains optional LLM-backed capabilities to the viewer.

## Facts
- registerApiTriggers accepts an SDK, StateKV, optional API secret, optional MetricsStore, and optional resilient provider or circuit-state object.
- The middleware::api-auth function permits requests when no secret is configured; otherwise it validates an Authorization Bearer header using timingSafeCompare and returns HTTP 401 on failure.
- The unauthenticated GET /agentmemory/livez endpoint returns status ok, service agentmemory, the bound viewer port, and whether the viewer was skipped.
- The authenticated api::config-flags handler detects LLM and embedding providers and reports flags including GRAPH_EXTRACTION_ENABLED, CONSOLIDATION_ENABLED, and AGENTMEMORY_AUTO_COMPRESS with status, defaults, affected UI areas, requirements, descriptions, setup instructions, and documentation links.
- parseOptionalPositiveInt returns undefined or null unchanged and rejects non-integers or values below 1 by returning null.

## Concepts
- HTTP API triggers
- bearer token authentication
- timing-safe comparison
- liveness endpoint
- feature flags
- runtime provider detection
- input validation

## Files
- `/Volumes/AI/agentmemory/src/triggers/api.ts`

_Importance: 3 · Confidence: 1_
