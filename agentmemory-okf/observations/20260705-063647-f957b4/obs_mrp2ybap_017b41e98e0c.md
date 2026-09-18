---
type: file_edit
title: Reset store state in profile test beforeEach
description: Clear $projects, $projectTree, $sessions between tests
resource: agentmemory://observation/obs_mrp2ybap_017b41e98e0c
tags: ["test isolation", "nanostores", "beforeEach cleanup", "vitest", "file_edit"]
timestamp: 2026-07-17T15:15:47.752614+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

The profile test beforeEach was updated to reset three nanostores ($projects, $projectTree, $sessions) to empty arrays after clearing mocks. This prevents store state leakage between tests involving profile/connection setup.

## Facts
- File patched: /tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts
- Added $projects.set([]), $projectTree.set([]), $sessions.set([]) in beforeEach
- Existing setup already stubs window.hermesDesktop, clears queryClient.invalidateQueries and resetStarmapGraph mocks
- Patch applied successfully

## Concepts
- test isolation
- nanostores
- beforeEach cleanup
- vitest

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts`

_Importance: 4 · Confidence: 1_
