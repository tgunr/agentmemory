---
type: file_edit
title: Updated test project clearing pointer patch
description: No changes to test_get_unknown_returns_error
resource: agentmemory://observation/obs_mvxo5eml_42cbdc2cbc9f
tags: ["Testing architecture", "Pointer handling in projects", "file_edit"]
timestamp: 2026-11-01T10:10:09.352888+00:00
source: agentmemory
session_id: local-f72daeb20ac9380be3e18cf64b32ac02cc7aac75cbdaaa69291e411e5ead06e6
importance: 7
confidence: 1
---
# Summary

The patch cleared the pointer to 'Active' project in a write operation, and reactivated it after archiving with restore functionality tested.

## Facts
- Archived project must clear write pointer
- Restore is asymmetric
- Test project clearing pointer updated

## Concepts
- Testing architecture
- Pointer handling in projects

## Files
- `/Users/davec/.hermes/hermes-agent/tests/tui_gateway/test_projects_rpc.py`

_Importance: 7 · Confidence: 1_
