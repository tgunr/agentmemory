---
type: CommandRun
title: Generated 3D sharpening wheel STL model
description: Python script successfully created and exported a 150mm sharpening wheel with 24 slots and tapered center hole
resource: agentmemory://observation/obs_mrqjd7a2_8ca71d5dce60
tags: ["3D modeling", "Python CAD scripting", "STL export", "Mesh generation", "Boolean operations", "commandrun"]
timestamp: 2026-07-18T15:43:02.422768+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 5
confidence: 1
---
# Summary

A Python script was executed to generate a 3D CAD model of a sharpening wheel. The script successfully calculated the geometry, applied boolean operations for the tapered center hole, slots, and ribs, and exported the final mesh as an STL file.

## Facts
- Command executed: cd /Users/davec && python3 sharpening_wheel.py
- Disc dimensions: 150.0mm OD, 4.83mm thick
- Hub dimensions: 56.0mm OD, 3.52mm height below disc
- Total height: 8.35mm
- Center hole: Tapered from 19.0mm top to 12.0mm bottom, 8.35mm deep
- Slots: 24 slots, 2.6mm wide, radius 40.0-66.0mm
- Additional features: 4 ribs added, hub inner bore cut
- Mesh stats: 1252 vertices, 2584 faces
- Output file: /Users/davec/sharpening_wheel.stl
- Bounding box: 150 x 150 x 8.35 mm

## Concepts
- 3D modeling
- Python CAD scripting
- STL export
- Mesh generation
- Boolean operations

## Files
- `/Users/davec/sharpening_wheel.py`
- `/Users/davec/sharpening_wheel.stl`

_Importance: 5 · Confidence: 1_
