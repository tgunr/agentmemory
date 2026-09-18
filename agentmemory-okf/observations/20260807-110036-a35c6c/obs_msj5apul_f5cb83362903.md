---
type: file_edit
title: gui_verification_tool_usage
description: Edit skills for gui-verification tool usage error
resource: agentmemory://observation/obs_msj5apul_f5cb83362903
tags: ["gui_verification_tool_usage", "file_edit"]
timestamp: 2026-08-07T16:14:30.995368+00:00
source: agentmemory
session_id: 20260807_110036_a35c6c
importance: 4
confidence: 0.9
---
# Summary

Tool usage resulted in error due to description length exceeding the allowed limit. The gui-verification tool usage needs to be adjusted to fit within the new skills system-prompt budget of one sentence that ends with a period.

## Facts
- New skills must fit the 60-char system-prompt budget (one sentence, trigger first, ends with a period).
- The skill index truncates longer descriptions to 57 chars + '...'.

## Concepts
- gui_verification_tool_usage

## Files
- `./skills.md`

_Importance: 4 · Confidence: 0.9_
