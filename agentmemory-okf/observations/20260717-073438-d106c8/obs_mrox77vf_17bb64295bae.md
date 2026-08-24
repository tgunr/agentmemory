---
type: Search
title: Search for session title handling patterns
description: Finding how titles are managed across sessions and observations
resource: agentmemory://observation/obs_mrox77vf_17bb64295bae
tags: ["session title management", "database schema", "title lookup", "fallback patterns", "validation diagnostics", "search"]
timestamp: 2026-07-17T12:34:45.524878+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 3
confidence: 1
---
# Summary

Searched codebase to understand session title management architecture. Found title handling spans database schema, lookup functions, prompt templates, and validation logic with fallback mechanisms for missing titles.

## Facts
- Found 16 matches across 8 files in /Volumes/AI/agentmemory/src
- Hermes sessions schema includes title field (hermes-sessions.ts:137)
- Title lookup function queries sessions table by id (hermes-sessions.ts:37-38)
- Summary prompts specify max 100 chars for titles (summary.ts:6,45)
- Fallback pattern: "Migrated session" when title missing (migrate.ts:207)
- Diagnostics check for missing titles in summaries (diagnostics.ts:449-452)
- Triggers prefer explicit title, fall back to Hermes session title (events.ts:19-20)

## Concepts
- session title management
- database schema
- title lookup
- fallback patterns
- validation diagnostics

## Files
- `/Volumes/AI/agentmemory/src/triggers/events.ts`
- `/Volumes/AI/agentmemory/src/triggers/api.ts`
- `/Volumes/AI/agentmemory/src/prompts/summary.ts`
- `/Volumes/AI/agentmemory/src/viewer/index.html`
- `/Volumes/AI/agentmemory/src/state/hermes-sessions.ts`
- `/Volumes/AI/agentmemory/src/functions/migrate.ts`
- `/Volumes/AI/agentmemory/src/functions/profile.ts`
- `/Volumes/AI/agentmemory/src/functions/diagnostics.ts`

_Importance: 3 · Confidence: 1_
