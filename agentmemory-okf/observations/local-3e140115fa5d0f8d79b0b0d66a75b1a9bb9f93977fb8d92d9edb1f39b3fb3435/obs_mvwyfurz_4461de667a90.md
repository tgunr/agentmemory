---
type: file_edit
title: package.json
description: $PATH
resource: agentmemory://observation/obs_mvwyfurz_4461de667a90
tags: ["npm task", "build and deployment", "electron", "file_edit"]
timestamp: 2026-10-31T22:10:26.827915+00:00
source: agentmemory
session_id: local-3e140115fa5d0f8d79b0b0d66a75b1a9bb9f93977fb8d92d9edb1f39b3fb3435
importance: 6
confidence: 0.9
---
# Summary

Command executed to execute Code. It shows the output of running npm run build and npm run builder. This is done to clean cache and execute the build process.

## Facts
- Running command `tsc --build tsconfig.electron.json && wait-on http://127.0.0.1:5174 && node scripts/bundle-electron-main.mjs --dev && cross-env XCURSOR_SIZE=24 HERMES_DESKTOP_DEV_SERVER=http://127.0.0.1:5174 electron .`
- Running command `npm run build && npm run builder -- --dir --publish never`

## Concepts
- npm task
- build and deployment
- electron

## Files
- `package.json`

_Importance: 6 · Confidence: 0.9_
