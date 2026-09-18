---
type: file_write
title: Document Hermes session DB schema and hook contracts
description: Reference guide for agentmemory-debugging skill
resource: agentmemory://observation/obs_mroy4htz_4f9f9470b5c3
tags: ["SQLite schema", "Session management", "Hook contracts", "Hermes integration", "agentmemory skill", "file_write"]
timestamp: 2026-07-17T13:00:38.081047+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

Created a reference document detailing the Hermes session SQLite database schema, session title resolution logic, and session-start hook contracts. This serves as a debugging guide for the agentmemory skill, highlighting integration gaps with Kilo Code's session ID generation.

## Facts
- Wrote references/hermes-session-db.md to the agentmemory-debugging skill
- Hermes state DB is a SQLite database at ~/.hermes/profiles/&lt;profile&gt;/state.db, overridable via HERMES_STATE_DB env var
- DB sessions table tracks id, session_key, source, title, cwd, started_at, and ended_at
- Session title resolution prioritizes Hermes/Kilo title, then hook payload title, then falls back to first prompt/project
- Kilo Code hooks currently self-generate ses_ IDs and fail to pass the real Kilo session ID/title to Hermes

## Concepts
- SQLite schema
- Session management
- Hook contracts
- Hermes integration
- agentmemory skill

## Files
- `/Users/davec/.hermes/profiles/ai/skills/debugging/agentmemory-debugging/references/hermes-session-db.md`
- `src/hooks/session-start.ts`
- `Servers/agentmemory-kilo-hooks/session-start.sh`

_Importance: 5 · Confidence: 1_
