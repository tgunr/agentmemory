---
type: file_write
title: Write OpenSCAD verification & GUI conflict resolution guide
description: Created reference doc for parametric-3d skill on echo-based Z-axis verification and file lock workarounds
resource: agentmemory://observation/obs_mrrpiby2_c1a17342c1e9
tags: ["OpenSCAD echo debugging", "3D model Z-axis verification", "GUI file locking workarounds", "STL parsing pitfalls", "Parametric 3D modeling", "file_write"]
timestamp: 2026-07-19T11:22:45.621079+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 5
confidence: 1
---
# Summary

The agent created a reference document for the parametric-3d skill detailing deterministic methods to verify 3D model hole placements and resolve OpenSCAD GUI file locking issues. It establishes echo() as the source of truth for Z-axis coordinates to avoid vision/STL parsing errors, and outlines a write-to-temp-then-copy strategy to bypass GUI file contention.

## Facts
- File written to parametric-3d skill at /Users/davec/.hermes/profiles/shop/skills/creative/parametric-3d/references/verify_orientation.md
- Recommends using OpenSCAD echo() to print exact Z extents for bore placement instead of vision_analyze on PNGs, which suffers from Z-fighting
- Warns against parsing binary STLs to measure Z due to vertex stride misalignment causing NaN values
- Provides workaround for OpenSCAD GUI file locks: write to a new filename, render/verify, cp to canonical name, and prompt user to reload the tab

## Concepts
- OpenSCAD echo debugging
- 3D model Z-axis verification
- GUI file locking workarounds
- STL parsing pitfalls
- Parametric 3D modeling

## Files
- `/Users/davec/.hermes/profiles/shop/skills/creative/parametric-3d/references/verify_orientation.md`

_Importance: 5 · Confidence: 1_
