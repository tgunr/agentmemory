---
type: Error
title: skill_manage write_file failed: missing file_content parameter
description: Call used `content` key; tool requires `file_content`
resource: agentmemory://observation/obs_mrqaaysg_98fa7383dd64
tags: ["skill_manage API parameter contract", "tool input validation", "agentmemory_observer plugin verification", "Hermes plugin package loading", ".env fallback authentication", "error"]
timestamp: 2026-07-18T11:29:21.563609+00:00
source: agentmemory
session_id: 20260718_061804_159701
importance: 5
confidence: 1
---
# Summary

The attempt to persist observer audit notes to `references/observer-audit-notes.md` failed because the `skill_manage` tool expects the file payload under the key `file_content`, not `content`. None of the findings were written to disk.

## Facts
- Tool `skill_manage` with `action: "write_file"` returned `success: false` and error: `"file_content is required for 'write_file'."`
- Caller supplied `content` parameter containing markdown audit notes instead of the required `file_content` parameter
- Target file path was `references/observer-audit-notes.md` for skill `agentmemory-hermes-integration`
- Audit notes covered a fixed verifier bug, an orphan flat file, path-based discovery of 10 plugin copies, live API evidence, and methodology warning

## Concepts
- skill_manage API parameter contract
- tool input validation
- agentmemory_observer plugin verification
- Hermes plugin package loading
- .env fallback authentication

## Files
- `references/observer-audit-notes.md`
- `scripts/verify-observer-secret.py`
- `~/.hermes/plugins/agentmemory_observer/__init__.py`

_Importance: 5 · Confidence: 1_
