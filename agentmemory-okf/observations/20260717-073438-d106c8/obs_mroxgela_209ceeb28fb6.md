---
type: Search
title: Search for summary and firstPrompt assignments
description: Locating usage of summary and firstPrompt fields across agentmemory src
resource: agentmemory://observation/obs_mroxgela_209ceeb28fb6
tags: ["session state shape", "field assignment patterns", "regex code search", "search"]
timestamp: 2026-07-17T12:41:54.129734+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 4
confidence: 1
---
# Summary

Searched the agentmemory source code to map where summary and firstPrompt fields are defined and assigned. The results show these fields are primarily derived from a title property during session and event creation, and are consumed across state, migration, and summarization logic.

## Facts
- Searched /Volumes/AI/agentmemory/src using regex \.summary\s*=|firstPrompt:\s*|summary:\s*
- Found 15 matches across 11 files
- firstPrompt and summary are often populated from a title field, truncated to 200 chars in triggers/api.ts
- Key usage found in triggers, state management (hermes-sessions), and functions (summarize, migrate, observe, replay)

## Concepts
- session state shape
- field assignment patterns
- regex code search

## Files
- `/Volumes/AI/agentmemory/src/triggers/events.ts`
- `/Volumes/AI/agentmemory/src/eval/quality.ts`
- `/Volumes/AI/agentmemory/src/cli/onboarding.ts`
- `/Volumes/AI/agentmemory/src/state/hermes-sessions.ts`
- `/Volumes/AI/agentmemory/src/viewer/index.html`
- `/Volumes/AI/agentmemory/src/triggers/api.ts`
- `/Volumes/AI/agentmemory/src/functions/migrate.ts`
- `/Volumes/AI/agentmemory/src/functions/summarize.ts`
- `/Volumes/AI/agentmemory/src/functions/replay.ts`
- `/Volumes/AI/agentmemory/src/functions/skill-extract.ts`
- `/Volumes/AI/agentmemory/src/functions/observe.ts`

_Importance: 4 · Confidence: 1_
