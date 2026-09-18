---
type: CommandRun
title: Query untitled sessions from Hermes state.db
description: Identify sessions needing auto-generated titles
resource: agentmemory://observation/obs_mrq8wj14_1cd0a6cf63aa
tags: ["SQLite database query", "Session management", "Auto-title generation", "Hermes state database", "commandrun"]
timestamp: 2026-07-18T10:50:08.342578+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 3
confidence: 1
---
# Summary

Executed SQLite query to identify untitled sessions in Hermes state database for potential auto-title generation. Retrieved schema of messages table and extracted first user message from each of 26 substantive untitled sessions to provide context for title generation.

## Facts
- Database: ~/.hermes/state.db (SQLite)
- Messages table has 20 columns: id, session_id, role, content, tool_call_id, tool_calls, tool_name, timestamp, token_count, finish_reason, reasoning, reasoning_content, reasoning_details, codex_reasoning_items, codex_message_items, platform_message_id, observed, active, compacted
- Found 26 untitled substantive sessions (sessions with ≥2 messages and NULL/empty title)
- Session IDs follow pattern YYYYMMDD_HHMMSS_XXXXXX or shorter hex hashes
- First user messages extracted for title generation context (topics include MCP tools, image analysis, Bluebubbles, Ollama models, profiles, ComfyUI, git monitoring)

## Concepts
- SQLite database query
- Session management
- Auto-title generation
- Hermes state database

## Files
- `~/.hermes/state.db`

_Importance: 3 · Confidence: 1_
