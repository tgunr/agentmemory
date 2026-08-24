---
type: Error
title: Skill patch failed: read-before-write requirement not met
description: skill_manage patch rejected because SKILL.md wasn't loaded in current turn
resource: agentmemory://observation/obs_mrros6ll_1c243b65dcd2
tags: ["skill management system", "read-before-write enforcement", "deployment ordering", "environment variable configuration", "BlueBubbles gateway", "error"]
timestamp: 2026-07-19T11:02:25.637802+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The skill_manage patch operation was rejected because the agent attempted to modify the bluebubbles-gateway skill without first loading its current content via skill_view(). This enforces a read-before-write pattern to prevent blind overwrites. The patch would have added critical deployment ordering documentation about .env variable loading behavior.

## Facts
- Tool: skill_manage with action=patch on skill 'bluebubbles-gateway'
- Attempted to insert DEPLOY-ORDERING LOCKOUT documentation before verification section
- Error: "Refusing background curator patch... current SKILL.md content has not been loaded"
- System enforces _read_before_write_required pattern for skill modifications
- Resolution: must call skill_view(name) first, then retry patch with loaded content

## Concepts
- skill management system
- read-before-write enforcement
- deployment ordering
- environment variable configuration
- BlueBubbles gateway

## Files
- `bluebubbles-gateway/SKILL.md`

_Importance: 5 · Confidence: 1_
