---
type: FileRead
title: OpenSCAD slotted sharpening wheel model
description: WorkSharp-style sharpening wheel with 24 slots and structural ribs
resource: agentmemory://observation/obs_mrrofka0_a9f8d5b075c4
tags: ["OpenSCAD", "3D modeling", "CSG operations", "parametric design", "radial slots", "fileread"]
timestamp: 2026-07-19T10:52:36.838695+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 3
confidence: 1
---
# Summary

Read an OpenSCAD 3D model file for a slotted sharpening wheel. The file defines parametric dimensions for a disc with 24 radial slots, a tapered center bore, a hub with counterbore, and 6 structural ribs on the bottom. This appears to be a replica or replacement part modeled after a WorkSharp-style sharpening system.

## Facts
- OpenSCAD file defining a slotted sharpening wheel with disc_od=150mm, disc_thickness=4.83mm
- Tapered center hole: hole_top_dia=19mm, hole_bot_dia=12mm
- Hub with hub_od=58mm, hub_flangeD=25.17mm
- 24 radial slots (n_slots=24) with slot_width=2.6mm, inner_r=40mm, outer_r=66mm
- 6 structural ribs on bottom with rib_width=2.42mm, rib_height=14mm
- Resolution set to $fn=128
- Uses CSG difference() operations for slots, holes, and recesses

## Concepts
- OpenSCAD
- 3D modeling
- CSG operations
- parametric design
- radial slots

## Files
- `/Volumes/projects/3D/SharpWheel/sharpening_wheel.scad`

_Importance: 3 · Confidence: 1_
