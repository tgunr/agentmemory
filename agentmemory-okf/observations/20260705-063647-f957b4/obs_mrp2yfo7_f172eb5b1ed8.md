---
type: file_edit
title: Add regression test for profile-scoped cache invalidation
description: Ensures stale project/session caches are cleared on gateway profile change
resource: agentmemory://observation/obs_mrp2yfo7_f172eb5b1ed8
tags: ["state management testing", "cache invalidation", "regression testing", "reactive stores", "gateway profile switching", "file_edit"]
timestamp: 2026-07-17T15:15:53.425640+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

A new regression test was added to profile.test.ts to ensure switching the active gateway profile clears stale project, project tree, and session caches. This prevents the sidebar from displaying the previous profile's data when profileScope and gatewayReady state changes are not perfectly synchronized.

## Facts
- Added test case verifying $projects, $projectTree, and $sessions stores clear when $activeGatewayProfile changes
- Regression addresses a bug where sidebar skips refetch if profileScope and gatewayReady flip at different times
- Clearing these stores forces the sidebar to rebuild with the new profile's data instead of showing stale state

## Concepts
- state management testing
- cache invalidation
- regression testing
- reactive stores
- gateway profile switching

## Files
- `/private/tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts`

_Importance: 5 · Confidence: 1_
