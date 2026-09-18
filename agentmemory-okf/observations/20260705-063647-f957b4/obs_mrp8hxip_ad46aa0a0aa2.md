---
type: FileRead
title: Test file for gateway profile connection state management
description: Reading profile.test.ts with tests for $connection sync and cache invalidation
resource: agentmemory://observation/obs_mrp8hxip_ad46aa0a0aa2
tags: ["gateway profile", "connection state sync", "$connection observable", "profile-scoped cache invalidation", "regression testing", "fileread"]
timestamp: 2026-07-17T17:51:01.102317+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

The test file validates connection state synchronization logic for gateway profiles, ensuring $connection.mode properly transitions between 'local' and 'remote' when switching profiles, and handles failure cases gracefully. Also includes cache invalidation tests for memory graph and shared profile lists.

## Facts
- File: /Users/davec/.hermes/hermes-agent/apps/desktop/src/store/profile.test.ts
- Contains test suite for ensureGatewayProfile function with 4 test cases
- Test case 1: Refreshes $connection to remote descriptor when activating remote pool profile (regression for #46651)
- Test case 2: Resyncs $connection back to local when returning to default profile
- Test case 3: Leaves prior connection intact when descriptor fetch fails (best-effort behavior)
- Test case 4: Does not churn $connection when target is already active profile
- Additional test suite for profile-scoped cache invalidation and refreshProfiles (#49289)

## Concepts
- gateway profile
- connection state sync
- $connection observable
- profile-scoped cache invalidation
- regression testing

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/profile.test.ts`

_Importance: 5 · Confidence: 1_
