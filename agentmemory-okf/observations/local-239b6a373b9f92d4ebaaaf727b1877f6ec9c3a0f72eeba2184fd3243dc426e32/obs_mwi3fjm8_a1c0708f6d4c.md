---
type: file_edit
title: Build, ship, and debug the Hermes Desktop app.
description: Ship a renderer fix (no electron-builder)
resource: agentmemory://observation/obs_mwi3fjm8_a1c0708f6d4c
tags: ["electron-builder", "electron-asar", "file_edit"]
timestamp: 2026-11-15T17:13:20.125792+00:00
source: agentmemory
session_id: local-239b6a373b9f92d4ebaaaf727b1877f6ec9c3a0f72eeba2184fd3243dc426e32
importance: 8
confidence: 0.9
---
# Summary

To ship a renderer fix without electron-builder, the process involves manually rebuilding and repackaging the 'app.asar' file using npm run build command and the asar command line tools, verifying the unpacked chunk names, and codesigning the application.

## Facts
- NPM run build rebuilds and repackages everything in the dist/ output directory
- Use npx --yes @electron/asar extract and pack to rebuild the bundle and repack app.asar

## Concepts
- electron-builder
- electron-asar

## Files
- `/Applications/Hermes.app/Contents/Resources/app.asar`

_Importance: 8 · Confidence: 0.9_
