---
type: CommandRun
title: Audit observation store for empty vs real entries
description: Python diagnostic script scanning binary observation files
resource: agentmemory://observation/obs_mroqy6hu_1fd2792732e1
tags: ["state store audit", "observation storage", "binary file parsing", "data integrity check", "commandrun"]
timestamp: 2026-07-17T09:39:46.142137+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 4
confidence: 1
---
# Summary

A Python diagnostic script was executed to audit the observation store database by reading binary observation files and classifying them as "real" (with valid type) or "empty" (notification or null type). The store contains 254 observations all with valid types, indicating no wasted storage from empty or notification-only entries.

## Facts
- Database path: /Users/davec/data/agentmemory/data/state_store.db
- File pattern scanned: mem%3Aobs%3A*.bin
- Result: 254 real observations, 0 empty/notification-only, 254 total
- All observations contain valid non-null types
- Exit code: 0 (success)

## Concepts
- state store audit
- observation storage
- binary file parsing
- data integrity check

## Files
- `/Users/davec/data/agentmemory/data/state_store.db`

_Importance: 4 · Confidence: 1_
