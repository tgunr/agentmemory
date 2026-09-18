---
type: file_edit
title: Comparing tmutil backups and state.db
description: No new backups detected
resource: agentmemory://observation/obs_mrw6hmb9_d6eefc8dde56
tags: ["tmutil backups", "state.db", "file_edit"]
timestamp: 2026-07-22T14:29:10.574556+00:00
source: agentmemory
session_id: 20260722_091508_5ddc4a
importance: 4
confidence: 0.9
---
# Summary

The script executed successfully, but no new backups were found. However, local snapshots show that the latest backup was on 2026-07-22.

## Facts
- No new backups found using tmutil listbackups
- Local snapshots show 2026-07-22 backup time machine file

## Concepts
- tmutil backups
- state.db

## Files
- `/usr/bin/tmutil`
- `/Users/davec/.hermes/state.db`
- `com.apple.TimeMachine.2026-07-22-005707.local`

_Importance: 4 · Confidence: 0.9_
