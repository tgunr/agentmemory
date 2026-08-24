---
type: file_edit
title: Updated Hermes service debugging knowledge with cron scheduling and metrics reset procedures
description: Patched SKILL.md entries 34-36 documenting endpoint consistency and reset mechanics
resource: agentmemory://observation/obs_mroqzcti_1b3b42b43c2d
tags: ["cronjob script path", "MetricsStore cache", "endpoint documentation consistency", "file_edit"]
timestamp: 2026-07-17T09:40:40.993197+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 6
confidence: 1
---
# Summary

Patched the hermes-service-debugging skill with three new troubleshooting entries covering cron script path restrictions, the two-layer metrics cache reset process requiring explicit API calls, and the requirement to keep endpoint counts synchronized across three documentation sources.

## Facts
- Added entry #34 about cronjob script path requirements: must be relative path under ~/.hermes/scripts/
- Added entry #35 about MetricsStore being in-memory cache rebuilt from KV: reset requires explicit POST endpoint
- Added entry #36 about API endpoint count consistency across README, AGENTS/index, and api.ts
- write_file blocks creating files under /var/folders/.../T/ for security reasons
- Direct KV edits don't clear running worker cache; only mem::reset-metrics POST works

## Concepts
- cronjob script path
- MetricsStore cache
- endpoint documentation consistency

## Files
- `skills/hermes-service-debugging/SKILL.md`

_Importance: 6 · Confidence: 1_
