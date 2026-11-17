---
type: file_edit
title: Clinical recovery tools — Gcode surgery (Prusa-Slicer)
description: Automate model recovery after print failure
resource: agentmemory://observation/obs_mwje4ehj_777c2a83d8b2
tags: ["G-code surgery", "file_edit"]
timestamp: 2026-11-16T15:00:22.227801+00:00
source: agentmemory
session_id: local-bdeff4a0d071d5405a3452ad4cc18e46de7b4432361b37e2cc7e464d310f0085
importance: 9
confidence: 0.9
---
# Summary

The hook provides a script to fix a broken print by reslicing and re-printing the remaining layers. This is useful when a print fails part way up, and the user wants to restore the print.

## Facts
- The user wants to resume a failed 3D print at a Z height offset.
- The user gives a resume Z and expects the G-code cut accordingly.

## Concepts
- G-code surgery

## Files
- `/ scripts /gcode_resume.py`

_Importance: 9 · Confidence: 0.9_
