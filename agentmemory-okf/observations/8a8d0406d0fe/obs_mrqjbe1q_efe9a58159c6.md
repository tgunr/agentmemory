---
type: CommandRun
title: Query manifold3d API for cylinder, cube, and translate methods
description: Gathering method signatures and parameters for 3D geometry construction
resource: agentmemory://observation/obs_mrqjbe1q_efe9a58159c6
tags: ["manifold3d", "3D geometry primitives", "CSG operations", "Python API documentation", "commandrun"]
timestamp: 2026-07-18T15:41:37.883283+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 4
confidence: 1
---
# Summary

The user queried the Python API documentation for the `manifold3d` library to understand the method signatures and parameters for creating cylinders and cubes, as well as translating manifolds in 3D space. This information is likely being gathered to construct 3D geometry programmatically using Constructive Solid Geometry (CSG) operations.

## Facts
- Manifold.cylinder signature: cylinder(height: float, radius_low: float, radius_high: float = -1.0, circular_segments: int = 0, center: bool = False)
- Manifold.cube signature: cube(size: Doublex3 = (1.0, 1.0, 1.0), center: bool = False)
- Manifold.translate signature: translate(self, t: Doublex3) -> manifold3d.Manifold
- cylinder can form cones if both radii are specified; center defaults to False (origin at bottom)
- cube defaults to first octant touching origin; center defaults to False
- translate moves the manifold in space, can be chained, and transforms are applied lazily

## Concepts
- manifold3d
- 3D geometry primitives
- CSG operations
- Python API documentation

_Importance: 4 · Confidence: 1_
