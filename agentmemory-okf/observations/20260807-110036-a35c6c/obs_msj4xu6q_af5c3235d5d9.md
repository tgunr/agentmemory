---
type: FileRead
title: PyInstaller spec — CameraGrid standalone macOS app.
description: 
resource: agentmemory://observation/obs_msj4xu6q_af5c3235d5d9
tags: ["fileread"]
timestamp: 2026-08-07T16:04:30.093552+00:00
source: agentmemory
session_id: 20260807_110036_a35c6c
importance: 5
confidence: 0.75
---
# Summary

Read the PyInstaller specification for CameraGrid. The app bundles various libraries, including Tkinter and Pillow, into a single executable.

## Facts
- The .app lands in dist/CameraGrid.app next to where the spec is built.
- Build (from any location, with a venv that has Pillow + pyinstaller): pyinstaller --noconfirm scripts/CameraGrid.spec

## Files
- `/Users/davec/Desktop/Camera Grid/scripts/CameraGrid.spec`

_Importance: 5 · Confidence: 0.75_
