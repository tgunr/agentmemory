---
type: Observation
title: Failure in session-rename tool
description: No such session existed
resource: agentmemory://observation/obs_mvuinh36_8bab17cc5eb3
tags: ["system-prompt-budget-limit", "observation"]
timestamp: 2026-10-30T05:12:56.126337+00:00
source: agentmemory
session_id: 20261030_001120_f8c5f7
importance: 6
confidence: 1
---
# Summary

The session-rename tool failed due to a description that exceeded the 60-character limit, resulting in the rollback of all touched skills.

## Facts
- Tool: skill_manage
- Operation: create on 'session-rename'
- Success: false
- Error message: Description is 84 chars — new skills must fit the 60-char system-prompt budget (one sentence, trigger first, ends with a period)
- Error index: 0
- Completed before failure: 0

## Concepts
- system-prompt-budget-limit

_Importance: 6 · Confidence: 1_
