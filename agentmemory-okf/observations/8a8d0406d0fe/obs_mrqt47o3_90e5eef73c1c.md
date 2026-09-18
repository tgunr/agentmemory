---
type: file_edit
title: Wrap structural ribs in difference() to cut with cylinder
description: OpenSCAD CSG modification for sharpening wheel hub intersection
resource: agentmemory://observation/obs_mrqt47o3_90e5eef73c1c
tags: ["OpenSCAD", "CSG operations", "difference()", "3D parametric modeling", "file_edit"]
timestamp: 2026-07-18T20:15:59.183541+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 5
confidence: 1
---
# Summary

The structural ribs in the OpenSCAD sharpening wheel model were wrapped in a `difference()` CSG operation. A cylinder matching the hub flange diameter is subtracted to cut the inner portion of the ribs, ensuring they do not intersect with the central hub geometry.

## Facts
- Modified `/Volumes/projects/3D/SharpWheel/sharpening_wheel.scad`
- Wrapped the 6 structural ribs generation loop in a `difference()` block
- Subtracted a cylinder with diameter `hub_flangeD` and height `total_height` to cut the ribs
- Uses variables: `hub_flangeD`, `hub_thickness`, `disc_thickness`, `total_height`

## Concepts
- OpenSCAD
- CSG operations
- difference()
- 3D parametric modeling

## Files
- `/Volumes/projects/3D/SharpWheel/sharpening_wheel.scad`

_Importance: 5 · Confidence: 1_
