---
type: FileRead
title: Airflow SQL table info extracted
description: Retrieved PRAGMA table_info(sessions) from state.db
resource: agentmemory://observation/obs_msuc0d2l_ef3911a99034
tags: ["fileread"]
timestamp: 2026-08-15T12:07:53.126794+00:00
source: agentmemory
session_id: 20260815_070503_44aa13
importance: 4
confidence: 0.85
---
# Summary

Airflow tool call resulted in the extraction of PRAGMA table_info(sessions) from state.db. This is an important step as it provides necessary data for other downstream processes to understand sessions.

## Facts
- (0, 'id', 'TEXT', 0, None, 1)
- (1, 'source', 'TEXT', 1, None, 0)
- (2, 'user_id', 'TEXT', 0, None, 0)
- (3, 'model', 'TEXT', 0, None, 0)
- (4, 'model_config', 'TEXT', 0, None, 0)
- (5, 'system_prompt', 'TEXT', 0, None, 0)
- (6, 'parent_session_id', 'TEXT', 0, None, 0)
- (7, 'started_at', 'REAL', 1, None, 0)
- (8, 'ended_at', 'REAL', 0, None, 0)
- (9, 'end_reason', 'TEXT', 0, None, 0)
- (10, 'message_count', 'INTEGER', 0, '0', 0)
- (11, 'tool_call_count', 'INTEGER', 0, '0', 0)
- (12, 'input_tokens', 'INTEGER', 0, '0', 0)
- (13, 'output_tokens', 'INTEGER', 0, '0', 0)
- (14, 'cache_read_tokens', 'INTEGER', 0, '0', 0)
- (15, 'cache_write_tokens', 'INTEGER', 0, '0', 0)
- (16, 'reasoning_tokens', 'INTEGER', 0, '0', 0)
- (17, 'cwd', 'TEXT', 0, None, 0)
- (18, 'billing_provider', 'TEXT', 0, None, 0)
- (19, 'billing_base_url', 'TEXT', 0, None, 0)
- (20, 'billing_mode', 'TEXT', 0, None, 0)
- (21, 'estimated_cost_usd', 'REAL', 0, None, 0)
- (22, 'actual_cost_usd', 'REAL', 0, None, 0)
- (23, 'cost_status', 'TEXT', 0, None, 0)
- (24, 'cost_source', 'TEXT', 0, None, 0)
- (25, 'pricing_version', 'TEXT', 0, None, 0)
- (26, 'title', 'TEXT', 0, None, 0)
- (27, 'api_call_count', 'INTEGER', 0, '0', 0)
- (28, 'handoff_state', 'TEXT', 0, None, 0)
- (29, 'handoff_platform', 'TEXT', 0, None, 0)
- (30, 'handoff_error', 'TEXT', 0, None, 0)
- (31, 'rewind_count', 'INTEGER', 1, '0', 0)
- (32, 'archived', 'INTEGER', 1, '0', 0)
- (33, 'session_key', 'TEXT', 0, None, 0)
- (34, 'chat_id', 'TEXT', 0, None, 0)
- (35, 'chat_type', 'TEXT', 0, None, 0)
- (36, 'thread_id', 'TEXT', 0, None, 0)
- (37, 'git_branch', 'TEXT', 0, None, 0)
- (38, 'git_repo_root', 'TEXT', 0, None, 0)
- (39, 'compression_failure_cooldown_until', 'REAL', 0, None, 0)
- (40, 'compression_failure_error', 'TEXT', 0, None, 0)
- (41, 'display_name', 'TEXT', 0, None, 0)
- (42, 'origin_json', 'TEXT', 0, None, 0)
- (43, 'expiry_finalized', 'INTEGER', 0, '0', 0)
- (44, 'compression_fallback_streak', 'INTEGER', 1, '0', 0)
- (45, 'compression_ineffective_count', 'INTEGER', 1, '0', 0)
- (46, 'profile_name', 'TEXT', 0, None, 0)
- (47, 'pinned', 'INTEGER', 1, '0', 0)
- (48, 'system_prompt_hash', 'TEXT', 0, None, 0)
- (49, 'last_activity_at', 'REAL', 0, None, 0)
- (50, 'last_activity_description', 'TEXT', 0, None, 0)
- (51, 'last_activity_provenance', 'TEXT', 0, None, 0)
- (52, 'last_read_at', 'REAL', 0, None, 0)
- (53, 'title_source', 'TEXT', 0, None, 0)
- (54, 'git_metadata_generation', 'INTEGER', 1, '0', 0)
- (55, 'hidden', 'INTEGER', 1, '0', 0)

_Importance: 4 · Confidence: 0.85_
