---
type: Search
title: Search for session/project relationship patterns in desktop app
description: Found 44 matches across 12 files for project scoping and workspace management
resource: agentmemory://observation/obs_mrp33ajp_e592d0831e0c
tags: ["project scoping", "session management", "workspace state", "localStorage sync", "search"]
timestamp: 2026-07-17T15:19:40.065753+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 7
confidence: 1
---
# Summary

Search revealed how the desktop app manages project-scoped sessions. The enterProject function is the primary mechanism for scoping UI state to a specific project, with workspace cwd persisted to localStorage. Gateway events automatically refresh project trees when moves occur. This is architectural foundation for multi-project workspace support.

## Facts
- Found enterProject function in store/projects.ts at line 118
- workspace-cwd localStorage key used for session workspace tracking
- enterProject called in sidebar/index.tsx at line 747 to scope sidebar to project
- Tests in projects.test.ts verify enterProject scopes sidebar to project id
- Gateway events handle project tree refresh on moves

## Concepts
- project scoping
- session management
- workspace state
- localStorage sync

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/projects.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/projects.test.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/session.test.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/index.tsx`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/lib/desktop-fs.test.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-message-stream/gateway-event.ts`

_Importance: 7 · Confidence: 1_
