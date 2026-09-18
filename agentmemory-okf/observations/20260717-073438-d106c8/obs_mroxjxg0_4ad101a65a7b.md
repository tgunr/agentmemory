---
type: task
title: Task list created for Hermes session title integration
description: Implementing session title lookup and propagation across hooks
resource: agentmemory://observation/obs_mroxjxg0_4ad101a65a7b
tags: ["Hermes sessions", "Session management", "Hook integration", "Title resolution", "API integration", "task"]
timestamp: 2026-07-17T12:44:38.536213+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

A task list was created to track implementation of Hermes session title lookup functionality. The work spans adding a lookup function, wiring it into the session start API, updating both TypeScript and shell hooks to propagate session data, and ensuring test coverage.

## Facts
- 5 tasks total: 1 in_progress, 4 pending, 0 completed
- Task 1 (in progress): Add lookupHermesSessionByKey + title resolver in hermes-sessions.ts
- Task 2: Wire Hermes title lookup into api::session::start (live path)
- Task 3: Send sessionId+title from session-start.ts hook (Claude Code)
- Task 4: Update kilo-hooks session-start.sh to pass session id+title
- Task 5: Fix/extend hermes-sessions tests; run test suite

## Concepts
- Hermes sessions
- Session management
- Hook integration
- Title resolution
- API integration

## Files
- `hermes-sessions.ts`
- `session-start.ts`
- `kilo-hooks/session-start.sh`

_Importance: 5 · Confidence: 1_
