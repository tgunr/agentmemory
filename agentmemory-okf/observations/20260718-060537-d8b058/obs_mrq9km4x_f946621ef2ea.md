---
type: CommandRun
title: Query Hermes state.db schema and session metadata
description: Verify schema compatibility before moving sessions between profiles
resource: agentmemory://observation/obs_mrq9km4x_f946621ef2ea
tags: ["SQLite schema inspection", "session migration", "database compatibility check", "Hermes state management", "profile organization", "commandrun"]
timestamp: 2026-07-18T11:08:52.108182+00:00
source: agentmemory
session_id: 20260718_060537_d8b058
importance: 5
confidence: 1
---
# Summary

Executed a Python script to inspect the Hermes state database schema and gather metadata about three target sessions. Verified that the develop profile's database has a compatible schema structure, confirming it's safe to move sessions between profiles. All three sessions are root-level (no parent) with no children, making them independent units for migration.

## Facts
- Messages table has 19 columns: id, session_id, role, content, tool_call_id, tool_calls, tool_name, timestamp, token_count, finish_reason, reasoning, reasoning_content, reasoning_details, codex_reasoning_items, codex_message_items, platform_message_id, observed, active, compacted
- Session 20260717_095353_971eb2 "Profile icon pulse indicator for finished/pending sessions" has 276 messages, no parent, 0 children
- Session 20260718_051246_8c32b1 "Organizing Hermes profiles and sessions" has 209 messages, no parent, 0 children
- Session 20260717_190757_299949 "Debugging AgentMemory UI not updating" has 186 messages, no parent, 0 children
- Develop profile state.db has compatible schema with sessions and messages tables present
- Develop profile includes FTS (full-text search) tables: messages_fts, messages_fts_trigram and related tables

## Concepts
- SQLite schema inspection
- session migration
- database compatibility check
- Hermes state management
- profile organization

## Files
- `~/.hermes/state.db`
- `~/.hermes/profiles/develop/state.db`

_Importance: 5 · Confidence: 1_
