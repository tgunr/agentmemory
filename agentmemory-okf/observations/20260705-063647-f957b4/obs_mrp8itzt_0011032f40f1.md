---
type: file_edit
title: Add store imports to profile.ts for cross-store reset
description: Adding $sessions, $projects, $projectTree imports to support profile-switching cleanup
resource: agentmemory://observation/obs_mrp8itzt_0011032f40f1
tags: ["Nanostore cross-store imports", "Profile switching state cleanup", "TypeScript LSP diagnostics", "file_edit"]
timestamp: 2026-07-17T17:51:43.190529+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

Imports for $sessions, $projects, and $projectTree were added to profile.ts to support resetting these stores during profile switching. The LSP errors indicate the imported names are not yet referenced in the file body, suggesting this is a preparatory step before implementing the actual reset logic.

## Facts
- Added imports: $sessions from @/store/session, $projects and $projectTree from @/store/projects
- File modified: /Users/davec/.hermes/hermes-agent/apps/desktop/src/store/profile.ts
- LSP diagnostics show errors at lines 183-185: Cannot find name '$projects', '$projectTree', '$sessions' — imports added but not yet used in code
- Lint was skipped (LSP server handles .ts)

## Concepts
- Nanostore cross-store imports
- Profile switching state cleanup
- TypeScript LSP diagnostics

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/profile.ts`

_Importance: 4 · Confidence: 1_
