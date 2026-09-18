---
type: discovery
title: Loaded parametric 3D modeling workflow
description: Guidance for generating and validating printable STL models
resource: agentmemory://observation/obs_mrrph715_1376f6163ceb
tags: ["parametric 3D modeling", "OpenSCAD", "constructive solid geometry", "manifold3d", "trimesh", "STL export validation", "3D printing", "discovery"]
timestamp: 2026-07-19T11:21:52.587218+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 4
confidence: 1
---
# Summary

The parametric-3d skill was loaded for creating STL files from measurements, photographs, or descriptions. It establishes OpenSCAD as the primary editable workflow while documenting manifold3d and image-analysis pitfalls that affect reliable model generation.

## Facts
- OpenSCAD is the preferred parametric CSG tool and is installed at /opt/homebrew/bin/openscad; Python with manifold3d and trimesh is the fallback.
- The workflow gathers dimensions, defines editable parameters, builds geometry with CSG, exports STL, and verifies manifold status and mesh complexity.
- OpenSCAD models should generally use variables at the top, $fn = 128, and difference/union composition.
- manifold3d cylinders use circular_segments rather than rev_segments, transforms require 3x4 matrices, and boolean operators are +, -, and ^.
- Large reference images should be resized with sips -Z 1024 before separate top, bottom, and side analysis.
- trimesh boolean volume or watertightness failures should be handled by switching to manifold3d.

## Concepts
- parametric 3D modeling
- OpenSCAD
- constructive solid geometry
- manifold3d
- trimesh
- STL export validation
- 3D printing

_Importance: 4 · Confidence: 1_
