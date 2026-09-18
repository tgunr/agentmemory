---
type: file_edit
title: Update profile-management skill with sidebar isolation and session-project docs
description: Patched SKILL.md to document cross-profile cache clearing fix and computed session-project association
resource: agentmemory://observation/obs_mrp3clca_512f0fc8eda3
tags: ["profile switching", "sidebar cache invalidation", "session project association", "computed state", "skill documentation", "file_edit"]
timestamp: 2026-07-17T15:26:53.958980+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 6
confidence: 1
---
# Summary

Updated the profile-management skill documentation to detail the two-part fix for stale sidebar projects when switching gateway profiles, and explained the computed nature of session-to-project associations with instructions for moving sessions between projects via cwd updates.

## Facts
- Patched SKILL.md in skill 'profile-management' (1 replacement)
- Documented two coordinated fixes for stale sidebar projects: cache clear in apps/desktop/src/store/profile.ts and startFreshSessionDraft() in apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts
- Explained that session-project membership is computed via path-matching (liveSessionProjectId), never stored natively
- Documented session.cwd.set RPC and useCwdActions hook for re-homing sessions into projects
- Noted absence of first-class /project slash command and outlined implementation path

## Concepts
- profile switching
- sidebar cache invalidation
- session project association
- computed state
- skill documentation

## Files
- `profile-management/SKILL.md`

_Importance: 6 · Confidence: 1_
