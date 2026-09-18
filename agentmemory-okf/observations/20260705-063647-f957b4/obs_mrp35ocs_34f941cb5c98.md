---
type: FileRead
title: Read use-cwd-actions.ts hook implementation
description: React hook for managing session working directory and branch state
resource: agentmemory://observation/obs_mrp35ocs_34f941cb5c98
tags: ["React hooks", "useCallback memoization", "working directory management", "session state store", "i18n localization", "fileread"]
timestamp: 2026-07-17T15:21:31.272645+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 2
confidence: 1
---
# Summary

Read a React hook that handles working directory changes and branch refresh operations for sessions. The hook provides two main callbacks: refreshProjectBranch fetches project config without an active session, while changeSessionCwd either updates local state or calls session.cwd.set on the backend depending on session state.

## Facts
- File path: /Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-cwd-actions.ts
- File size: 3029 bytes, 110 lines
- Contains useCwdActions React hook with refreshProjectBranch and changeSessionCwd callbacks
- Uses requestGateway for config.get and session.cwd.set backend methods
- Manages state via setCurrentCwd and setCurrentBranch from session store
- Includes i18n for user-facing notifications and error handling

## Concepts
- React hooks
- useCallback memoization
- working directory management
- session state store
- i18n localization

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-cwd-actions.ts`

_Importance: 2 · Confidence: 1_
