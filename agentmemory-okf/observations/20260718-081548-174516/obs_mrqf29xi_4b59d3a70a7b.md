---
type: Error
title: Patch rejected: read-before-write required for skill uv-printing
description: skill_manage patch failed due to missing prior skill_view call
resource: agentmemory://observation/obs_mrqf29xi_4b59d3a70a7b
tags: ["UV printing substrate references", "Read-before-write constraint", "Skill management system", "Wood substrate preparation for UV printing", "error"]
timestamp: 2026-07-18T13:42:34.178439+00:00
source: agentmemory
session_id: 20260718_081548_174516
importance: 3
confidence: 1
---
# Summary

An attempt to add a wood substrate reference entry to the uv-printing skill's SKILL.md references table was rejected by the skill management system. The system enforces a read-before-write constraint requiring the current content to be loaded via skill_view before any patch operation can succeed in the same turn.

## Facts
- Attempted to patch skill 'uv-printing' SKILL.md references table
- New row added: references/wood.md covering wood/maple/hardwood substrates (sealing before UV print, shellac cut #2 = 2-lb, dewaxed-under-epoxy, product picks)
- Patch rejected with _read_before_write_required: true
- System requires skill_view(name) or skill_view(name, file_path=...) before any patch write in the same review turn

## Concepts
- UV printing substrate references
- Read-before-write constraint
- Skill management system
- Wood substrate preparation for UV printing

## Files
- `references/wood.md`
- `references/ceramic.md`
- `references/eufymake-e1-specs.md`

_Importance: 3 · Confidence: 1_
