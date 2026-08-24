---
type: FileRead
title: Checking .venv and venv for turboquant_mlx import issues
description: No stray venv found, but import fails
resource: agentmemory://observation/obs_msuqjyk5_4fa1292dc85b
tags: ["turboquant_mlx", "venv", "module not found error", "fileread"]
timestamp: 2026-08-15T18:55:02.062521+00:00
source: agentmemory
session_id: 20260815_120838_c6e364
importance: 6
confidence: 0.9
---
# Summary

The operation successfully ran in cwd. However, the command had issues due to non-existent files and modules, which will be addressed with a dependency update to venv.

## Facts
- Stray venv at home does not contain turboquant_mlx.
- TurboQuant MLX import fails due to non-existent file.
      Path: /Users/davec/.venv/bin/python
      Code error:
          <code>ModuleNotFoundError: No module named 'turboquant_mlx'\n    import turboquant_mlx</code>

## Concepts
- turboquant_mlx
- venv
- module not found error

## Files
- `/Users/davec/.venv`

_Importance: 6 · Confidence: 0.9_
