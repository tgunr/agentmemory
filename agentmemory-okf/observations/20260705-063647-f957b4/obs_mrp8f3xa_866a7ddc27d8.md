---
type: file_edit
title: Refactor /project slash command to use static import
description: Removed dynamic import of projectIdForCwd and simplified session cwd logic
resource: agentmemory://observation/obs_mrp8f3xa_866a7ddc27d8
tags: ["slash commands", "dynamic import removal", "session management", "project switching", "TypeScript refactoring", "file_edit"]
timestamp: 2026-07-17T17:48:49.435449+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

Refactored the `/project` slash command handler to eliminate a dynamic import of `projectIdForCwd` in favor of a direct function call. The logic for resolving the current project from the active session's working directory was simplified, and variable naming was improved for clarity.

## Facts
- Modified /private/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts
- Removed dynamic import of `projectIdForCwd` from `@/store/projects`
- Simplified conditional logic for computing current project ID from active session cwd
- Renamed `projectName` variable to `projectDisplayName` in success notification

## Concepts
- slash commands
- dynamic import removal
- session management
- project switching
- TypeScript refactoring

## Files
- `/private/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 5 · Confidence: 1_
