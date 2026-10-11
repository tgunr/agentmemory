---
type: file_edit
title: Slicer Automation Patch
description: Edit 3MF settings from outside GUI and PrusaSlicer settings
resource: agentmemory://observation/obs_mv2rdb1r_01f24b8762b3
tags: ["PrusaSlicer settings", "3MF file format", "file_edit"]
timestamp: 2026-10-10T18:59:25.356803+00:00
source: agentmemory
session_id: 20261010_123854_7d7598
importance: 9
confidence: 0.9
---
# Summary

The script patched the 3MF file settings from outside the GUI and ensured PrusaSlicer writes settings to Metadata/PrusaSlicer3_project.json.

## Facts
- PrusaSlicer writes settings to Metadata/PrusaSlicer3_project.json
- Legacy slic3r_PE.config files can carry only the Metadata/Slic3r_PE.config block

## Concepts
- PrusaSlicer settings
- 3MF file format

## Files
- ``

_Importance: 9 · Confidence: 0.9_
