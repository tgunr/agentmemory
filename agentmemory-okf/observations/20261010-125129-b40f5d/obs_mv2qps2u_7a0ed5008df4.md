---
type: file_edit
title: Inspect release/mac-arm64/Hermes.app/Contents/Resources/app.asar
description: Verify workspace-cwd, profile-switcher, toggleProjects exist after asset extraction and replacement
resource: agentmemory://observation/obs_mv2qps2u_7a0ed5008df4
tags: ["React hooks", "file_edit"]
timestamp: 2026-10-10T18:41:07.684024+00:00
source: agentmemory
session_id: 20261010_125129_b40f5d
importance: 7
confidence: 0.9
---
# Summary

The agent executed a command in the terminal to inspect the Hermes application's resource directory, verifying the existence of specific assets and file system information.

## Facts
- a.listPackage and a.extractFile methods extract specific assets
- fs.readFileSync and fs.statSync provide file system information

## Concepts
- React hooks

## Files
- `release/mac-arm64/Hermes.app/Contents/Resources/app.asar.unpacked`

_Importance: 7 · Confidence: 0.9_
