---
type: file_write
title: Misaligned geometry in gridfinity_extended_openscad rendering
description: Combining mode trap issue with invalid scoop placement
resource: agentmemory://observation/obs_msurqjep_9a03b6970331
tags: ["openscad combine mode trap", "file_write"]
timestamp: 2026-08-15T19:28:08.637398+00:00
source: agentmemory
session_id: 20260815_103622_30a5a9
importance: 7
confidence: 0.9
---
# Summary

Tool skill 'openscad-cad' encountered an error with combining mode. After reviewing the error message, corrected the issue by moving the `compartment_features(...)` function call outside of a difference() block, where it should be subtracted from the geometry instead of being rendered as solid.

## Facts
- Invalid scoop placement in difference() subtract set leads to incorrect geometry rendering.
- In the `gridfinity_extended_openscad` material, the scoop is placed outside of a `difference()` block instead of inside it, resulting in additional solid shapes being rendered.

## Concepts
- openscad combine mode trap

## Files
- `/Users/davec/.hermes/skills/software-development/openscad-cad/references/gridfinity-combine-mode-trap.md`

_Importance: 7 · Confidence: 0.9_
