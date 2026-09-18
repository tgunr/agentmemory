---
type: Error
title: skill_manage patch failed - read before write required for bluebubbles-gateway skill
description: Attempted to patch skill documentation without first loading current content
resource: agentmemory://observation/obs_mrros8zo_928f12dbc12b
tags: ["skill_manage tool workflow", "read-before-write requirement", "BlueBubbles gateway diagnostics", "background curator patches", "error"]
timestamp: 2026-07-19T11:02:28.736976+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The skill_manage tool rejected a patch operation because the SKILL.md content must be loaded via skill_view before editing. The attempted patch contained technical documentation about distinguishing real gateway loops from stale process displays and testing caveats for BlueBubbles webhook URLs.

## Facts
- Tool: skill_manage with action 'patch'
- Skill name: bluebubbles-gateway
- Error type: Refusing background curator patch due to missing read-before-write
- Patch content included diagnostic procedures for gateway loop detection and test-suite pitfalls

## Concepts
- skill_manage tool workflow
- read-before-write requirement
- BlueBubbles gateway diagnostics
- background curator patches

## Files
- `SKILL.md (bluebubbles-gateway)`

_Importance: 4 · Confidence: 1_
