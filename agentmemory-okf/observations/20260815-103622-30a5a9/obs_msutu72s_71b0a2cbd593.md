---
type: file_edit
title: Fix for rectangular cube issue on front wall
description: - OpenSCAD version 2026.06.12 used
resource: agentmemory://observation/obs_msutu72s_71b0a2cbd593
tags: ["file_edit"]
timestamp: 2026-08-15T20:26:58.509200+00:00
source: agentmemory
session_id: 20260815_103622_30a5a9
importance: 7
confidence: 0.75
---
# Summary

During the mid-session model switch, it was discovered that the separator fix did not correct the visible symptom. An actual state summary revealed a bug in the `compartment_features()` call inside the `union()` of `basic_cavity`. The fix direction involves moving this call to be one of its children within the `difference()` that removes material from the cavity.

## Facts
- The fix was verified by running `struct.unpack('<I', open(stl,'rb').read()[80:84])[0]` to count triangles for scoop geometry.

## Files
- `/home/projects/GridFinity/notes/HANDOFF_gridfinity_sliding_lid.md`
- `/Volumes/projects/GridFinity/gridfinity-rebuilt-bins.scad`

_Importance: 7 · Confidence: 0.75_
