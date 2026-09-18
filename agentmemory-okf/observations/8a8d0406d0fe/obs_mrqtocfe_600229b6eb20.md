---
type: Observation
title: Skill view: parametric-3d STL generation workflow
description: Reference document for generating parametric 3D models from measurements, photos, or descriptions
resource: agentmemory://observation/obs_mrqtocfe_600229b6eb20
tags: ["OpenSCAD parametric modeling", "manifold3d CSG operations", "trimesh mesh boolean", "STL file generation", "Constructive Solid Geometry", "3D printing workflow", "Image-based 3D reconstruction", "observation"]
timestamp: 2026-07-18T20:31:38.464435+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 5
confidence: 1
---
# Summary

The agent viewed the parametric-3d skill to understand the recommended workflow for generating STL files. The skill establishes OpenSCAD as the primary parametric modeling tool with Python/manifold3d as a fallback for complex geometry, and documents critical API differences and common pitfalls for both stacks.

## Facts
- Skill name: parametric-3d, tags: 3d-printing, stl, openscad, manifold3d, trimesh, parametric, csg
- Primary tool: OpenSCAD installed at /opt/homebrew/bin/openscad
- Fallback: Python + manifold3d + trimesh (pip3 install manifold3d trimesh)
- manifold3d API: use circular_segments (not rev_segments), cylinder signature includes radius_low/radius_high, transform matrix is 3x4 not 4x4
- Boolean operators in manifold3d: + (union), - (difference), ^ (intersection)
- trimesh default Blender boolean requires watertight meshes; switch to manifold3d on "Not all meshes are volumes!" error
- Image analysis: resize with sips -Z 1024 to avoid 413 errors; analyze top/bottom/side views separately
- OpenSCAD: $fn=128 for smooth circles, use difference() { union() { ... } subtract } pattern
- OpenSCAD CLI export: openscad -o output.stl model.scad

## Concepts
- OpenSCAD parametric modeling
- manifold3d CSG operations
- trimesh mesh boolean
- STL file generation
- Constructive Solid Geometry
- 3D printing workflow
- Image-based 3D reconstruction

## Files
- `/opt/homebrew/bin/openscad`

_Importance: 5 · Confidence: 1_
