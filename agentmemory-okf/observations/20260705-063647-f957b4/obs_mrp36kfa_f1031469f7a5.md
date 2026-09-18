---
type: CommandRun
title: Inspect git status and profile-switching code blocks
description: Reviewing modified files and key code sections in hermes-profile-fix branch
resource: agentmemory://observation/obs_mrp36kfa_f1031469f7a5
tags: ["profile switching cache invalidation", "nanostore subscription pattern", "queryClient.invalidateQueries", "session draft reset on profile change", "stale data prevention on context switch", "commandrun"]
timestamp: 2026-07-17T15:22:12.834498+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 7
confidence: 1
---
# Summary

A diagnostic command was run to inspect the state of a profile-switching fix in the hermes-profile-fix branch. The code shows a two-part fix: profile.ts subscribes to active gateway profile changes and aggressively clears stale caches (projects, sessions, query client, starmap graph) when the profile key changes, while slash.ts handles the /profile slash command by ensuring the new gateway profile is loaded and starting a fresh session draft so the UI rebuilds against the correct backend.

## Facts
- Working directory: /tmp/hermes-profile-fix
- 3 modified files: profile.ts, profile.test.ts, slash.ts
- profile.ts subscribe block (lines 174-190) handles $activeGatewayProfile changes by invalidating queries, resetting starmap graph, and clearing $projects, $projectTree, $sessions caches when profile key changes
- slash.ts profile handler (lines 313-321) normalizes profile key, sets $newChatProfile, calls ensureGatewayProfile, then startFreshSessionDraft to rebuild sidebar and composer against new profile backend
- Comment in profile.ts explains that clearing caches prevents sidebar from rendering previous profile's projects when effect dependencies change at different times

## Concepts
- profile switching cache invalidation
- nanostore subscription pattern
- queryClient.invalidateQueries
- session draft reset on profile change
- stale data prevention on context switch

## Files
- `apps/desktop/src/store/profile.ts`
- `apps/desktop/src/store/profile.test.ts`
- `apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 7 · Confidence: 1_
