---
type: FileRead
title: Read OpenSCAD sharpening wheel file (lines 81-90)
description: Hub flange geometry with subtracted holes
resource: agentmemory://observation/obs_mrqszkhu_b23bde25d8e8
tags: ["OpenSCAD", "CSG operations (difference)", "3D parametric modeling", "Hub/flange geometry", "fileread"]
timestamp: 2026-07-18T20:12:22.526967+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 2
confidence: 1
---
# Summary

Read lines 81-90 of an OpenSCAD file defining a sharpening wheel model. The code uses CSG difference() to create a hub flange cylinder with two stepped-diameter holes subtracted from it, positioned using hub and disc thickness offsets.

## Facts
- File: /Volumes/projects/3D/SharpWheel/sharpening_wheel.scad, 92 total lines, 3578 bytes
- Lines 81-90 define a difference() operation creating a green cylinder (hub_flangeD diameter) with two subtracted cylindrical holes (hole_bot_dia and hole_top_dia)
- Variables used: hub_thickness, disc_thickness, total_height, hub_flangeD, hole_bot_dia, hole_top_dia, top_holeZ
- File is truncated; remaining lines 91-92 can be read with offset=91

## Concepts
- OpenSCAD
- CSG operations (difference)
- 3D parametric modeling
- Hub/flange geometry

## Files
- `/Volumes/projects/3D/SharpWheel/sharpening_wheel.scad`

_Importance: 2 · Confidence: 1_
