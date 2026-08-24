---
type: FileRead
title: Profile-scoped API routing and cache invalidation
description: Active gateway profile changes synchronize REST routing and stale state.
resource: agentmemory://observation/obs_mrp8hrtl_7cb82bba8c5c
tags: ["profile-scoped API routing", "query cache invalidation", "reactive atom subscription", "gateway profile switching", "lazy backend spawning", "fileread"]
timestamp: 2026-07-17T17:50:53.718327+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

The profile store routes profile-scoped REST requests to the backend used by the live gateway. Switching profiles clears cached settings, session data, and the starmap graph, while exposing swap state so chat can show a profile wake-up loader.

## Facts
- $activeGatewayProfile subscription normalizes the profile key and passes it to setApiRequestProfile.
- When the routed profile changes after initialization, all queryClient queries are invalidated and resetStarmapGraph is called.
- The initial subscription records the profile without invalidation, avoiding extra fetches for single-profile users.
- $gatewaySwapTarget is an atom containing the target profile during backend spawn or reconnection, otherwise null.
- gatewaySwitch stores the in-flight gateway-switch Promise or null.

## Concepts
- profile-scoped API routing
- query cache invalidation
- reactive atom subscription
- gateway profile switching
- lazy backend spawning

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/profile.ts`

_Importance: 5 · Confidence: 1_
