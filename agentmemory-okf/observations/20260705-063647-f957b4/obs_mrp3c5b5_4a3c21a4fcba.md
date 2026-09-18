---
type: Error
title: Skill patch failed - skill not found in active profile
description: Attempted to patch 'autonomous-ai-agents/profile-management' but it does not exist
resource: agentmemory://observation/obs_mrp3c5b5_4a3c21a4fcba
tags: ["skill management", "profile-scoped skills", "error handling", "error"]
timestamp: 2026-07-17T15:26:33.169096+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

The skill_manage tool attempted to patch a skill that doesn't exist in the current profile. The patch operation failed and returned an error indicating the skill was not found. This requires the user to first verify which skills are available before attempting modifications.

## Facts
- Action was 'patch' on skill 'autonomous-ai-agents/profile-management'</arg_value>
    <fact>Active profile is 'ai'
- Skill does not exist in the active profile
- Error suggests using skills_list() to see available skills

## Concepts
- skill management
- profile-scoped skills
- error handling

## Files
- `autonomous-ai-agents/profile-management`

_Importance: 4 · Confidence: 1_
