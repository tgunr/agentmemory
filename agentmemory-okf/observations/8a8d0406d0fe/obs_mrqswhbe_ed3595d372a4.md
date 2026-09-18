---
type: Observation
title: View parametric-3d skill documentation
description: Workflows for generating STL files using OpenSCAD and Python CSG
resource: agentmemory://observation/obs_mrqswhbe_ed3595d372a4
tags: ["OpenSCAD", "manifold3d", "trimesh", "CSG", "3D printing", "Parametric modeling", "STL export", "observation"]
timestamp: 2026-07-18T20:09:57.531608+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 5
confidence: 1
---
# Summary

The agent retrieved the "parametric-3d" skill documentation, which outlines workflows for generating parametric 3D models and STL files. It details using OpenSCAD as the primary tool and Python's manifold3d/trimesh as fallbacks, including specific API gotchas and image analysis tips.

## Facts
- Skill "parametric-3d" outlines workflows for generating STL files from measurements, photos, or descriptions.
- Primary tool is OpenSCAD located at /opt/homebrew/bin/openscad, using $fn = 128 for circle resolution.
- Fallback tools are Python libraries manifold3d and trimesh for complex geometry.
- manifold3d cylinder requires circular_segments parameter and uses a 3x4 transform matrix.
- Large images for vision analysis should be resized using sips -Z 1024 to avoid 413 errors.

## Concepts
- OpenSCAD
- manifold3d
- trimesh
- CSG
- 3D printing
- Parametric modeling
- STL export

## Files
- `/opt/homebrew/bin/openscad`

_Importance: 5 · Confidence: 1_
