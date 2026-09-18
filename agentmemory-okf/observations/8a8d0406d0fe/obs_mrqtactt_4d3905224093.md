---
type: FileRead
title: Read slotted sharpening wheel OpenSCAD model
description: Parameterized 150 mm WorkSharp-style wheel with hub, slots, ribs, and stepped bore
resource: agentmemory://observation/obs_mrqtactt_4d3905224093
tags: ["OpenSCAD parametric modeling", "constructive solid geometry", "radial slot pattern", "stepped center bore", "structural ribs", "fileread"]
timestamp: 2026-07-18T20:20:45.805984+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 3
confidence: 1
---
# Summary

The file contains a parameterized OpenSCAD sharpening-wheel assembly constructed with nested difference operations, cylinders, radial slot cuts, and extruded rib polygons. Its dimensions and derived Z positions control the disc, recessed underside, reinforced hub, and stepped shaft bore.

## Facts
- The disc is 150 mm in diameter, 4.83 mm thick, translated to Z=7 mm, with $fn=128.
- The model defines 24 radial slots from radius 40 to 66 mm, each 2.6 mm wide and evenly rotated with a half-step angular offset.
- The hub uses a 58 mm outer diameter, 25.17 mm flange diameter, 7 mm height, 6 mm gap, and 3.2 mm inner bore depth.
- Six polygon-profile structural ribs are defined with 2.42 mm width, 38/32 mm lengths, and 14 mm height, then trimmed around the hub flange.
- The center hole is stepped from 19 mm diameter at the top to 12 mm at the bottom, with top_holeZ=8.18 and bot_holeZ=18.35.
- The captured file output was truncated during the second center-hole subtraction beginning near line 94.

## Concepts
- OpenSCAD parametric modeling
- constructive solid geometry
- radial slot pattern
- stepped center bore
- structural ribs

## Files
- `/Volumes/projects/3D/SharpWheel/sharpening_wheel.scad`

_Importance: 3 · Confidence: 1_
