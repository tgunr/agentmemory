---
type: file_edit
title: Add session draft reset on profile switch
description: Ensures UI rebuilds against new profile backend
resource: agentmemory://observation/obs_mrp2vi1y_fdca51a7790c
tags: ["session management", "profile switching", "state reset", "UI rebuild", "file_edit"]
timestamp: 2026-07-17T15:13:36.545720+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 6
confidence: 1
---
# Summary

Modified the profile switching logic to reset the session draft after changing profiles. This ensures UI components rebuild against the new profile's backend rather than retaining stale state from the previous profile.

## Facts
- Added startFreshSessionDraft() call after profile switch in slash.ts
- Purpose: Drop old-profile session draft to force sidebar + composer rebuild
- File: /tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts
- Edit successful; LSP shows pre-existing TypeScript implicit any errors (not from this change)

## Concepts
- session management
- profile switching
- state reset
- UI rebuild

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 6 · Confidence: 1_
