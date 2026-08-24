---
type: CommandRun
title: Git diff shows profile switching bug fix
description: Fixes stale projects/sessions visible after switching profiles
resource: agentmemory://observation/obs_mrp315yw_2afbaaca9c9d
tags: ["profile switching bug fix", "cache invalidation", "React state management", "sidebar refetch logic", "test-driven bug fix", "commandrun"]
timestamp: 2026-07-17T15:18:00.820628+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 6
confidence: 1
---
# Summary

Git diff reveals a bug fix for profile switching in a desktop app. The issue was that switching profiles left stale projects and sessions visible because cache invalidation didn't happen reliably. The fix clears project and session caches when the active gateway profile changes, and adds a test to prevent regression. This ensures the sidebar rebuilds correctly for the new profile.

## Facts
- Working directory: /tmp/hermes-profile-fix
- 3 files modified: 39 insertions, 2 deletions
- slash.ts: Added startFreshSessionDraft() call after profile switch to clear session draft
- profile.test.ts: Added mocks for $projects, $projectTree, $sessions, setConnection
- profile.test.ts: New test verifies cache clearing when switching profiles
- Bug: sidebar effect only refetches when BOTH profileScope AND gatewayReady are true, causing stale data if they flip at different times

## Concepts
- profile switching bug fix
- cache invalidation
- React state management
- sidebar refetch logic
- test-driven bug fix

## Files
- `apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`
- `apps/desktop/src/store/profile.test.ts`
- `apps/desktop/src/store/profile.ts`

_Importance: 6 · Confidence: 1_
