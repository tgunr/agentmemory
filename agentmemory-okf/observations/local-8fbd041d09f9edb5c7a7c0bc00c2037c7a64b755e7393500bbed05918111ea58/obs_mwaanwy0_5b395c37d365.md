---
type: file_edit
title: hermes-desktop
description: Build, ship, and debug the Hermes Desktop app.
resource: agentmemory://observation/obs_mwaanwy0_5b395c37d365
tags: ["Electron app development", "React and Vite bundling", "file_edit"]
timestamp: 2026-11-10T06:13:38.565518+00:00
source: agentmemory
session_id: local-8fbd041d09f9edb5c7a7c0bc00c2037c7a64b755e7393500bbed05918111ea58
importance: 5
confidence: 0.9
---
# Summary

Rebuilding a renderer fix using `npm run dist:mac` and `npx --yes @electron/asar extract` and `pack`.

## Facts
- Renderer is React + Vite (bundled into `app.asar` → `dist/`).
- Source: `hermes-agent/apps/desktop`. Renderer is React + Vite (bundled into `app.asar` → `dist/`).

## Concepts
- Electron app development
- React and Vite bundling

## Files
- `hermes-desktop`

_Importance: 5 · Confidence: 0.9_
