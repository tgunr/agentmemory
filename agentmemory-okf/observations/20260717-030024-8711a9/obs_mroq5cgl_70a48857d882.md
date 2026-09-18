---
type: file_write
title: Write diagnostic script to find recoverable empty observation records
description: Script scans state_store.db for empty observation records with recoverable raw data
resource: agentmemory://observation/obs_mroq5cgl_70a48857d882
tags: ["state store inspection", "binary observation files", "data recovery diagnostics", "agent memory debugging", "file_write"]
timestamp: 2026-07-17T09:17:20.847546+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 5
confidence: 1
---
# Summary

A diagnostic Python script was written to inspect the agent memory state store and identify observation records that appear empty (notification type or no type) but still contain recoverable tool input/output data in their raw field. This is part of a data recovery or debugging effort for the memory compression system.

## Facts
- Script written to /tmp/dump_one.py (938 bytes)
- Targets state store at /Users/davec/data/agentmemory/data/state_store.db
- Searches for mem%3Aobs%3A*.bin observation files using glob
- Filters for records where type is "notification" or None but raw.tool_input or raw.tool_output exists
- Prints first matching record as JSON (truncated to 2500 chars) along with top-level and raw keys
- Reads binary files as UTF-8 ignoring errors, splits on null byte, parses JSON from first segment

## Concepts
- state store inspection
- binary observation files
- data recovery diagnostics
- agent memory debugging

## Files
- `/tmp/dump_one.py`
- `/Users/davec/data/agentmemory/data/state_store.db`

_Importance: 5 · Confidence: 1_
