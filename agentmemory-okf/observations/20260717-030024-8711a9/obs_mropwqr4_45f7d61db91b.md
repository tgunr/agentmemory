---
type: CommandRun
title: Analyze observation store quality and recoverability
description: Python diagnostic script to categorize stored observations as meaningful vs empty/placeholder
resource: agentmemory://observation/obs_mropwqr4_45f7d61db91b
tags: ["state store audit", "observation serialization", "data recoverability analysis", "binary observation files", "temp file script execution", "commandrun"]
timestamp: 2026-07-17T09:10:39.467699+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 1
---
# Summary

A diagnostic Python script was executed to audit the observation store's data quality. It revealed that nearly half (261 of 570) of stored observations are empty placeholders, but over half of those (138) retain recoverable raw tool input/output data. This suggests a systematic issue where observations are being stored without proper type classification but with intact raw payloads.

## Facts
- State store database path: /Users/davec/data/agentmemory/data/state_store.db
- Observation files matched pattern: mem%3Aobs%3A*.bin
- 309 real (meaningful) observations found
- 261 empty/placeholder observations found (type missing or "notification")
- 138 of empty observations are recoverable (raw tool I/O still present)
- 123 observations are truly lost (no raw data)
- Recoverable observation raw keys include: duration_ms, error_message, is_error, status, task_id, tool_call_id, tool_input, tool_name, tool_output, turn_id
- Script was written to temp file, executed, then cleaned up

## Concepts
- state store audit
- observation serialization
- data recoverability analysis
- binary observation files
- temp file script execution

## Files
- `/Users/davec/data/agentmemory/data/state_store.db`

_Importance: 5 · Confidence: 1_
