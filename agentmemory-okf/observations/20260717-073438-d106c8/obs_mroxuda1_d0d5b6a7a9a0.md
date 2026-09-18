---
type: Search
title: Search for .title field usage across agentmemory TypeScript codebase
description: Found 50 matches showing title as a core property on observations, memories, sessions, and skills
resource: agentmemory://observation/obs_mroxuda1_d0d5b6a7a9a0
tags: ["title field validation", "observation data model", "memory object schema", "quality scoring criteria", "search indexing", "case-insensitive deduplication", "search"]
timestamp: 2026-07-17T12:52:45.618663+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

A comprehensive search for all .title field usage across the agentmemory TypeScript codebase revealed that title is a fundamental property on observation and memory objects. It is used in formatting/display, validation, quality scoring, search indexing, deduplication (case-insensitive comparison), and skill extraction. The field has consistent validation patterns requiring string type with length constraints.

## Facts
- Pattern searched: data\.title|payload\.title|\.title\b across *.ts files
- 50 total matches found across 20+ TypeScript files
- title field is a core property on observation objects (obs.title) used in crystallize, sliding-window, reranker, consolidate, timeline, working-memory, skill-extract
- title validation patterns include: type checks (typeof === "string"), trim/length checks (length >= 5 && length <= 120), non-empty checks
- title used in MCP server (server.ts) for tool args validation and memory creation
- title used in quality scoring (quality.ts): obs.title length 5-120 scores +15, summary.title length >= 5 scores +20
- title used in search indexing (search-index.ts), session tracking (hermes-sessions.ts), event triggers (events.ts), and notifications (notification.ts)
- Plugin integration (agentmemory-capture.ts) passes title from external sources with null fallback

## Concepts
- title field validation
- observation data model
- memory object schema
- quality scoring criteria
- search indexing
- case-insensitive deduplication

## Files
- `/Volumes/AI/agentmemory/src/functions/crystallize.ts`
- `/Volumes/AI/agentmemory/src/functions/sliding-window.ts`
- `/Volumes/AI/agentmemory/src/mcp/server.ts`
- `/Volumes/AI/agentmemory/src/state/reranker.ts`
- `/Volumes/AI/agentmemory/src/eval/quality.ts`
- `/Volumes/AI/agentmemory/src/state/memory-utils.ts`
- `/Volumes/AI/agentmemory/plugin/opencode/agentmemory-capture.ts`
- `/Volumes/AI/agentmemory/src/hooks/session-start.ts`
- `/Volumes/AI/agentmemory/src/functions/consolidate.ts`
- `/Volumes/AI/agentmemory/src/state/search-index.ts`
- `/Volumes/AI/agentmemory/src/cli.ts`
- `/Volumes/AI/agentmemory/src/index.ts`
- `/Volumes/AI/agentmemory/src/functions/timeline.ts`
- `/Volumes/AI/agentmemory/src/hooks/notification.ts`
- `/Volumes/AI/agentmemory/integrations/pi/index.ts`
- `/Volumes/AI/agentmemory/src/state/hermes-sessions.ts`
- `/Volumes/AI/agentmemory/src/functions/working-memory.ts`
- `/Volumes/AI/agentmemory/src/functions/skill-extract.ts`
- `/Volumes/AI/agentmemory/src/triggers/events.ts`

_Importance: 5 · Confidence: 1_
