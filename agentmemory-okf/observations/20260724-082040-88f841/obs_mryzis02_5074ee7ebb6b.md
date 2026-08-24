---
type: file_edit
title: Update SKILL.md in hermes-workspace-context skill
description: Patch applied.
resource: agentmemory://observation/obs_mryzis02_5074ee7ebb6b
tags: ["file_edit"]
timestamp: 2026-07-24T13:37:24.581136+00:00
source: agentmemory
session_id: 20260724_082040_88f841
importance: 4
confidence: 0.75
---
# Summary

Successfully applied patch to hermes-workspace-context skill, making use of ~hermes/projects.db as a source of truth. Patch included explicit_cwd trap to handle cwd-associated sessions more robustly.

## Facts
- The patched skill uses ~hermes/projects.db as a source of truth for projects.
- The updated skill is part of the retired 'projects' skill and includes the explicit_cwd trap for session associations.

## Files
- `~hermes/projects.db`
- `skills/hermes-workspace-context/SKILL.md`

_Importance: 4 · Confidence: 0.75_
