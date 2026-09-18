---
type: file_edit
title: gui-verification tool usage
description: Error in creating new tool
resource: agentmemory://observation/obs_msj5azr1_1b602c65a800
tags: ["python3", "tsc", "file_edit"]
timestamp: 2026-08-07T16:14:43.831950+00:00
source: agentmemory
session_id: 20260807_110036_a35c6c
importance: 5
confidence: 0.9
---
# Summary

Failed to create new tool, error message provided is outside expected character limit.

## Facts
- Description is 87 chars — new skills must fit the 60-char system-prompt budget (one sentence, trigger first, ends with a period). The skill index truncates longer descriptions to 57 chars + '...', destroying the routing signal. Move detail into the skill body.

## Concepts
- python3
- tsc

_Importance: 5 · Confidence: 0.9_
