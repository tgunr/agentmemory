---
type: FileRead
title: Read sharpening wheel hub geometry
description: Inspected the final OpenSCAD difference operation for the hub and holes
resource: agentmemory://observation/obs_mrqtuhmj_dc4ff17ebd96
tags: ["OpenSCAD CSG difference", "parametric cylinder geometry", "Z-axis translation", "fileread"]
timestamp: 2026-07-18T20:36:25.141376+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 3
confidence: 1
---
# Summary

The end of the OpenSCAD model constructs a hub flange and subtracts top and bottom cylindrical holes from it. The shared Z translation aligns these features below the main hub geometry.

## Facts
- Lines 87-96 define a difference() using a green cylinder with height total_height and diameter hub_flangeD.
- Two translated cylinders subtract holes: one with height top_holeZ and diameter hole_top_dia, and another with height total_height and diameter hole_bot_dia.
- All difference geometry is translated along Z by -(hub_thickness + disc_thickness * 2).
- The file contains 98 lines and is 3793 bytes.

## Concepts
- OpenSCAD CSG difference
- parametric cylinder geometry
- Z-axis translation

## Files
- `/Volumes/projects/3D/SharpWheel/sharpening_wheel.scad`

_Importance: 3 · Confidence: 1_
