---
type: Error
title: skill_manage write_file failed: wrong parameter name
description: Tool received 'content' instead of required 'file_content' parameter
resource: agentmemory://observation/obs_mrrhtudw_3b6dee0ae49d
tags: ["tool API parameter mismatch", "error"]
timestamp: 2026-07-19T07:47:45.808847+00:00
source: agentmemory
session_id: 20260719_023940_df63eb
importance: 3
confidence: 1
---
# Summary

Tool call to write a diagnostic document about SMB + Homebrew gmake permission issues failed due to parameter naming mismatch - the tool expects 'file_content' but received 'content'.

## Facts
- Tool: skill_manage
- Action: write_file
- Provided parameter: content
- Required parameter: file_content
- Target file: references/smb-gmake-gotcha.md

## Concepts
- tool API parameter mismatch

## Files
- `references/smb-gmake-gotcha.md`

_Importance: 3 · Confidence: 1_
