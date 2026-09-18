---
type: file_write
title: Create metrics reset function registration
description: Registers mem::reset-metrics SDK function to clear metrics and log audit
resource: agentmemory://observation/obs_mroq46us_5a5a74e00061
tags: ["SDK function registration", "metrics management", "audit logging", "TypeScript", "file_write"]
timestamp: 2026-07-17T09:16:26.929026+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 5
confidence: 1
---
# Summary

Created a new TypeScript module to register a metrics reset function on the SDK. The function allows clearing all or specific metrics via MetricsStore and records an audit event for tracking purposes.

## Facts
- Created /Volumes/AI/agentmemory/src/functions/metrics.ts
- Registers SDK function "mem::reset-metrics" to reset metrics via MetricsStore
- Accepts optional functionId parameter to reset specific or all metrics
- Records audit event "metrics_reset" with scope and functionId details via recordAudit
- Imports ISdk from iii-sdk, StateKV, MetricsStore, and recordAudit

## Concepts
- SDK function registration
- metrics management
- audit logging
- TypeScript

## Files
- `/Volumes/AI/agentmemory/src/functions/metrics.ts`

_Importance: 5 · Confidence: 1_
