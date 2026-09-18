---
type: CommandRun
title: Check OpenSCAD installation location on macOS
description: System binary lookup to verify OpenSCAD is installed
resource: agentmemory://observation/obs_mrqjdkxo_208fb355e45e
tags: ["OpenSCAD", "macOS system tools", "Homebrew package manager", "commandrun"]
timestamp: 2026-07-18T15:43:20.121860+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 2
confidence: 1
---
# Summary

A system check was performed to locate OpenSCAD installation path. The binary was found installed via Homebrew at /opt/homebrew/bin/openscad, confirming the CAD software is available for parametric design operations.

## Facts
- Command: which openscad 2>&1 || mdfind -name "OpenSCAD" -onlyin /Applications
- OpenSCAD found at /opt/homebrew/bin/openscad
- Exit code: 0 (success)

## Concepts
- OpenSCAD
- macOS system tools
- Homebrew package manager

## Files
- `/opt/homebrew/bin/openscad`

_Importance: 2 · Confidence: 1_
