---
type: Error
title: Skill patch rejected: read-before-write required
description: Attempt to add wood.md reference to uv-printing skill failed due to missing prior read
resource: agentmemory://observation/obs_mrqeeevx_d278df6ea63a
tags: ["skill management", "read-before-write enforcement", "UV printing substrate references", "error"]
timestamp: 2026-07-18T13:24:00.859395+00:00
source: agentmemory
session_id: 20260718_081548_174516
importance: 4
confidence: 1
---
# Summary

An attempt to update the 'uv-printing' skill's SKILL.md file by adding a reference to `references/wood.md` was rejected by the system. The tool enforces a strict read-before-write policy, requiring the current file content to be loaded via `skill_view` before any patches can be applied.

## Facts
- Tool: skill_manage, action: patch, skill: uv-printing
- Attempted to insert table row for references/wood.md (maple, hardwood, seal before UV print, dewaxed vs waxed shellac, epoxy fish-eye, colored shellac tint)
- Operation failed with _read_before_write_required: true
- System mandates calling skill_view(name) to load SKILL.md content before applying patches

## Concepts
- skill management
- read-before-write enforcement
- UV printing substrate references

## Files
- `references/wood.md`
- `references/ceramic.md`
- `references/eufymake-e1-specs.md`

_Importance: 4 · Confidence: 1_
