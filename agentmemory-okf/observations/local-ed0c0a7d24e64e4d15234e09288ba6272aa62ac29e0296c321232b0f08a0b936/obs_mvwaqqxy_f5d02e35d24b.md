---
type: file_edit
title: Skills manage patch operation error
description: Error occurred in patching hermes-cron-troubleshooting skill
resource: agentmemory://observation/obs_mvwaqqxy_f5d02e35d24b
tags: ["patch operation error", "file_edit"]
timestamp: 2026-10-31T11:07:04.284516+00:00
source: agentmemory
session_id: local-ed0c0a7d24e64e4d15234e09288ba6272aa62ac29e0296c321232b0f08a0b936
importance: 9
confidence: 0.9
---
# Summary

The update process for the skills manage script hit an issue while trying to patch the hermes-cron-troubleshooting skill. The error is occurring because the new_string does not match the current file content. To resolve this, the old_string must be copied verbatim from the file, read the target file (skills manage's SKILL.md or the specific file path), and then retry the patch operation. Updating the skill will overwrite unrelated content and potentially destroy its functionality.

## Facts
- old_string must be the exact text in hermes-cron-troubleshooting skill file
- patch operation failed due to mismatch in old_string and file content

## Concepts
- patch operation error

## Files
- `hermes-cron-troubleshooting skill file`

_Importance: 9 · Confidence: 0.9_
