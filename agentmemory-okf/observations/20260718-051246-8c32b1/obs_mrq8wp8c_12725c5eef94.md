---
type: Error
title: File write failed: missing "file_content" parameter despite content provided
description: Tool skill_manage returned error for write_file action on prune-stub-sessions.py
resource: agentmemory://observation/obs_mrq8wp8c_12725c5eef94
tags: ["tool parameter mismatch", "Hermes state database maintenance", "SQLite session pruning", "error"]
timestamp: 2026-07-18T10:50:16.378994+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 4
confidence: 1
---
# Summary

The skill_manage tool failed to write the prune-stub-sessions.py script due to a parameter name mismatch. The input used "content" but the tool expected "file_content", causing the operation to fail. This prevented the safe session cleanup script from being saved.

## Facts
- Tool attempted to write to scripts/prune-stub-sessions.py
- Error message states "file_content is required for 'write_file'"
- Input contained "content" key but tool expected "file_content" key</arg>
    <fact>Python script was intended for pruning stub sessions from Hermes state.db

## Concepts
- tool parameter mismatch
- Hermes state database maintenance
- SQLite session pruning

## Files
- `scripts/prune-stub-sessions.py`

_Importance: 4 · Confidence: 1_
