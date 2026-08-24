---
type: FileRead
title: Hermes Session State Cache use
description: Sessions and usage of the session state cache hook
resource: agentmemory://observation/obs_mry1y4b5_332e93a11df3
tags: ["React hooks management", "fileread"]
timestamp: 2026-07-23T21:57:34.662188+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 8
confidence: 1
---
# Summary

Tool `hermes-agent`'s `hermes-agent` application loaded `use-session-state-cache.ts` file on 2026-07-23T21:57:34.662188+00:00.
The hook is used to manage session state cache, ensuring proper usage of `ClientSessionState` data.

## Facts
- Read file: /Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-session-state-cache.ts
- `useStore` function returns a reference to `$busy`, which tracks the overall agent busy status.
- `preserveLocalAssistantErrors` is used for per-message identity checks and detects whether publishable messages can be discarded.

## Concepts
- React hooks management

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-session-state-cache.ts`

_Importance: 8 · Confidence: 1_
