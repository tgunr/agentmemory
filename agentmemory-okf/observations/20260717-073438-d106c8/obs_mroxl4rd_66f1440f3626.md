---
type: CommandRun
title: Query Hermes session database for source distribution
description: Inspecting session sources and titles in ~/.hermes/profiles/ai/state.db
resource: agentmemory://observation/obs_mroxl4rd_66f1440f3626
tags: ["SQLite database inspection", "Hermes session management", "Session metadata completeness", "commandrun"]
timestamp: 2026-07-17T12:45:34.669021+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

A diagnostic query was run against the Hermes state database to understand session source distribution. The results show 55 total sessions across 3 sources (cli, tui, webui). All sampled webui sessions lack titles and session_keys, suggesting webui sessions may not be properly initializing these fields.

## Facts
- Database located at ~/.hermes/profiles/ai/state.db (SQLite)
- Session sources: cli=6, tui=41, webui=8 (total 55 sessions)
- All 8 sampled webui sessions have NULL title and NULL session_key
- Working directory: /Volumes/AI/agentmemory

## Concepts
- SQLite database inspection
- Hermes session management
- Session metadata completeness

## Files
- `~/.hermes/profiles/ai/state.db`

_Importance: 5 · Confidence: 1_
