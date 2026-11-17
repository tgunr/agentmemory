---
type: file_edit
title: PrusaSlicer patching failed to apply settings
description: Re-importing the `.3mf` silently restores the file's own embedded print settings.
resource: agentmemory://observation/obs_mwjjr3nc_1af113789e85
tags: ["aio-internal-utility-apis", "file_edit"]
timestamp: 2026-11-16T17:37:59.349296+00:00
source: agentmemory
session_id: local-bdeff4a0d071d5405a3452ad4cc18e46de7b4432361b37e2cc7e464d310f0085
importance: 8
confidence: 0.9
---
# Summary

PrusaSlicer's patching mechanism failed to consistently apply its settings for 3D printing. A re-import of the `.3mf` file restored the file's own embedded print settings, suggesting that the patching process was not reliable.

## Facts
- Reward and penalty systems for PrusaSlicer settings
- 3d-printing settings not applying consistently

## Concepts
- aio-internal-utility-apis

## Files
- `script/measure_fit.py`

_Importance: 8 · Confidence: 0.9_
