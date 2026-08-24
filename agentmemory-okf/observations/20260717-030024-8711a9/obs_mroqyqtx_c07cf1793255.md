---
type: file_write
title: Write observation audit script analyzing real vs empty observations
description: Python script to analyze state store observation files
resource: agentmemory://observation/obs_mroqyqtx_c07cf1793255
tags: ["memory database audit", "observation classification", "state store analysis", "file_write"]
timestamp: 2026-07-17T09:40:12.496640+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 4
confidence: 1
---
# Summary

Wrote a diagnostic script to audit the observation database, categorizing entries by type and tracking distribution across sessions. This helps identify the ratio of meaningful observations versus placeholder or notification entries in the memory system.

## Facts
- Created /tmp/audit_now.py (1514 bytes) to analyze observation data
- Script processes mem%3Aobs%3A*.bin files from /Users/davec/data/agentmemory/data/state_store.db
- Classifies observations as "real" or "empty" based on type field (empty = no type or type is notification)
- Collects per-session statistics and sample observations for debugging

## Concepts
- memory database audit
- observation classification
- state store analysis

## Files
- `/tmp/audit_now.py`
- `/private/tmp/audit_now.py`

_Importance: 4 · Confidence: 1_
