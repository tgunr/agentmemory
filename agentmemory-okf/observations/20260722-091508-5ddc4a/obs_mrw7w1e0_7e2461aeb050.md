---
type: file_edit
title: Hermes Session Recovery
description: Information on restoring state.db from Time Machine
resource: agentmemory://observation/obs_mrw7w1e0_7e2461aeb050
tags: ["file_edit"]
timestamp: 2026-07-22T15:08:22.916733+00:00
source: agentmemory
session_id: 20260722_091508_5ddc4a
importance: 7
confidence: 0.75
---
# Summary

When restoring a file from Time Machine, the restored file replaces the live file entirely. No "restored copy" exists elsewhere.

## Facts
- The restored file overwrites the live file in place.
- The WAL and shared memory files remain from the current state of the live DB.

## Files
- `/Volumes/com.apple.TimeMachine.localsnapshots/Backups.backupdb/[hostname]/2026-07-22-HHMMSS/Data/<file_path>`

_Importance: 7 · Confidence: 0.75_
