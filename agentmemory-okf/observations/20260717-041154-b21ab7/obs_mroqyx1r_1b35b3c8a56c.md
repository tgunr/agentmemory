---
type: Error
title: Skill patch failed: SKILL.md content not pre-loaded
description: skill_manage patch requires prior skill_view call
resource: agentmemory://observation/obs_mroqyx1r_1b35b3c8a56c
tags: ["skill management", "read-before-write pattern", "content validation", "error"]
timestamp: 2026-07-17T09:40:20.555343+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 4
confidence: 1
---
# Summary

The skill_manage tool rejected a patch operation because the SKILL.md content was not loaded in the current review turn. The system requires a prior skill_view call to retrieve the current content before allowing modifications. This is a guard to prevent accidental overwrites without seeing existing content.

## Facts
- Action attempted: patch on skill 'hermes-service-debugging'
- Operation rejected with error: Refusing background curator patch
- Error cites missing prerequisite: SKILL.md content must be loaded via skill_view()
- System flag set: _read_before_write_required = true

## Concepts
- skill management
- read-before-write pattern
- content validation

## Files
- `~/.hermes/skills/hermes-service-debugging/SKILL.md`

_Importance: 4 · Confidence: 1_
