---
type: CommandRun
title: Inspect agentmemory dist for session/end handler shape
description: Grepping built index.mjs for session end route and body parsing patterns
resource: agentmemory://observation/obs_mrtcyuzz_8878d74f99ca
tags: ["API route inspection", "session lifecycle management", "endpoint contract discovery", "SQLite parameterized queries", "commandrun"]
timestamp: 2026-07-20T15:07:14.157127+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 1
---
# Summary

Ran grep commands against the built agentmemory distribution to reverse-engineer the session/end API contract. Confirmed the handler exists as api::session::end, accepts sessionId in the parsed body, and queries by id or session_key. This informs how to correctly call the session termination endpoint.

## Facts
- Target file: /Volumes/AI/agentmemory/dist/index.mjs
- API identifiers found: api::session::end, api::session::start, api::sessions, api::session::commit, api::session::by-commit, api::branch-sessions, api::replay::sessions
- Body parsing uses parsed.sessionId and session?.id
- SQL query pattern found: id = ? OR session_key = ? LIMIT 1 with .get(sessionId)
- Route registered as session/end with trailing comma pattern

## Concepts
- API route inspection
- session lifecycle management
- endpoint contract discovery
- SQLite parameterized queries

## Files
- `/Volumes/AI/agentmemory/dist/index.mjs`

_Importance: 5 · Confidence: 1_
