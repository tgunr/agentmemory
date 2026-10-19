---
type: Error
title: Error patching sanoid-syncoid-operations
description: syncoid.timer dead — daily replication not firing
resource: agentmemory://observation/obs_mve10dgu_2c88f3138aa9
tags: ["patch operation error", "error"]
timestamp: 2026-10-18T16:14:46.055992+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 6
confidence: 1
---
# Summary

The patch operation failed because the old_string text is not the current text in the file, and using the same text and falling back to a write_file operation could destroy unrelated content.

## Facts
- syncoid-runner.service may stay in `activating` state for an extended period during large syncs.
- A freshly started syncoid-runner.service may stay in `activating` for an extended period (hours for large initial syncs or big catch-up increments).
- A patch operation must use the EXACT old_string text.

## Concepts
- patch operation error

## Files
- `skill/SKILL.md`

_Importance: 6 · Confidence: 1_
