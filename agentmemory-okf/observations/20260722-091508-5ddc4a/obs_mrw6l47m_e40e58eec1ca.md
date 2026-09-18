---
type: file_write
title: Skip Local Snapshots Analysis
description: National Time Machine Local Snapshots are mounted Read-Only.
resource: agentmemory://observation/obs_mrw6l47m_e40e58eec1ca
tags: ["file_write"]
timestamp: 2026-07-22T14:31:53.741444+00:00
source: agentmemory
session_id: 20260722_091508_5ddc4a
importance: 3
confidence: 0.75
---
# Summary

The following Python program iterates over selected Time Machine local snapshots, extracting size comparisons and the size of the SQLite in-memory data structures (sqlite.db) to display snapshot creation times. This function works around a feature that restricts access by setting a file protect/readonly attribute.

## Facts
- No snap directory were found. Check local host details. No snapshots could proceed.
- This script reads only db file state on APFS mounted.

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-session-recovery/scripts/snapshot_size_comparison.py`

_Importance: 3 · Confidence: 0.75_
