---
type: file_edit
title: Clear profile-scoped stores on gateway profile switch
description: Added reset of $projects, $projectTree, $sessions when active profile changes
resource: agentmemory://observation/obs_mrp8iq8y_b8af3287c11f
tags: ["nanostores state management", "profile-scoped cache invalidation", "React Query invalidation", "gateway profile switching", "stale data cleanup", "file_edit"]
timestamp: 2026-07-17T17:51:38.334366+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 6
confidence: 1
---
# Summary

Extended the profile-switch handler in profile.ts to also clear three profile-scoped nanostores ($projects, $projectTree, $sessions) in addition to invalidating React Query and resetting the starmap graph. This prevents stale cross-profile data from leaking into the UI when the user switches active gateway profiles. The note about prior partial pagination suggests future edits to this file should re-read it entirely first.

## Facts
- Modified file: /Users/davec/.hermes/hermes-agent/apps/desktop/src/store/profile.ts
- Change applied in the $activeGatewayProfile.subscribe handler, inside the branch that detects profile key change (after _lastRoutedProfile !== key)
- Existing cleanup: setApiRequestProfile(key), queryClient.invalidateQueries(), resetStarmapGraph()
- New cleanup: sets $projects, $projectTree, and $sessions (likely nanostores) to empty arrays
- Comment added: "Clear profile-scoped cached state (projects, projectTree, sessions)."
- Patch mode was 'replace' and succeeded; lint was skipped (LSP handles .ts)
- Warning: file was previously read with offset/limit pagination, full re-read recommended before further overwrites

## Concepts
- nanostores state management
- profile-scoped cache invalidation
- React Query invalidation
- gateway profile switching
- stale data cleanup

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/profile.ts`

_Importance: 6 · Confidence: 1_
