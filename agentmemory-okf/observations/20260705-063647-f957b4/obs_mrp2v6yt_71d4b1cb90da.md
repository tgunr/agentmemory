---
type: file_edit
title: Clear profile caches on profile switch to prevent stale sidebar data
description: Fixes bug where sidebar renders previous profile's projects after switching
resource: agentmemory://observation/obs_mrp2v6yt_71d4b1cb90da
tags: ["State management", "Cache invalidation", "Profile switching", "Reactive stores", "UI race conditions", "file_edit"]
timestamp: 2026-07-17T15:13:22.177036+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 6
confidence: 1
---
# Summary

Edited profile.ts to explicitly clear project and session state stores when the active profile changes. This prevents a race condition where the sidebar renders stale data from the previous profile because its refetch effect dependencies change asynchronously.

## Facts
- Modified /private/tmp/hermes-profile-fix/apps/desktop/src/store/profile.ts at line 180
- Added $projects.set([]), $projectTree.set([]), and $sessions.set([]) to clear caches on profile change
- Sidebar refetch logic requires both profileScope and gatewayReady to be true, causing skipped refetches if caches aren't explicitly cleared
- TypeScript LSP reported implicit 'any' type errors at lines 288-366, which are outside the edited region

## Concepts
- State management
- Cache invalidation
- Profile switching
- Reactive stores
- UI race conditions

## Files
- `/private/tmp/hermes-profile-fix/apps/desktop/src/store/profile.ts`

_Importance: 6 · Confidence: 1_
