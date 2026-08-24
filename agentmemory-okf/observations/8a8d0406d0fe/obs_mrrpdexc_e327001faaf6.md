---
type: CommandRun
title: Analyze STL vertices near axis at various Z-heights
description: Python script to inspect 3D geometry of sharpening wheel model
resource: agentmemory://observation/obs_mrrpdexc_e327001faaf6
tags: ["STL binary file parsing", "3D geometry analysis", "vertex extraction from triangles", "CAD model inspection", "axis proximity detection", "commandrun"]
timestamp: 2026-07-19T11:18:56.205005+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 4
confidence: 1
---
# Summary

Ran Python script to analyze sharpening_wheel_v2.stl geometry, checking for vertices near the central axis at key Z-heights. Found that only Z=0.00 has on-axis vertices, while other critical heights (hub top at Z=7, free end at Z=-16.66) have no near-axis geometry, suggesting the hub/disc structure may be hollow or offset from the axis at those levels.

## Facts
- STL file contains 71,448 total vertices
- Script reads binary STL format, extracting 3 vertices per triangle
- Checked Z-heights: 7.0, 5.0, 0.0, -8.0, -16.66
- Only Z=0.00 had near-axis vertices (radius < 14mm), all at radius 0.00
- Z=7.0, 5.0, -8.0, -16.66 had no near-axis vertices
- Analysis targets: green hub top end (Z=7), free end (Z=-16.66)

## Concepts
- STL binary file parsing
- 3D geometry analysis
- vertex extraction from triangles
- CAD model inspection
- axis proximity detection

## Files
- `sharpening_wheel_v2.stl`

_Importance: 4 · Confidence: 1_
