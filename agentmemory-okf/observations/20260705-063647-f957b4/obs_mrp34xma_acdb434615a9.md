---
type: Search
title: Search for session state update patterns
description: Found 50 matches for session update methods across desktop app
resource: agentmemory://observation/obs_mrp34xma_acdb434615a9
tags: ["session state management", "React hooks", "state updater pattern", "desktop controller", "message stream handling", "search"]
timestamp: 2026-07-17T15:20:56.622301+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

Searched for session state update patterns in the desktop application source code. Found that updateSessionState is the primary method for managing session state, used across controllers, hooks, and stores. The pattern involves passing a session ID and an updater function that modifies state properties like busy status, needsInput flags, and turn timing.

## Facts
- Search pattern: session\.set|session\.update|'session\.cwd'|setCwd|updateSession|session\.move
- Total matches: 50 across multiple files
- Primary method found: updateSessionState - used extensively for session state management
- updateSessionState takes sessionId and updater function as parameters
- State transitions include: busy, needsInput, turnStartedAt, idle states
- Pattern used in React hooks with dependency arrays for state management

## Concepts
- session state management
- React hooks
- state updater pattern
- desktop controller
- message stream handling

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/session.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/session.test.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/desktop-controller.tsx`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-message-stream/index.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-message-stream/gateway-event.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-message-stream/todo-cleanup.test.tsx`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-session-actions.test.tsx`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-session-state-cache.test.tsx`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/submit.ts`

_Importance: 5 · Confidence: 1_
