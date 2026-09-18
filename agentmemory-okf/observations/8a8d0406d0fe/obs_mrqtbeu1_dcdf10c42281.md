---
type: file_edit
title: Updated parametric-3d skill with OpenSCAD multi-depth and boundary rules
description: Added concrete examples for multi-depth holes and trimming features to prevent manifold errors
resource: agentmemory://observation/obs_mrqtbeu1_dcdf10c42281
tags: ["OpenSCAD", "Constructive Solid Geometry", "3D parametric modeling", "Manifold geometry", "AI skill documentation", "file_edit"]
timestamp: 2026-07-18T20:21:35.061314+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 5
confidence: 1
---
# Summary

The agent updated the parametric-3d skill documentation to include explicit OpenSCAD patterns for complex subtractive features. It added code examples for multi-depth holes and using difference() to trim intersecting features, aiming to prevent manifold errors and visual artifacts in 3D models.

## Facts
- Patched SKILL.md in the parametric-3d skill to expand OpenSCAD modeling guidelines
- Added code example for multi-depth hole patterns using separate cylinder() calls inside a difference() block
- Added Cutting Features at Solid Boundaries section to explain trimming intersecting ribs and bosses
- Documented that overlapping geometry in OpenSCAD can cause manifold errors or visual artifacts

## Concepts
- OpenSCAD
- Constructive Solid Geometry
- 3D parametric modeling
- Manifold geometry
- AI skill documentation

## Files
- `parametric-3d/SKILL.md`

_Importance: 5 · Confidence: 1_
