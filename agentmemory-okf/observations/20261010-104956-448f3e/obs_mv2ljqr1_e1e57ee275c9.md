---
type: file_edit
title: Fix for core modules import issue
description: Python 3.11-3.13 eager forward references fix
resource: agentmemory://observation/obs_mv2ljqr1_e1e57ee275c9
tags: ["Python versioning", "file_edit"]
timestamp: 2026-10-10T16:16:27.943120+00:00
source: agentmemory
session_id: 20261010_104956_448f3e
importance: 8
confidence: 0.9
---
# Summary

Fixed eager forward references in core modules for compatibility with Python 3.11-3.13

## Facts
- Re-quotes 79 annotations that name unbound variables when evaluated
- Affected 36 files, including

## Concepts
- Python versioning

## Files
- `tui_gateway/server.py`

_Importance: 8 · Confidence: 0.9_
