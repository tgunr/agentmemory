---
type: file_edit
title: Add project and session store imports to profile store
description: Resolving missing dependencies for profile state management
resource: agentmemory://observation/obs_mrp2v02p_c3471d0586dc
tags: ["Store state management", "TypeScript implicit any", "Import resolution", "file_edit"]
timestamp: 2026-07-17T15:13:13.245997+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

Updated the profile store to include missing imports for project and session stores, likely needed for comprehensive state management or reset on profile change. The edit succeeded but the file contains multiple TypeScript strict mode errors regarding implicit 'any' types that may need addressing.

## Facts
- Added $projectTree and $projects imports from @/store/projects
- Added $sessions to existing import from @/store/session
- LSP diagnostics report 10 TypeScript errors for implicit 'any' types on various parameters (lines 56, 88, 174, 287, 294, 346, 350, 357, 365)
- System warned that the file was previously read with partial pagination

## Concepts
- Store state management
- TypeScript implicit any
- Import resolution

## Files
- `/private/tmp/hermes-profile-fix/apps/desktop/src/store/profile.ts`

_Importance: 5 · Confidence: 1_
