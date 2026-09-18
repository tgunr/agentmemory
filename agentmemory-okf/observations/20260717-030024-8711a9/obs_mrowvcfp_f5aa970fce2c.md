---
type: CommandRun
title: Add metrics-reset API endpoint and verify revert
description: New POST endpoint for resetting metrics with optional functionId
resource: agentmemory://observation/obs_mrowvcfp_f5aa970fce2c
tags: ["API endpoint registration", "metrics reset", "authentication middleware", "code revert verification", "commandrun"]
timestamp: 2026-07-17T12:25:31.568663+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 6
confidence: 1
---
# Summary

A new API endpoint was added to reset metrics, optionally for a specific function. The endpoint includes authentication and triggers the mem::reset-metrics function. A verification grep confirmed that previously reverted code left no residue in the source tree.

## Facts
- Added api::metrics-reset function at /agentmemory/metrics/reset (POST method)
- Endpoint accepts optional functionId parameter in request body
- Triggers mem::reset-metrics with functionId payload when provided
- Verified no residue from reverted code (recompress, observations-delete, tmp/backfill, tmp/purge) in src/
- Endpoint uses middleware::api-auth for authentication

## Concepts
- API endpoint registration
- metrics reset
- authentication middleware
- code revert verification

## Files
- `src/triggers/api.ts`

_Importance: 6 · Confidence: 1_
