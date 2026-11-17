---
type: file_edit
title: 3D Printing — print recovery, part fit & slicer tuning
description: # 3D Printing — print recovery, part fit & slicer tuning
resource: agentmemory://observation/obs_mwjkv4wq_8c7fb26784f0
tags: ["gcode recovery", "PrusaSlicer", "layer marker formats", "file_edit"]
timestamp: 2026-11-16T18:09:07.222858+00:00
source: agentmemory
session_id: local-bdeff4a0d071d5405a3452ad4cc18e46de7b4432361b37e2cc7e464d310f0085
importance: 7
confidence: 0.9
---
# Summary

The user provides a resume Z (e.g. "restart at 0.87") and expects the G-code cut accordingly, with startup code stripped. This tool is used for gcode recovery, where a print failed partway up and the user wants to re-print only the remaining layers.

## Facts
- PrusaSlicer emits TWO different layer-marker formats, and a naive detector that works on one will corrupt the other:
- The user gives a resume Z (e.g. "restart at 0.87") and expects the G-code cut accordingly, with startup code stripped.

## Concepts
- gcode recovery
- PrusaSlicer
- layer marker formats

## Files
- `/home/hermes-knowledge/scripts/gcode_resume.py`

_Importance: 7 · Confidence: 0.9_
