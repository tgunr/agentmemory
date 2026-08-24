---
type: Error
title: skill_manage write_file failed due to parameter mismatch
description: Tool expected 'file_content' instead of 'content' for Hermes hook verification script
resource: agentmemory://observation/obs_mroppbnl_70eef1a1cdf0
tags: ["Hermes plugin hooks", "agentmemory observation", "API parameter mismatch", "bash shell scripting", "error"]
timestamp: 2026-07-17T09:04:53.309388+00:00
source: agentmemory
session_id: 20260717_030024_8711a9
importance: 3
confidence: 1
---
# Summary

The agent attempted to write a bash verification script for the Hermes plugin's post_tool_call hook using the skill_manage tool. The operation failed because the tool's API expected a file_content parameter rather than the content parameter provided.

## Facts
- Action 'write_file' on tool 'skill_manage' failed.
- Error message: "file_content is required for 'write_file'."
- Target file: scripts/verify-observe-hooktype.sh
- Script intent: End-to-end verification of agentmemory extracting tool I/O for Hermes post_tool_call hook.

## Concepts
- Hermes plugin hooks
- agentmemory observation
- API parameter mismatch
- bash shell scripting

## Files
- `scripts/verify-observe-hooktype.sh`

_Importance: 3 · Confidence: 1_
