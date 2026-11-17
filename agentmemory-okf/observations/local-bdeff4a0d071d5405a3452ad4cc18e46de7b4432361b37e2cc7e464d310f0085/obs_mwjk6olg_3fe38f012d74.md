---
type: FileRead
title: 3D Printing — print recovery, part fit & slicer tuning
description: Tool usage for print recovery, fit clearance, and slicer tuning
resource: agentmemory://observation/obs_mwjk6olg_3fe38f012d74
tags: ["fileread"]
timestamp: 2026-11-16T17:50:06.294648+00:00
source: agentmemory
session_id: local-bdeff4a0d071d5405a3452ad4cc18e46de7b4432361b37e2cc7e464d310f0085
importance: 7
confidence: 0.75
---
# Summary

The user successfully used the PrusaSlicer tool for G-code recovery, fit clearance, and slicer tuning.

## Facts
- PrusaSlicer emits TWO different layer-marker formats, and a naive detector that works on one will corrupt the other
- PrusaSlicer provides a script to automate G-code recovery for resume Z values

## Files
- `~/hermes-knowledge/scripts/gcode_resume.py`
- `references/gcode-resume.md`

_Importance: 7 · Confidence: 0.75_
