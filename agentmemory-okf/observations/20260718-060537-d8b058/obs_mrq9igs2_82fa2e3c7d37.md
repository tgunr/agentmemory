---
type: CommandRun
title: Inspect Hermes SQLite session database schema and counts
description: Exploring ~/.hermes state.db structure and session distribution across profiles
resource: agentmemory://observation/obs_mrq9igs2_82fa2e3c7d37
tags: ["SQLite database schema", "session management", "token tracking", "cost tracking", "multi-profile architecture", "database inspection", "commandrun"]
timestamp: 2026-07-18T11:07:11.855302+00:00
source: agentmemory
session_id: 20260718_060537_d8b058
importance: 5
confidence: 1
---
# Summary

Executed a Python script to inspect the SQLite database structure in ~/.hermes, revealing a comprehensive sessions table with 42 columns tracking session metadata, token usage, costs, and git context. The inspection showed 158 sessions in the global database plus 140 additional sessions distributed across 8 profile-specific databases, providing insight into the multi-profile session management architecture.

## Facts
- Global state.db sessions table has 42 columns including: id, source, user_id, model, model_config, system_prompt, parent_session_id, started_at, ended_at, message_count, tool_call_count, input_tokens, output_tokens, cache_read_tokens, cache_write_tokens, reasoning_tokens, cwd, billing_provider, billing_base_url, billing_mode, estimated_cost_usd, actual_cost_usd, cost_status, cost_source, pricing_version, title, api_call_count, handoff_state, handoff_platform, handoff_error, rewind_count, archived, session_key, chat_id, chat_type, thread_id, git_branch, git_repo_root, compression_failure_cooldown_until, compression_failure_error, display_name, origin_json, expiry_finalized
- Global state.db contains 158 sessions total
- Profile databases: ai (55 sessions), cc (49 sessions), develop (2 sessions), ollama (19 sessions), personal (5 sessions), pveroot (8 sessions), ranch (1 session), shop (1 session), default (empty)
- Sample sessions show message counts ranging from 2 to 301, with topics including Hermes profile organization, AgentMemory UI debugging, Ollama model management, and Git auto-committing
- Sessions are ordered by last_active timestamp with IDs formatted as YYYYMMDD_HHMMSS_suffix

## Concepts
- SQLite database schema
- session management
- token tracking
- cost tracking
- multi-profile architecture
- database inspection

## Files
- `~/.hermes/state.db`
- `~/.hermes/profiles/ai/state.db`
- `~/.hermes/profiles/cc/state.db`
- `~/.hermes/profiles/develop/state.db`
- `~/.hermes/profiles/ollama/state.db`
- `~/.hermes/profiles/personal/state.db`
- `~/.hermes/profiles/pveroot/state.db`
- `~/.hermes/profiles/ranch/state.db`
- `~/.hermes/profiles/shop/state.db`

_Importance: 5 · Confidence: 1_
