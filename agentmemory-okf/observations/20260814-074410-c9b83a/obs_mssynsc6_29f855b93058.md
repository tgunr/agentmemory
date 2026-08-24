---
type: file_write
title: OpenSCAD GUI crashes when rendering cup module with disabled textmetrics or missing baseTextOffset argument
description: The GUI renders as only the lip, but headless `-o` reports a full cup body.
resource: agentmemory://observation/obs_mssynsc6_29f855b93058
tags: ["file_write"]
timestamp: 2026-08-14T13:06:25.197448+00:00
source: agentmemory
session_id: 20260814_074410_c9b83a
importance: 8
confidence: 0.75
---
# Summary

The OpenSCAD GUI crashes when displaying cup modules with disabled `textmetrics` or missing `baseTextOffset`, but headless mode reports a full geometry. The issue requires fixing both the module and its caller to correctly render the cup body.

## Facts
- Experimental built-in `textmetrics` returns `undef` and poisons the text when disabled in OpenSCAD ≥ 2026.x, causing the GPU render to abort.
- A missing `baseTextOffset` argument in `gridfinity_sliding_lid.scad` index out of bounds access (`iCupBaseTextOffset = 7`), leading to `text_x_offset`/`text_y_offset` being `undef`, which aborts the cup rendering.

## Files
- `/Users/davec/.hermes/skills/software-development/openscad-cad/references/openscad-textmetrics-cup-abort.md`

_Importance: 8 · Confidence: 0.75_
