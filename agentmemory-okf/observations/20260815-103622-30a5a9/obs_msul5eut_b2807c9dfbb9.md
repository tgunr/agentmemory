---
type: file_edit
title: openscad command with re substitution fails due to non-existent STL file
description: No such directory error when trying to open _a_lid.stl
resource: agentmemory://observation/obs_msul5eut_b2807c9dfbb9
tags: ["openscad commands", "python scripting with re substitution", "file_edit"]
timestamp: 2026-08-15T16:23:45.258007+00:00
source: agentmemory
session_id: 20260815_103622_30a5a9
importance: 7
confidence: 0.9
---
# Summary

The task of generating STL files with openscad encountered an error when trying to open a non-existent file path. The output suggests a FileNotFoundError when attempting to read _a_lid.stl.

## Facts
- python3 was used in the terminal using the 'PY' shortcut
- jupyter is not included in this session's config, so a jupyter server is not available

## Concepts
- openscad commands
- python scripting with re substitution

## Files
- `/Users/davec/gridfinity_sliding_lid.scad`
- `/Users/davec/gridfinity_probes/_a_lid.stl`
- `/Users/davec/gridfinity_probes/_b_both.stl`

_Importance: 7 · Confidence: 0.9_
