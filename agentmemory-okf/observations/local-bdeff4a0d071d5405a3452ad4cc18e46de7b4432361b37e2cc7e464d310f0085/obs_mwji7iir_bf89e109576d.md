---
type: file_edit
title: PrusaSlicer - Project Loading issue
description: No such file or directory: Physical Printer Configurations
resource: agentmemory://observation/obs_mwji7iir_bf89e109576d
tags: ["3MF file loading issue", "file_edit"]
timestamp: 2026-11-16T16:54:45.886671+00:00
source: agentmemory
session_id: local-bdeff4a0d071d5405a3452ad4cc18e46de7b4432361b37e2cc7e464d310f0085
importance: 6
confidence: 0.9
---
# Summary

PrusaSlicer failed to load with error, but returned without error. The issue seems to be with loading a 3MF file.

## Facts
- Command:mkdir -p /tmp/ps-test && /Applications/PrusaSlicer-3.0.0-alpha14.app/Contents/MacOS/PrusaSlicer --info --datadir \"/Users/davec/Library/Application Support/PrusaSlicer3-dev\" \"/Users/davec/Downloads/spiral-christmas-tree-fidget-toy-and-ornament-model_files/christmas-tree-spiral-fidget-3mf-mw.3mf\" 2>&1 | tail -35
- Output: Failed to load Physical Printer Configurations

## Concepts
- 3MF file loading issue

## Files
- `/Users/davec/Downloads/spiral-christmas-tree-fidget-toy-and-ornament-model_files/christmas-tree-spiral-fidget-3mf-mw.3mf`
- `/Users/davec/Library/Application Support/PrusaSlicer3-dev/presets/local/prusa-research-fff/PrusaResearch/assets/xl_bed.stl`

_Importance: 6 · Confidence: 0.9_
