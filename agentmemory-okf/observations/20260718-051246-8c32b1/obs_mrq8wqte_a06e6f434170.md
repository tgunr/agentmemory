---
type: Error
title: Skill patch failed - read-before-write requirement not met
description: skill_manage patch operation rejected for agentmemory-hermes-integration
resource: agentmemory://observation/obs_mrq8wqte_a06e6f434170
tags: ["skill management", "read-before-write pattern", "MCP integration", "AgentMemory", "error"]
timestamp: 2026-07-18T10:50:18.430205+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 4
confidence: 1
---
# Summary

The skill_manage patch operation failed because the current SKILL.md content was not loaded in this review turn. The system enforces a read-before-write pattern to prevent unintended overwrites, requiring skill_view to be called first to fetch the current content.

## Facts
- Tool was skill_manage with action "patch"
- Target skill name: agentmemory-hermes-integration
- Error indicates SKILL.md content must be loaded via skill_view before patching
- _read_before_write_required is true for this operation

## Concepts
- skill management
- read-before-write pattern
- MCP integration
- AgentMemory

## Files
- `skills/agentmemory-hermes-integration/SKILL.md`

_Importance: 4 · Confidence: 1_
