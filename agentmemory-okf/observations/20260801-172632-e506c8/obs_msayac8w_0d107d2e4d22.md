---
type: file_edit
title: Failed skill manage tool call: delete agent memory skill
description: Error deleting skill from AI profile
resource: agentmemory://observation/obs_msayac8w_0d107d2e4d22
tags: ["file_edit"]
timestamp: 2026-08-01T22:36:06.649492+00:00
source: agentmemory
session_id: 20260801_172632_e506c8
importance: 6
confidence: 0.85
---
# Summary

The tool call to manage the skill with name 'agentmemory' was executed, but the skill could not be deleted due to it not existing in the AI's active profile.

## Facts
- Timestamp: {2026-08-01T22:36:06.649492+00:00}
- Tool used: skill_manage
- Input action request: delete, name: agentmemory
- Response from server: Skill 'agentmemory' not found in active profile 'ai'. Use skills_list() to see available skills.

_Importance: 6 · Confidence: 0.85_
