---
type: Error
title: skill_manage patch failed - read before write required
description: File patching blocked due to missing content load step
resource: agentmemory://observation/obs_mrs1ajr1_e240ddd18dfd
tags: ["read-before-write pattern", "skill management", "error"]
timestamp: 2026-07-19T16:52:37.881123+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

The skill_manage tool rejected a patch operation because it requires the file content to be loaded via skill_view in the current review turn before allowing modifications. This is a safety mechanism to prevent concurrent editing conflicts.

## Facts
- Tool: skill_manage with action "patch"
- Target file: references/apple-reminders.md
- Skill name: macos-integrations
- Error: "Refusing background curator patch... content has not been loaded in this review turn"</arg_value>
    <fact>Recovery: Must call skill_view(name) or skill_view(name, file_path=...) first

## Concepts
- read-before-write pattern
- skill management

## Files
- `references/apple-reminders.md`

_Importance: 4 · Confidence: 1_
