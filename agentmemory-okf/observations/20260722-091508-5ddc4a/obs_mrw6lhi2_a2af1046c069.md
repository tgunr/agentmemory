---
type: file_write
title: Time Machine Restore Diagnosis
description: No actual backup copy exists.
resource: agentmemory://observation/obs_mrw6lhi2_a2af1046c069
tags: ["restoration from Time Machine", "file_write"]
timestamp: 2026-07-22T14:32:10.966078+00:00
source: agentmemory
session_id: 20260722_091508_5ddc4a
importance: 6
confidence: 0.9
---
# Summary

To diagnose Time Machine restore confusion, check the live DB file and WAL, then inspect the date range of sessions and snapshot files' mtime.

## Facts
- A restored file in `~/.hermes/state.db` overwrites the live file without a separate restore copy.

## Concepts
- restoration from Time Machine

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-session-recovery/references/time-machine-restore-diagnosis.md`

_Importance: 6 · Confidence: 0.9_
