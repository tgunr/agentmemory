---
type: Observation
title: To enable scoop editing, resolve the native path and act over ssh/rsync to pve
description: Scoop edit fixes
resource: agentmemory://observation/obs_msujcpm9_734fec51a28c
tags: ["Mac Samba access", "Gridfinity OpenSCAD repos", "SSH backend configuration", "observation"]
timestamp: 2026-08-15T15:33:26.568644+00:00
source: agentmemory
session_id: 20260815_102816_504ab3
importance: 8
confidence: 0.65
---
# Summary

Scoop edit fixes

## Facts
- The Hermes SSH backend runs on `mini.local` and is TCC-blocked from writing any `/Volumes/*` Samba mount
- OpenSCAD is NOT installed on pve. Builds are run on the **Mac** at `/opt/homebrew/bin/openscad` (build **2026.06.12**)

## Concepts
- Mac Samba access
- Gridfinity OpenSCAD repos
- SSH backend configuration

## Files
- `/private/tmp/HANDOFF_gridfinity_sliding_lid.md`

_Importance: 8 · Confidence: 0.65_
