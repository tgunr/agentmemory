---
type: file_write
title: Explicit tab + scoop re-implementation (replaces opaque `snap_to_edge`)
description: Porting the reference `kennetek/gridfinity-rebuilt-openscad` compartment_cutter into the extended fork
resource: agentmemory://observation/obs_mst1c8cz_476232793afc
tags: ["file_write"]
timestamp: 2026-08-14T14:21:24.940501+00:00
source: agentmemory
session_id: 20260814_085203_14fc0c
importance: 8
confidence: 0.85
---
# Summary

In this post_tool_call event, the skill_manage tool wrote a file to 'references/gridfinity-tab-explicit.md' in the openscad-cad skill. The update replaces the opaque `snap_to_edge` with an explicit tab and scoop re-implementation, addressing bugs reported by the user.

## Facts
- cavity floor at `z=floorht`, top at `z=floorht+cavityHeight`, centered at origin, front wall = **+Y** (`default_fingerslide_walls=[1,0,0,0]`, index 0 = front)
- Scoop: bottom-front, `VERIFIED` at `Z 0.8..8.3, Y 13.5..21 for `inner_depth=42, cavityHeight=30
- Front wall is at `Y = +inner_depth/2`

## Files
- `/Users/davec/.hermes/skills/software-development/openscad-cad/references/gridfinity-tab-explicit.md`

_Importance: 8 · Confidence: 0.85_
