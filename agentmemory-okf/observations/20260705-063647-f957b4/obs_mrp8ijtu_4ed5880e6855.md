---
type: FileRead
title: Profile routing invalidates scoped state on gateway changes
description: Active gateway profile updates API routing and tracks swap state.
resource: agentmemory://observation/obs_mrp8ijtu_4ed5880e6855
tags: ["profile-scoped query invalidation", "gateway profile routing", "Nanostores atoms", "connection state synchronization", "lazy backend spawn", "fileread"]
timestamp: 2026-07-17T17:51:30.014415+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The profile store routes API requests according to the active gateway profile and invalidates profile-dependent cached state when that profile changes. It also exposes swap progress for UI loading feedback and begins addressing stale renderer connection metadata during background-profile activation.

## Facts
- $activeGatewayProfile subscription normalizes the profile key and passes it to setApiRequestProfile.
- When the routed profile changes after initialization, all queryClient queries are invalidated and the starmap graph is reset.
- $gatewaySwapTarget is an atom containing the target profile during an in-flight gateway swap, or null otherwise.
- gatewaySwitch stores the current Promise&lt;void&gt; for serialized switch work.
- The following code is intended to synchronize renderer $connection mode, baseUrl, and profile with the live gateway because background-profile activation can otherwise leave primary-backend connection metadata.

## Concepts
- profile-scoped query invalidation
- gateway profile routing
- Nanostores atoms
- connection state synchronization
- lazy backend spawn

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/profile.ts`

_Importance: 3 · Confidence: 1_
