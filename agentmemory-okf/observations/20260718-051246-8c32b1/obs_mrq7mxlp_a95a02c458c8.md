---
type: CommandRun
title: Analyzed SQLite database statistics for Hermes state files
description: Queried session/message counts from top-level and profile state.db files
resource: agentmemory://observation/obs_mrq7mxlp_a95a02c458c8
tags: ["SQLite database analysis", "Hermes message storage", "Profile state management", "commandrun"]
timestamp: 2026-07-18T10:14:41.051359+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

Executed Python script to characterize Hermes message database architecture, revealing the top-level home state.db contains 188 sessions and 15,199 messages spanning multiple sources including tui, cli, and webui. Discovered that profiles/default/state.db is empty (0 bytes) while the top-level database is 168MB, indicating profile data may be stored in separate locations or the default profile state needs initialization.

## Facts
- Top-level state.db has 188 sessions and 15,199 messages
- Top-level state.db size is 168,308,736 bytes (168MB)
- profiles/default/state.db size is 0 bytes (empty file)
- Session sources: tui (137), cli (41), webui (5), acp (2), bluebubbles (1), telegram (1), unknown (1)
- Profile message counts: ai (18,932), pveroot (1,964), cc (2,012), develop (584), ollama (222), personal (154), ranch (4), shop (2)

## Concepts
- SQLite database analysis
- Hermes message storage
- Profile state management

## Files
- `/Users/davec/.hermes/state.db`
- `/Users/davec/.hermes/profiles/default/state.db`

_Importance: 5 · Confidence: 1_
