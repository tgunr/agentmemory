---
type: file_edit
title: skill_manage post_tool_call behavior modification
description: User interaction triggers modified behavior
resource: agentmemory://observation/obs_msr68uub_b220f0c95a46
tags: ["skiills", "behaviour modification", "description limitiation", "file_edit"]
timestamp: 2026-08-13T07:03:13.182635+00:00
source: agentmemory
session_id: 20260812_063037_afea39f2
importance: 4
confidence: 0.9
---
# Summary

The post_tool_call hook for skill_manage was triggered by a user interaction. The behavior has been modified to fit the 60-character system-prompt budget. Additionally, the tool's response is now filtered based on specific wrapper strings.

## Facts
- Descriptive limitation: 60 chars maximum for new skills; description moved to body
- New skill index truncates longer descriptions, impacting routing signals

## Concepts
- skiills
- behaviour modification
- description limitiation

_Importance: 4 · Confidence: 0.9_
