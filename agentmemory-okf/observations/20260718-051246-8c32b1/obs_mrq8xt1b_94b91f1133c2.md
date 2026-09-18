---
type: file_write
title: Documentation for pruning empty stub sessions from Hermes state.db
description: Creating reference guide for safe session cleanup procedure
resource: agentmemory://observation/obs_mrq8xt1b_94b91f1133c2
tags: ["session pruning", "database maintenance", "dangling references", "state.db cleanup", "file_write"]
timestamp: 2026-07-18T10:51:07.962157+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

Created a reference document capturing lessons learned from a session cleanup pass, including the critical need to handle parent_session_id references before deleting stubs, verify with actual message counts rather than cached columns, and avoid deleting intentional placeholder profiles.

## Facts
- Tool: skill_manage with write_file action
- File created: references/session-pruning.md in hermes-workspace-context skill
- Documents safe pruning technique for sessions with &lt;=1 message
- Warns about cached message_count column drift and dangling parent_session_id references

## Concepts
- session pruning
- database maintenance
- dangling references
- state.db cleanup

## Files
- `references/session-pruning.md`

_Importance: 5 · Confidence: 1_
