---
type: CommandRun
title: Query SQLite profile databases for sessions ending on unanswered user messages
description: Post-tool call hook revealing abandoned conversation sessions across multiple profiles
resource: agentmemory://observation/obs_mrrj6qv8_43b9be9dffb3
tags: ["SQLite session database query", "Hermes profile state management", "Conversation state recovery", "commandrun"]
timestamp: 2026-07-19T08:25:47.393023+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 5
confidence: 1
---
# Summary

Executed SQLite query across multiple Hermes profile databases to identify sessions that ended with user messages but no AI response. Found 14 total stuck sessions across 'ai' (6), 'cc' (7), and 'develop' (1) profiles, indicating incomplete conversations that may need resumption or recovery.

## Facts
- Profile 'ai' has 6 stuck sessions with last user messages unanswered
- Profile 'cc' has 7 stuck sessions including topics on CNC, ENA UV Project, and session transfers
- Profile 'develop' has 1 stuck session on Hermes Desktop Project Management
- Sessions include titles like "Gateway WebUI Remote Access From Windows" and "AI Project Listing"
- End reasons include ws_orphan_reap and compression for orphaned/incomplete sessions

## Concepts
- SQLite session database query
- Hermes profile state management
- Conversation state recovery

## Files
- `/Users/davec/.hermes/profiles/ai/state.db`
- `/Users/davec/.hermes/profiles/cc/state.db`
- `/Users/davec/.hermes/profiles/develop/state.db`

_Importance: 5 · Confidence: 1_
