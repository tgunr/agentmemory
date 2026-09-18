---
type: Error
title: Trimesh boolean difference fails - non-volume mesh
description: Sharpening wheel build script crashes on hole subtraction
resource: agentmemory://observation/obs_mrqj9sga_ded4370bee48
tags: ["trimesh boolean operations", "watertight mesh requirement", "Blender boolean backend", "CAD/CSG hole subtraction", "Python 3.13 pyenv", "error"]
timestamp: 2026-07-18T15:40:23.240815+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 7
confidence: 1
---
# Summary

The sharpening wheel generation script successfully builds the base disc plus hub but crashes when subtracting the center hole. The trimesh `difference()` operation delegates to the Blender backend, which validates that every input mesh is a closed volume; the tapered hole geometry is apparently not watertight (likely missing end caps or inconsistent normals on the cone frustum), causing the boolean to abort before the slots are processed.

## Facts
- Script: /Users/davec/sharpening_wheel.py
- Error at line 187, build_wheel() at line 125: `wheel = wheel.difference(hole)`
- Exception: `ValueError: Not all meshes are volumes!` raised in trimesh/interfaces/blender.py:85
- Base disc + hub combination step succeeded (✓)
- Failed operation: subtracting the center hole from the wheel
- Wheel dimensions: Disc 150.0mm OD × 4.83mm thick, Hub 56.0mm OD × 3.52mm below disc, total height 8.35mm
- Center hole is a tapered/conical bore: 19.0mm top → 12.0mm bottom, 8.35mm deep
- 24 slots cut: 2.6mm wide at radius 40.0–66.0mm
- Trimesh boolean via Blender interface requires all input meshes to be closed volumes (watertight)
- Python 3.13.2 via pyenv on macOS (/Users/davec/.pyenv/versions/3.13.2)

## Concepts
- trimesh boolean operations
- watertight mesh requirement
- Blender boolean backend
- CAD/CSG hole subtraction
- Python 3.13 pyenv

## Files
- `/Users/davec/sharpening_wheel.py`

_Importance: 7 · Confidence: 1_
