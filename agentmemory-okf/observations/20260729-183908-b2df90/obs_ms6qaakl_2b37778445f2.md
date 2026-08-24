---
type: file_edit
title: Invalid Git Ref Error
description: No changes to save
resource: agentmemory://observation/obs_ms6qaakl_2b37778445f2
tags: ["file_edit"]
timestamp: 2026-07-29T23:41:02.848875+00:00
source: agentmemory
session_id: 20260729_183908_b2df90
importance: 4
confidence: 0.85
---
# Summary

To create a new local branch, try using an existing branch by specifying the original branching commits, or use the -b option to make it automatically. Current location '/home/user/.hermes/hermes-agent'

## Facts
- Failed to execute Git command: cd ~/.hermes/hermes-agent && git diff upstream/main..my-local-branch:apps/desktop/src/app/session/hooks/use-session-list-actions.ts 2>&1 | head -50
- Output Output:
- Error: fatal: invalid object name 'upstream/main..my-local-branch'.

_Importance: 4 · Confidence: 0.85_
