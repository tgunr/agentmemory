---
type: CommandRun
title: Ship renderer fix using asar repack
description: Load when investigating desktop UI bugs or building the renderer
resource: agentmemory://observation/obs_mvx1vhc4_1c397049cc28
tags: ["asar repack", "electron-builder", "electron/asar", "commandrun"]
timestamp: 2026-10-31T23:46:34.750043+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 8
confidence: 0.9
---
# Summary

The tool skill_view was used to ship a renderer fix using the asar repack script. This was done without running the electron-builder command. The script rebuilds and repackages the app, but only updates the asar bundle, which requires user approval.

## Facts
- Renderer fix shipped using asar repack
- Command run without electron-builder

## Concepts
- asar repack
- electron-builder
- electron/asar

## Files
- `/Applications/Hermes.app/Contents/Resources/app.asar`

_Importance: 8 · Confidence: 0.9_
