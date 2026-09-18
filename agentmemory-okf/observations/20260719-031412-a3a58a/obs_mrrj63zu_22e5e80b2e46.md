---
type: CommandRun
title: Audit Hermes profile session states across SQLite databases
description: Scanned 9 profiles to identify incomplete sessions and end reasons
resource: agentmemory://observation/obs_mrrj63zu_22e5e80b2e46
tags: ["SQLite database querying", "Session state analysis", "Profile management", "WebSocket orphan reaping", "Session lifecycle tracking", "commandrun"]
timestamp: 2026-07-19T08:25:17.751088+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 5
confidence: 1
---
# Summary

Executed Python code to query session metadata from Hermes profile state databases. The audit revealed 55 sessions in the 'ai' profile with various completion states, identifying multiple incomplete sessions where the assistant never responded to the final user message. This diagnostic helps understand session lifecycle and potential connection issues.

## Facts
- Scanned profiles: ai, cc, develop, ollama, personal, pveroot, ranch, shop, default
- Profile 'ai' contains 55 sessions spanning 2026-06-23 to 2026-07-18
- Sessions accessed via cli, tui, and webui sources
- Common end reasons: ws_orphan_reap, idle_timeout, cli_close, tui_shutdown
- Multiple sessions flagged with "LAST MSG = USER" indicating assistant never closed
- Some sessions have missing timestamps and end reasons (displayed as '?')
- Session data stored in SQLite databases at /Users/davec/.hermes/profiles/*/state.db

## Concepts
- SQLite database querying
- Session state analysis
- Profile management
- WebSocket orphan reaping
- Session lifecycle tracking

## Files
- `/Users/davec/.hermes/profiles/ai/state.db`
- `/Users/davec/.hermes/profiles/cc/state.db`
- `/Users/davec/.hermes/profiles/develop/state.db`
- `/Users/davec/.hermes/profiles/ollama/state.db`
- `/Users/davec/.hermes/profiles/personal/state.db`
- `/Users/davec/.hermes/profiles/pveroot/state.db`
- `/Users/davec/.hermes/profiles/ranch/state.db`
- `/Users/davec/.hermes/profiles/shop/state.db`
- `/Users/davec/.hermes/profiles/default/state.db`

_Importance: 5 · Confidence: 1_
