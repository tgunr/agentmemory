---
type: FileRead
title: Determine PETCG clearance for Prusa XL fit
description: Resuming a failed 3D print at a Z height offset
resource: agentmemory://observation/obs_mwje5oy1_ae59777723d4
tags: ["3d-printing", "PETG-CF", "Prusa XL", "fileread"]
timestamp: 2026-11-16T15:01:22.435118+00:00
source: agentmemory
session_id: local-f18672663361734871de45a3d3ef30f713b35884c291e7b2829f612e1ca25bd5
importance: 6
confidence: 0.9
---
# Summary

The assistant used the `skill_view` tool to determine the PETCG clearance for a Prusa XL fit, with a recommendation to expand/contract the fit by 0.20 mm per side.

## Facts
- Resuming a failed 3D print: a 10-minute resume time is considered reasonable.
- PETG-CF on an XL with a 0.4 mm nozzle is where the usual 0.1–0.15 mm "printer tolerance" advice fails.

## Concepts
- 3d-printing
- PETG-CF
- Prusa XL

## Files
- `/home/hermes-knowledge/scripts/gcode_resume.py`

_Importance: 6 · Confidence: 0.9_
