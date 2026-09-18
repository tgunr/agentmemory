---
type: Observation
title: Viewed hermes-session-hygiene skill
description: Quarterly cleanup procedure for Hermes SQLite session stores
resource: agentmemory://observation/obs_mrs19qgx_01770b107abf
tags: ["Hermes session management", "SQLite database maintenance", "Session pruning and cleanup", "Database backup safety", "Parent-child session relationships", "observation"]
timestamp: 2026-07-19T16:51:59.935087+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 5
confidence: 1
---
# Summary

Viewed the hermes-session-hygiene skill which documents a recurring maintenance procedure for cleaning up Hermes session stores. The skill provides exact SQLite queries for auditing session health buckets, pruning empty stubs with parent-link safety, and batch-titling untitled sessions, along with safety checks to prevent data loss.

## Facts
- Skill name: hermes-session-hygiene, version 1.0.0, author: davec
- Two main jobs: prune empty stub sessions (0–1 real messages) and batch-title untitled substantive sessions (≥2 messages, no title)
- Targets SQLite state.db at ~/.hermes/state.db (global) or ~/.hermes/profiles/&lt;profile&gt;/state.db (per-profile)
- Must use real messages row count via SELECT count(*) FROM messages WHERE session_id=?, not cached sessions.message_count column which can drift
- Prune safety: backup DB first, null parent_session_id for real children before deleting stubs to prevent orphans
- Orthogonal to Projects (projects.db) and AgentMemory (separate service on :3111) — those are NOT pruned
- Tags: hermes, sessions, cleanup, state.db, sqlite, hygiene, organization

## Concepts
- Hermes session management
- SQLite database maintenance
- Session pruning and cleanup
- Database backup safety
- Parent-child session relationships

## Files
- `~/.hermes/state.db`
- `~/.hermes/profiles/&lt;profile&gt;/state.db`

_Importance: 5 · Confidence: 1_
