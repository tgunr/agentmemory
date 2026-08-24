---
type: discovery
title: Hermes Agent SQLite schema inspection for pveroot profile
description: Examining state.db tables for sessions and messages
resource: agentmemory://observation/obs_mrrj5uia_2ef5aeb8df85
tags: ["SQLite database schema", "Hermes Agent data model", "Session tracking and token accounting", "Message persistence with reasoning fields", "discovery"]
timestamp: 2026-07-19T08:25:05.453597+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 6
confidence: 1
---
# Summary

Executed Python code to inspect the SQLite database schema for a Hermes Agent profile. The database stores session and message data with extensive tracking of tokens, costs, git context, and reasoning details. This reveals the data model used by Hermes Agent for conversation persistence and analytics.

## Facts
- Database path: /Users/davec/.hermes/profiles/pveroot/state.db
- Sessions table has 44 columns including: id, source, user_id, model, model_config, system_prompt, parent_session_id, started_at, ended_at, message_count, tool_call_count, input_tokens, output_tokens, estimated_cost_usd, git_branch, git_repo_root, session_key, chat_id, thread_id
- Messages table has 21 columns including: id, session_id, role, content, tool_call_id, tool_calls, tool_name, timestamp, token_count, finish_reason, reasoning, reasoning_content, compacted
- Sample session uses model 'kilo-auto/free' with source 'webui'
- System prompt describes Hermes Agent by Nous Research configured for SSH access to pve.root (10.1.2.7 via 10gb interface as root)
- Model config includes max_iterations: 150, reasoning_config enabled with effort medium

## Concepts
- SQLite database schema
- Hermes Agent data model
- Session tracking and token accounting
- Message persistence with reasoning fields

## Files
- `/Users/davec/.hermes/profiles/pveroot/state.db`

_Importance: 6 · Confidence: 1_
