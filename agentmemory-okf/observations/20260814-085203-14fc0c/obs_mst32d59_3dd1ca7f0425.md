---
type: file_write
title: Explicit Tab + Scoop Re-Implementation
description: A fix for tab styles and ledge issues
resource: agentmemory://observation/obs_mst32d59_3dd1ca7f0425
tags: ["Tab designs", "file_write"]
timestamp: 2026-08-14T15:09:43.816080+00:00
source: agentmemory
session_id: 20260814_085203_14fc0c
importance: 8
confidence: 0.9
---
# Summary

The code fixes tab styles not following their descriptions by making an explicit carve instead of using snap_to_edge. It also resolves a ledge on the back wall issue by placing the tab as front wall primitives.

## Facts
- Extended basic_cavity has a floor at z=floorht, top at z=floorht+cavityHeight, centered at origin, front wall = +Y.
- The +Y wall is tessellated only in certain Z bands, with vertices existing at Z[0,10] and Z[20,26].

## Concepts
- Tab designs

## Files
- `/Users/davec/.hermes/skills/software-development/openscad-cad/references/gridfinity-tab-explicit.md`

_Importance: 8 · Confidence: 0.9_
