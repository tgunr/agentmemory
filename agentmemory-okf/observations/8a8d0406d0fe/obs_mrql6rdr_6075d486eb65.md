---
type: FileRead
title: Read OpenSCAD slotted sharpening wheel model
description: Parametric 3D model for WorkSharp-style sharpening wheel with tapered center hole
resource: agentmemory://observation/obs_mrql6rdr_6075d486eb65
tags: ["OpenSCAD", "CSG modeling (difference/union)", "Parametric 3D design", "Sharpening wheel geometry", "Tapered bore", "fileread"]
timestamp: 2026-07-18T16:34:01.115885+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 4
confidence: 1
---
# Summary

Read a complete OpenSCAD parametric model for a slotted sharpening wheel. The model defines a disc with a tapered center bore, a lower hub section, radial ventilation slots, and structural ribs on the bottom recess. All dimensions are parameterized at the top for easy modification.

## Facts
- File: /Volumes/projects/3D/SharpWheel/sharpening_wheel.scad (77 lines, 2800 bytes)
- Disc: 150mm OD, 4.83mm thick, mounted on hub at z=18mm
- Tapered center hole: 19mm top dia, 12mm bottom dia, 8.35mm deep
- Hub: 56mm OD, 25.17mm ID bore, 3.2mm bore depth from bottom
- 24 radial slots: 2.6mm wide, from r=40mm to r=66mm, offset by half-slot-width
- Bottom has 60mm diameter recess with 6 structural ribs (2.42mm wide, 21mm long, 7mm high)
- Uses OpenSCAD CSG: difference() with union() of disc, hub, and ribs; subtracts hole, bore, recess, and slots
- Resolution set to $fn=128

## Concepts
- OpenSCAD
- CSG modeling (difference/union)
- Parametric 3D design
- Sharpening wheel geometry
- Tapered bore

## Files
- `/Volumes/projects/3D/SharpWheel/sharpening_wheel.scad`

_Importance: 4 · Confidence: 1_
