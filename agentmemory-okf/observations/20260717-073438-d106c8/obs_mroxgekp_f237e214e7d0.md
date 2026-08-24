---
type: FileRead
title: Context building logic with token budgeting
description: Observation filtering and block assembly in context.ts
resource: agentmemory://observation/obs_mroxgekp_f237e214e7d0
tags: ["context window management", "token budgeting", "observation filtering", "recency-based sorting", "importance ranking", "XML context formatting", "fileread"]
timestamp: 2026-07-17T12:41:54.116653+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 3
confidence: 1
---
# Summary

Reading context building logic that assembles observations into a context window. The system filters high-importance observations (>=5), ranks them, formats them with session metadata, and implements token budget constraints to fit within LLM context limits while prioritizing recent information.

## Facts
- Filters observations where importance >= 5
- Sorts important observations by importance descending, takes top 5
- Creates blocks with type "observation", content, tokens, recency, and sourceIds
- Formats content as markdown with session ID (first 8 chars) and timestamp
- Sorts all blocks by recency (most recent first)
- Implements token budget management - skips blocks exceeding remaining budget
- Uses XML wrapper with project attribute: &lt;agentmemory-context project="..."&gt;
- File has 234 total lines, read lines 170-209

## Concepts
- context window management
- token budgeting
- observation filtering
- recency-based sorting
- importance ranking
- XML context formatting

## Files
- `/Volumes/AI/agentmemory/src/functions/context.ts`

_Importance: 3 · Confidence: 1_
