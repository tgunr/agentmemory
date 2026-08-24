---
type: CommandRun
title: Inspect fix branch for profile.ts and slash.ts key lines
description: Verifying subscribe block and profile handler in fix/discovered-repos-cross-profile-leak-clean
resource: agentmemory://observation/obs_mrp2u62k_6edce9e131a8
tags: ["cross-profile state leak prevention", "Zustand store subscribe cleanup", "queryClient invalidation on profile change", "slash command profile handler", "starmap graph reset", "commandrun"]
timestamp: 2026-07-17T15:12:34.360655+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 6
confidence: 1
---
# Summary

Inspected the fix branch to verify the cross-profile leak cleanup logic. The subscribe block in profile.ts resets the starmap graph and invalidates queries when the active gateway profile changes. The slash.ts profile handler calls ensureGatewayProfile and startFreshSessionDraft to start a fresh session draft when switching profiles.

## Facts
- Command inspected git branch origin/fix/discovered-repos-cross-profile-leak-clean
- profile.ts line 16: imports resetStarmapGraph from @/store/starmap
- profile.ts line 174: $activeGatewayProfile.subscribe block exists
- profile.ts line 180: calls queryClient.invalidateQueries() inside subscribe
- profile.ts line 181: calls resetStarmapGraph() inside subscribe
- slash.ts line 21: imports $activeGatewayProfile, $newChatProfile, ensureGatewayProfile, normalizeProfileKey from @/store/profile
- slash.ts line 61/83/628: startFreshSessionDraft is defined, destructured, and referenced
- slash.ts line 232: startFreshSessionDraft() called in a handler
- slash.ts line 289: profile slash command handler defined as async ({ arg })
- slash.ts line 316: await ensureGatewayProfile(key) called inside profile handler

## Concepts
- cross-profile state leak prevention
- Zustand store subscribe cleanup
- queryClient invalidation on profile change
- slash command profile handler
- starmap graph reset

## Files
- `apps/desktop/src/store/profile.ts`
- `apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 6 · Confidence: 1_
