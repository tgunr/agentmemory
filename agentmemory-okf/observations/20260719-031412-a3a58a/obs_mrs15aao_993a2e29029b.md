---
type: file_edit
title: Added recency window filter to unfinished session audit script
description: Patch adds age-based filtering to skip sessions older than DAYS_WINDOW
resource: agentmemory://observation/obs_mrs15aao_993a2e29029b
tags: ["session filtering", "datetime timestamp comparison", "recency window filtering", "audit script modification", "file_edit"]
timestamp: 2026-07-19T16:48:32.349956+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 5
confidence: 1
---
# Summary

Added a recency window check to filter out old sessions in the unfinished session audit script, preventing stale sessions from being reported by calculating their age in days and comparing against DAYS_WINDOW threshold.

## Facts
- Added 5 lines of code to check if session last activity timestamp exceeds DAYS_WINDOW
- Age calculation uses (datetime.now().timestamp() - last_ts) / 86400 to get days
- Logic continues to next session if age_days > DAYS_WINDOW
- New code placed before try block that calculates last_date
- Modification successful with lint status "ok"

## Concepts
- session filtering
- datetime timestamp comparison
- recency window filtering
- audit script modification

## Files
- `/Users/davec/.hermes/scripts/unfinished_session_audit.py`

_Importance: 5 · Confidence: 1_
