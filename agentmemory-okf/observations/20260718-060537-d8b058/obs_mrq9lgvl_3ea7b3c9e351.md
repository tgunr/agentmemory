---
type: Search
title: Viewed session-transfer skill documentation for Hermes profile migration
description: Skill provides workaround for missing hermes sessions import command
resource: agentmemory://observation/obs_mrq9lgvl_3ea7b3c9e351
tags: ["Hermes sessions", "SQLite database migration", "profile management", "GitHub issue #8650", "search"]
timestamp: 2026-07-18T11:09:31.949834+00:00
source: agentmemory
session_id: 20260718_060537_d8b058
importance: 5
confidence: 1
---
# Summary

User retrieved documentation for the session-transfer skill, which enables moving individual sessions between Hermes profiles using SQLite database operations. This skill serves as a workaround for the missing `hermes sessions import` command by providing a structured workflow using session_search and execute_code tools.

## Facts
- Skill name: session-transfer, version 1.0.0
- Addresses GitHub issue #8650 for missing hermes sessions import CLI command
- Global profile database located at ~/.hermes/state.db
- Named profiles stored at ~/.hermes/profiles/&lt;name&gt;/state.db
- Sessions with ended_at IS NULL are considered active
- FTS5 indexes must be rebuilt after manual session inserts
- Workflow involves session_search tool and execute_code for SQLite operations

## Concepts
- Hermes sessions
- SQLite database migration
- profile management
- GitHub issue #8650

## Files
- `~/.hermes/state.db`
- `~/.hermes/profiles/&lt;name&gt;/state.db`

_Importance: 5 · Confidence: 1_
