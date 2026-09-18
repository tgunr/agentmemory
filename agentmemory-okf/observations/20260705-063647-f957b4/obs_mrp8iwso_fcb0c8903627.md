---
type: Search
title: Search for session state atoms in session store
description: Found 6 matches for exported $sessions atoms and setters
resource: agentmemory://observation/obs_mrp8iwso_fcb0c8903627
tags: ["state management", "atoms", "session store", "Jotai", "state atoms", "setters", "search"]
timestamp: 2026-07-17T17:51:46.821138+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 2
confidence: 1
---
# Summary

Searched the session store file for exported session-related state atoms. Found three atoms ($sessions, $sessionsTotal, $sessionsLoading) and their corresponding setter functions, indicating a state management system for session data using an atom-based pattern.

## Facts
- File: /Users/davec/.hermes/hermes-agent/apps/desktop/src/store/session.ts
- Pattern searched: export.*\$sessions
- Found 6 matches across lines 199-301
- $sessions = atom&lt;SessionInfo[]&gt;([])
- $sessionsTotal = atom&lt;number&gt;(0)
- $sessionsLoading = atom(true)
- Setter functions: setSessions, setSessionsTotal, setSessionsLoading
- Setters use updateAtom pattern for state updates

## Concepts
- state management
- atoms
- session store
- Jotai
- state atoms
- setters

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/session.ts`

_Importance: 2 · Confidence: 1_
