---
type: file_edit
title: PrusaSlicer export
description: Exporting G-code script
resource: agentmemory://observation/obs_mwjikmhd_dc080dd07fea
tags: ["PrusaSlicer", "file_edit"]
timestamp: 2026-11-16T17:04:57.550425+00:00
source: agentmemory
session_id: local-bdeff4a0d071d5405a3452ad4cc18e46de7b4432361b37e2cc7e464d310f0085
importance: 6
confidence: 1
---
# Summary

The tool used PrusaSlicer to export a G-code script and then displayed the result. The process was executed for 3 minutes, which was less than the maximum allowed time, due to foreground request exceeding the cap.

## Facts
- Background process started
- Session ID: proc_2132734c9b1c
- PID: 6644
- Original command: cd /tmp/ps-test && for v in 045 068 055_nogap; do echo \"=== $v\"; timeout 500 /Applications/PrusaSlicer-3.0.0-alpha14.app/Contents/MacOS/PrusaSlicer --datadir \"/Users/davec/Library/Application Support/PrusaSlicer3-dev\" --load cfg_$v.json --export-gcode --output /tmp/ps-test/out_$v.gcode \"/Users/davec/Downloads/spiral-christmas-tree-fidget-toy-and-ornament-model_files/christmas-tree-spiral-fidget-3mf-mw.3mf\" 2>&1 | tail -4; ls -l /tmp/ps-test/out_$v.gcode 2>/dev/null; done

## Concepts
- PrusaSlicer

## Files
- `/tmp/ps-test/out_045.gcode`
- `/tmp/ps-test/out_068.gcode`
- `/tmp/ps-test/out_055_nogap.gcode`

_Importance: 6 · Confidence: 1_
