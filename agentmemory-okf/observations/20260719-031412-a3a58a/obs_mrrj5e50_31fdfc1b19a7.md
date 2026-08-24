---
type: FileRead
title: Reviewed session search tool architecture and ranking constants
description: First 80 lines describe three SQLite-backed recall modes and source filtering.
resource: agentmemory://observation/obs_mrrj5e50_31fdfc1b19a7
tags: ["SQLite FTS5", "conversation recall", "session lineage deduplication", "anchored pagination", "search ranking demotion", "session source filtering", "fileread"]
timestamp: 2026-07-19T08:24:44.241486+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 3
confidence: 1
---
# Summary

The file defines a zero-LLM, SQLite-backed long-term conversation recall tool with discovery, scrolling, and recent-session browsing behaviors inferred entirely from arguments. Its filtering and ranking policy prioritizes interactive user history while retaining cron content as a fallback and excluding integration or delegated-agent sessions.

## Facts
- The tool infers DISCOVERY from query, SCROLL from session_id plus around_message_id, and BROWSE from no arguments; it has no explicit mode parameter or LLM calls.
- DISCOVERY uses SQLite FTS5, deduplicates by session lineage, and returns snippets, ±5-message windows, and three-message start/end bookends.
- SCROLL uses anchored message windows without FTS5 or bookends; callers continue scrolling by re-anchoring on the returned first or last message ID.
- Sessions sourced from subagent or tool are hidden by default, while cron sessions remain searchable but are ranked below interactive sessions.
- Discovery scans up to 300 FTS rows before lineage deduplication to avoid repetitive cron content starving interactive matches.
- _format_timestamp converts numeric Unix timestamps and numeric strings to local human-readable dates, returns unknown for None, preserves nonnumeric strings, and logs conversion failures.

## Concepts
- SQLite FTS5
- conversation recall
- session lineage deduplication
- anchored pagination
- search ranking demotion
- session source filtering

## Files
- `/Users/davec/.hermes/hermes-agent/tools/session_search_tool.py`

_Importance: 3 · Confidence: 1_
