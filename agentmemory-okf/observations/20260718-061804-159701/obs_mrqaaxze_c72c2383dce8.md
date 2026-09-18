---
type: Error
title: Skill patch refused: SKILL.md content not loaded before write
description: skill_manage patch action requires prior skill_view call for read-before-write
resource: agentmemory://observation/obs_mrqaaxze_c72c2383dce8
tags: ["skill_management", "read_before_write_guard", "agentmemory_observer", "plugin_patching", "error"]
timestamp: 2026-07-18T11:29:20.518920+00:00
source: agentmemory
session_id: 20260718_061804_159701
importance: 5
confidence: 1
---
# Summary

The skill_manage tool rejected a patch operation because the SKILL.md content was not loaded in the current review turn. This is a read-before-write safeguard requiring skill_view() to be called first before any patch can be applied to prevent unintended overwrites.

## Facts
- Tool was skill_manage with action "patch" for skill 'agentmemory-hermes-integration'
- Error: "Refusing background curator patch" due to missing SKILL.md load
- _read_before_write_required flag set to true in error response</arg>
    <fact>Patch contained updated fix state for all 10 dir-based agentmemory_observer copies
- Documentation intended to show all copies now have _get_secret() .env fallback

## Concepts
- skill_management
- read_before_write_guard
- agentmemory_observer
- plugin_patching

_Importance: 5 · Confidence: 1_
