---
type: file_edit
title: Updated Hermes Agent Profile Switcher
description: No linter applied to .tsx file
resource: agentmemory://observation/obs_ms68bow2_225c90ebcc5a
tags: ["TypeScript error handling", "Fully qualified module imports", "file_edit"]
timestamp: 2026-07-29T15:18:14.974472+00:00
source: agentmemory
session_id: 20260729_083331_2ab38b
importance: 7
confidence: 0.9
---
# Summary

The Hermes agent profile switcher was updated. Changes included adding back the session import with the full scope of attention IDs, which previously caused TypeScript errors.

## Facts
- New import statement from session module
- LSP diagnostics introduced for edit

## Concepts
- TypeScript error handling
- Fully qualified module imports

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/profile-switcher.tsx`

_Importance: 7 · Confidence: 0.9_
