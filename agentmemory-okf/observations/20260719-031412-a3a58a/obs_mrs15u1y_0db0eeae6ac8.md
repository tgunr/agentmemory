---
type: file_edit
title: Add reminder deduplication to prevent duplicate daily reminders
description: Introduces _dedupe_prior() function but has parameter naming bug
resource: agentmemory://observation/obs_mrs15u1y_0db0eeae6ac8
tags: ["reminder deduplication", "subprocess management", "JSON parsing", "parameter validation", "error handling", "file_edit"]
timestamp: 2026-07-19T16:48:57.955654+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 6
confidence: 1
---
# Summary

Added deduplication logic to prevent accumulating daily reminders by deleting prior ones with matching title prefix before creating new ones. However, the edit introduced a parameter naming bug where the function call uses `remindctl_prefix=` keyword argument but the function definition expects positional parameter `prefix`, causing Pyright errors that need to be fixed.

## Facts
- New function `_dedupe_prior(prefix)` queries reminders via `remindctl list --json`, parses output, and deletes any reminders whose title starts with the given prefix
- Modified `create_reminder()` to call `_dedupe_prior()` before adding new reminder to prevent accumulation
- Enhanced error message to include specific path: "System Settings > Privacy & Security > Reminders"
- LSP errors: Line 136 uses keyword `remindctl_prefix=` but function parameter is named `prefix`
- Deduplication logic is non-fatal - wrapped in try/except to avoid crashes

## Concepts
- reminder deduplication
- subprocess management
- JSON parsing
- parameter validation
- error handling

## Files
- `/Users/davec/.hermes/scripts/unfinished_session_audit.py`

_Importance: 6 · Confidence: 1_
