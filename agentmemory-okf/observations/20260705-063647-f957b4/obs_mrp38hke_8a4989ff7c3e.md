---
type: file_edit
title: Add project-related i18n type definitions
description: Extending i18n types with project management strings
resource: agentmemory://observation/obs_mrp38hke_8a4989ff7c3e
tags: ["i18n internationalization", "TypeScript type definitions", "Project management features", "String interpolation patterns", "file_edit"]
timestamp: 2026-07-17T15:23:42.440647+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

Extended the i18n types file with new string definitions for project management functionality. This follows the existing pattern of profile-related i18n strings and adds corresponding project-related strings including status display, error messages, and session movement notifications.

## Facts
- Added 6 new i18n type definitions to types.ts for project management features
- New types: projectStatus, unknownProject, noProjectNamed, sessionMovedToProject, setProjectFailed, projectMissingPath
- projectStatus accepts (current: string | null) => string
- noProjectNamed accepts (target: string, available: string) => string
- sessionMovedToProject accepts (name: string) => string
- Types inserted between setProfileFailed and sttDisabled in the i18n type definition

## Concepts
- i18n internationalization
- TypeScript type definitions
- Project management features
- String interpolation patterns

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/i18n/types.ts`

_Importance: 5 · Confidence: 1_
