---
type: Observation
title: OpenSCAD geometry verification best practices stored to memory
description: Knowledge capture about 3D perspective analysis pitfalls
resource: agentmemory://observation/obs_mrrql5jv_2187f7f73ce2
tags: ["OpenSCAD", "3D geometry verification", "Z-fighting", "echo() debugging", "vision_analyze limitations", "observation"]
timestamp: 2026-07-19T11:52:56.918330+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 7
confidence: 1
---
# Summary

Critical lessons learned about OpenSCAD 3D geometry verification were captured to prevent future errors in interpreting perspective previews and handling ambiguous orientation instructions.

## Facts
- vision_analyze on 3D perspective previews is unreliable for Z-fighting detection
- Z-fighting at central holes/bores is misread as incorrect step or counterbore
- echo() statements with CLI output provide deterministic Z-coordinate verification
- Ambiguous 3D orientation instructions should prompt for reference photos early

## Concepts
- OpenSCAD
- 3D geometry verification
- Z-fighting
- echo() debugging
- vision_analyze limitations

_Importance: 7 · Confidence: 1_
