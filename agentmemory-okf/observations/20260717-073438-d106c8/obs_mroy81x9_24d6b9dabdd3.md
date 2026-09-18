---
type: CommandRun
title: Git commit: use Hermes/Kilo session title for agentmemory session names
description: Fixed session title resolution in api::session::start path
resource: agentmemory://observation/obs_mroy81x9_24d6b9dabdd3
tags: ["Hermes/Kilo session integration", "session title resolution", "api hook wiring", "commandrun"]
timestamp: 2026-07-17T13:03:24.086850+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 7
confidence: 1
---
# Summary

Resolved Hermes/Kilo session titles were previously only wired into a dead event handler. The fix activates title resolution in the live api::session::start path, preferring Hermes/Kilo session titles over explicit hook titles, with fallback to first user prompt or project name.

## Facts
- Commit c675b1c with 7 files changed, 244 insertions(+), 37 deletions(-)
- Added lookupHermesSessionByKey (matches by id OR session_key) and resolveSessionTitle functions in src/state/hermes-sessions.ts
- Wired resolveSessionTitle into src/triggers/api.ts for api::session::start path
- Forwarded title from hook payload in src/hooks/session-start.ts and plugin/scripts/session-start.mjs
- Added 10 tests in test/hermes-sessions.test.ts

## Concepts
- Hermes/Kilo session integration
- session title resolution
- api hook wiring

## Files
- `src/state/hermes-sessions.ts`
- `src/triggers/api.ts`
- `src/triggers/events.ts`
- `src/hooks/session-start.ts`
- `plugin/scripts/session-start.mjs`
- `test/hermes-sessions.test.ts`
- `CHANGELOG.md`

_Importance: 7 · Confidence: 1_
