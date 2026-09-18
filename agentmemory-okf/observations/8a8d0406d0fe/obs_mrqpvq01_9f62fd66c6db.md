---
type: FileRead
title: OpenSCAD slotted sharpening wheel design file
description: WorkSharp-style 150mm sharpening wheel with tapered hole, hub, slots, and ribs
resource: agentmemory://observation/obs_mrqpvq01_9f62fd66c6db
tags: ["OpenSCAD parametric modeling", "3D printing design", "sharpening wheel geometry", "CSG operations (union, difference)", "linear_extrude and polygon primitives", "fileread"]
timestamp: 2026-07-18T18:45:24.191173+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 3
confidence: 1
---
# Summary

Read OpenSCAD file defining a WorkSharp-style slotted sharpening wheel. The design includes a 150mm disc with tapered center hole, central hub, 24 radial cooling slots, and 6 structural ribs on the bottom. Several key features are currently disabled with the * modifier, suggesting the design is in active development/debugging phase.

## Facts
- File: /Volumes/projects/3D/SharpWheel/sharpening_wheel.scad (92 lines, 3616 bytes)
- Disc: 150mm OD, 4.83mm thickness
- Tapered center hole: 19mm top dia, 12mm bottom dia, 8.35mm depth
- Hub: 58mm OD, 25.17mm ID bore, 3.2mm bore depth, 7mm height
- 24 radial slots: inner radius 40mm, outer radius 66mm, width 2.6mm
- 6 structural ribs on bottom: 2.42mm width, radiating from recess wall
- Bottom recess diameter: 52mm (hub_od - hub_gap)
- Resolution: $fn=128
- Multiple operations disabled with * modifier (main disc, tapered hole, hub bore, bottom recess, slots)

## Concepts
- OpenSCAD parametric modeling
- 3D printing design
- sharpening wheel geometry
- CSG operations (union, difference)
- linear_extrude and polygon primitives

## Files
- `/Volumes/projects/3D/SharpWheel/sharpening_wheel.scad`

_Importance: 3 · Confidence: 1_
