---
type: file_edit
title: PFA Scan Template Generation with Openscad
description: Created 3 STL files and printed Yrange values for each wall.
resource: agentmemory://observation/obs_mst12p1k_fc4b230e3f17
tags: ["Openscad", "Referencing frames", "file_edit"]
timestamp: 2026-08-14T14:14:00.001929+00:00
source: agentmemory
session_id: 20260814_085203_14fc0c
importance: 8
confidence: 1
---
# Summary

The code executed generated three 3D models representing walls in the printed parts, with Yrange values for each wall. The stdout output contains Yrange values for left, center, and right walls.

## Facts
- The code executed by the tool was a Python script.
- The script used OpenSCAD to generate 3D models from a reference frame placed at cavity top, without mirroring.
- The models were saved as STL files and printed with a tab on +Y wall at different positions.

## Concepts
- Openscad
- Referencing frames

## Files
- `/tmp/probe_ref.scad`
- `/tmp/prf_left.stl`
- `/tmp/prf_center.stl`
- `/tmp/prf_right.stl`

_Importance: 8 · Confidence: 1_
