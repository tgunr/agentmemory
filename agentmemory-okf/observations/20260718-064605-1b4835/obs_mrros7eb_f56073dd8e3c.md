---
type: Error
title: Skill patch failed: read-before-write requirement
description: Attempted to patch bluebubbles-gateway skill documentation without loading current content first
resource: agentmemory://observation/obs_mrros7eb_f56073dd8e3c
tags: ["skill management", "read-before-write pattern", "macOS process environment", "environment variable verification", "documentation patching", "error"]
timestamp: 2026-07-19T11:02:26.671786+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The skill_manage patch operation failed because the system enforces a read-before-write pattern. The attempted change would have updated documentation for the bluebubbles-gateway skill to reflect macOS limitations with ps command for environment variable inspection, replacing direct process inspection with behavioral verification methods. The operation must be retried after first loading the current skill content via skill_view.

## Facts
- Tool: skill_manage with action 'patch' on skill 'bluebubbles-gateway'
- Attempted to update documentation about verifying environment variables in gateway process
- Change noted macOS limitation: ps command cannot expose process environment variables
- Old content included bash commands using ps -E to inspect BLUEBUBBLES_ALLOW env var
- New content emphasizes behavioral verification via synthetic-deny probe instead
- Operation failed with error: read-before-write required
- Must call skill_view(name) or skill_view(name, file_path=...) before patching

## Concepts
- skill management
- read-before-write pattern
- macOS process environment
- environment variable verification
- documentation patching

## Files
- `bluebubbles-gateway/SKILL.md`

_Importance: 4 · Confidence: 1_
