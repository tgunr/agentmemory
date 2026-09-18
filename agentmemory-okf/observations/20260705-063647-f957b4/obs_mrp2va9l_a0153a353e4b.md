---
type: discovery
title: Investigating state atoms and profile command architecture
description: Exploring projects/sessions atoms and /profile slash command implementation
resource: agentmemory://observation/obs_mrp2va9l_a0153a353e4b
tags: ["state management atoms", "profile command handler", "gateway profile", "discovery"]
timestamp: 2026-07-17T15:13:26.451925+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 7
confidence: 1
---
# Summary

Explored the state management architecture for projects and sessions, revealing how atoms manage reactive state. Discovered that /profile command sets $newChatProfile for future chats and ensures gateway profile availability, but cannot change profile of existing sessions mid-stream.

## Facts
- $projects is exported as atom<ProjectInfo[]> at line 22 in apps/desktop/src/store/projects.ts
- $projectTree is exported as atom<SidebarProjectTree[]> at line 29 in apps/desktop/src/store/projects.ts
- $sessions is exported as atom<SessionInfo[]> at line 199 in apps/desktop/src/store/session.ts
- /profile command uses $newChatProfile.set(key) to point new chats to a profile
- /profile calls ensureGatewayProfile(key) after setting $newChatProfile
- Profiles are per-session, so existing threads cannot change profile mid-stream

## Concepts
- state management atoms
- profile command handler
- gateway profile

## Files
- `apps/desktop/src/store/projects.ts`
- `apps/desktop/src/store/session.ts`
- `apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 7 · Confidence: 1_
