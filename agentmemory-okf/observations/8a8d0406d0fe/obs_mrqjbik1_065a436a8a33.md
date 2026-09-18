---
type: discovery
title: Inspected Manifold transform and mesh conversion APIs
description: Python manifold3d API behavior for affine transforms and normal handling
resource: agentmemory://observation/obs_mrqjbik1_065a436a8a33
tags: ["manifold3d", "affine transformation", "lazy transforms", "mesh conversion", "normal vectors", "CalculateNormals", "discovery"]
timestamp: 2026-07-18T15:41:43.726947+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 4
confidence: 1
---
# Summary

The manifold3d runtime documentation was queried successfully. It confirms lazy affine transformation semantics and clarifies how to_mesh preserves properties and manages transformed normals, including the preferred modern normals workflow.

## Facts
- Manifold.transform(m: Double3x4) returns a Manifold and accepts a 3x4 affine matrix whose first three columns are the linear transform and whose last column is translation.
- Transforms can be chained; they are combined and applied lazily.
- Manifold.to_mesh(normal_idx: int = -1) returns a Mesh with interleaved vertex properties, input-mesh relations, and applied transforms.
- to_mesh can update three consecutive normal-property channels for transforms and front/back orientation; normal_idx + 3 must not exceed numProp, and all source meshes must use identical normal channels.
- The preferred API is no-argument to_mesh after CalculateNormals(0); explicit non-negative normal_idx is legacy and will be removed in a future release.
- When normals are selected, runTransform matrices are removed from the output to prevent double application during round-tripping.

## Concepts
- manifold3d
- affine transformation
- lazy transforms
- mesh conversion
- normal vectors
- CalculateNormals

_Importance: 4 · Confidence: 1_
