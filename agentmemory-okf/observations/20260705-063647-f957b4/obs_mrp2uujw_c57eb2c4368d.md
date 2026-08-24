---
type: FileRead
title: Read profile store gateway routing and swap logic
description: Lines 167-191 showing active profile subscription and query invalidation
resource: agentmemory://observation/obs_mrp2uujw_c57eb2c4368d
tags: ["nanostores", "profile switching", "query invalidation", "gateway routing", "state management", "fileread"]
timestamp: 2026-07-17T15:13:06.087684+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

The agent read a section of the profile store to understand profile switching mechanics. It reveals that changing the active gateway profile triggers a global query invalidation and starmap graph reset to prevent stale data, while exposing a swap target atom for UI loading states.

## Facts
- File is 407 lines total, 16431 bytes
- Subscribes to $activeGatewayProfile to update API request profile via setApiRequestProfile
- Invalidates all queries (queryClient.invalidateQueries()) and resets starmap graph when active profile changes
- Exports $gatewaySwapTarget atom to track mid-flight gateway swaps for UI loading states

## Concepts
- nanostores
- profile switching
- query invalidation
- gateway routing
- state management

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/store/profile.ts`

_Importance: 5 · Confidence: 1_
