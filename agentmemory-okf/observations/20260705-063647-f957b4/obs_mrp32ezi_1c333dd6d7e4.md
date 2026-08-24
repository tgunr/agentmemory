---
type: FileRead
title: Profile routing invalidates scoped state on gateway change
description: Active gateway profile updates API routing and swap loading state.
resource: agentmemory://observation/obs_mrp32ezi_1c333dd6d7e4
tags: ["profile-scoped query invalidation", "gateway profile routing", "Nanostores atom", "lazy backend spawning", "TanStack Query", "fileread"]
timestamp: 2026-07-17T15:18:59.160438+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The profile store keeps API request routing synchronized with the active gateway profile. Switching profiles marks profile-scoped settings and the unified session list stale, resets the starmap graph, and exposes swap progress so the chat can show a profile-specific waking-up loader.

## Facts
- $activeGatewayProfile subscription normalizes the selected profile key and passes it to setApiRequestProfile.
- When the routed profile changes after initialization, all queryClient queries are invalidated and resetStarmapGraph is called.
- $gatewaySwapTarget is an atom containing the target profile during backend spawning or reconnection, otherwise null.
- gatewaySwitch stores the in-flight gateway switch Promise or null.

## Concepts
- profile-scoped query invalidation
- gateway profile routing
- Nanostores atom
- lazy backend spawning
- TanStack Query

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/profile.ts`

_Importance: 3 · Confidence: 1_
