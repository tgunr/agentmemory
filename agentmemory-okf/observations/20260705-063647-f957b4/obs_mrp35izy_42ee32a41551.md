---
type: FileRead
title: Read session store workspace and session merging logic
description: Reviewing workspace CWD alignment, session pinning, and sidebar session page merging
resource: agentmemory://observation/obs_mrp35izy_42ee32a41551
tags: ["Electron IPC window.hermesDesktop", "State management AppAtom", "Session lineage and compression", "Optimistic UI updates", "Workspace CWD synchronization", "fileread"]
timestamp: 2026-07-17T15:21:24.331089+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

The agent read the session store to understand workspace initialization and session list management. The code reveals complex state synchronization logic, specifically handling edge cases for session pinning across ID compressions and preventing working or pinned sessions from being evicted during sidebar page refreshes.

## Facts
- Read lines 60-156 of /Users/davec/.hermes/hermes-agent/apps/desktop/src/store/session.ts
- ensureDefaultWorkspaceCwd aligns renderer workspace with main-process default, using window.hermesDesktop.sanitizeWorkspaceCwd to clear stale localStorage paths (refs PR #37586, #37536)
- sessionPinId uses _lineage_root_id for durable pinning to survive session ID auto-compression and rotation
- mergeSessionPage merges server session pages while preserving working sessions (mid-first-response) and pinned sessions that fall off the recent activity page

## Concepts
- Electron IPC window.hermesDesktop
- State management AppAtom
- Session lineage and compression
- Optimistic UI updates
- Workspace CWD synchronization

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/session.ts`

_Importance: 5 · Confidence: 1_
