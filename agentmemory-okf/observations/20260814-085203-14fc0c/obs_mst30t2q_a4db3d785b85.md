---
type: file_edit
title: Explicating snap_to_edge behavior
description: Noise in top wall of gridfinity tab
resource: agentmemory://observation/obs_mst30t2q_a4db3d785b85
tags: ["file_edit"]
timestamp: 2026-08-14T15:08:31.149262+00:00
source: agentmemory
session_id: 20260814_085203_14fc0c
importance: 7
confidence: 0.75
---
# Summary

A bug was reported when porting the compartment_cutter into the extended fork's basic_cavity, leading to issues with tab styles and a ledge on the back wall. The fix involves removing snap_to_edge and placing the tab as explicit primitive geometry at a computed position.

## Facts
- Scoop: bottom-front, VERIFIED at Z 0.8..8.3, Y 13.5..21 for inner_depth=42, cavityHeight=30.

## Files
- `references/gridfinity-tab-explicit.md`

_Importance: 7 · Confidence: 0.75_
