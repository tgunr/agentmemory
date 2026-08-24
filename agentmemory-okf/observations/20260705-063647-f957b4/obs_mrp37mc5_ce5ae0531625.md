---
type: Search
title: Search use-prompt-actions for store imports
description: Found session store imports on line 24
resource: agentmemory://observation/obs_mrp37mc5_ce5ae0531625
tags: ["React hooks", "state management", "code search", "global store", "search"]
timestamp: 2026-07-17T15:23:01.969519+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 2
confidence: 1
---
# Summary

The agent searched the use-prompt-actions hook file to locate specific project and session store imports. It found a single match on line 24, confirming the file imports state variables and setters from the session store.

## Facts
- Searched /Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/index.ts
- Pattern: useCwdActions|changeSessionCwd|enterProject|projects'|from '@/store/projects'|from '@/store/session'
- Match on line 24: imports $busy, $connection, $messages, setAwaitingResponse, setBusy, setMessages from '@/store/session'
- Total matches found: 1

## Concepts
- React hooks
- state management
- code search
- global store

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/index.ts`

_Importance: 2 · Confidence: 1_
