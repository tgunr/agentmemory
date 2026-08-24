---
type: Error
title: skill_manage patch failed - SKILL.md read required
description: Attempted to patch bluebubbles-gateway skill without loading SKILL.md first
resource: agentmemory://observation/obs_mrros870_ee2d118392f0
tags: ["skill management", "read-before-write requirement", "iMessage gateway testing", "error"]
timestamp: 2026-07-19T11:02:27.705101+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The skill_manage patch operation failed because the system requires SKILL.md to be loaded via skill_view before any modifications can be made. This is a safety mechanism to ensure the current content is available. The patch was documenting regression tests for iMessage gateway echo handling behavior.

## Facts
- Tool: skill_manage with action 'patch'
- Skill name: bluebubbles-gateway
- Patch operation involved test_send_prefixed_then_bare_echo_dropped and test_status_reply_echo_with_prefix_and_multiline_dropped test documentation
- Error: read-before-write requirement not met - SKILL.md content not loaded in current review turn
- Required action: call skill_view(name) before retry

## Concepts
- skill management
- read-before-write requirement
- iMessage gateway testing

## Files
- `SKILL.md`

_Importance: 4 · Confidence: 1_
