---
type: FileRead
title: Viewed parametric-3d skill definition
description: Skill for generating STL files from measurements/photos using OpenSCAD or Python CSG
resource: agentmemory://observation/obs_mrqtb0z4_5e1759e4d8d3
tags: ["OpenSCAD parametric modeling", "manifold3d CSG operations", "trimesh mesh processing", "STL file generation", "3D printing workflow", "Constructive Solid Geometry (CSG)", "Image-based 3D reconstruction", "fileread"]
timestamp: 2026-07-18T20:21:17.099202+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 5
confidence: 1
---
# Summary

Retrieved the parametric-3d skill which documents a complete workflow for generating STL files from physical measurements, photos, or descriptions. The skill prioritizes OpenSCAD for parametric modeling with Python manifold3d as fallback for complex geometry. Includes critical API gotchas and troubleshooting patterns for common failures.

## Facts
- Skill name: parametric-3d
- Tags: 3d-printing, stl, openscad, manifold3d, trimesh, parametric, csg
- Primary tool: OpenSCAD installed at /opt/homebrew/bin/openscad
- Fallback: Python + manifold3d (pip3 install manifold3d trimesh)
- Workflow: Gather dimensions → Build parametric model → Export and verify
- manifold3d API: use circular_segments (not rev_segments), transform matrix is 3x4 (not 4x4)
- manifold3d cylinder signature: Manifold.cylinder(height, radius_low, radius_high=-1, circular_segments=0, center=False)
- Boolean operators in manifold3d: + (union), - (difference), ^ (intersection)
- trimesh default Blender boolean engine requires watertight meshes; switch to manifold3d if ValueError occurs
- Image analysis: resize large images with sips -Z 1024 to avoid 413 errors
- OpenSCAD: $fn=128 for smooth circles; use difference() { union() { ... } subtract... } pattern

## Concepts
- OpenSCAD parametric modeling
- manifold3d CSG operations
- trimesh mesh processing
- STL file generation
- 3D printing workflow
- Constructive Solid Geometry (CSG)
- Image-based 3D reconstruction

## Files
- `/opt/homebrew/bin/openscad`

_Importance: 5 · Confidence: 1_
