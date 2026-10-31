---
type: CommandRun
title: Retrieve and print version information from Hermes.app
description: Verify build markers and asset integrity after PlistBuddy changes
resource: agentmemory://observation/obs_mvuhuf49_5d2fa4a8b1c6
tags: ["Build markers", "Asset integrity", "PlistBuddy data", "commandrun"]
timestamp: 2026-10-30T04:50:20.550150+00:00
source: agentmemory
session_id: 20261029_231630_f90a63
importance: 6
confidence: 1
---
# Summary

The tool successfully executes the command to retrieve version information from the Hermes.app, but the build markers and asset integrity checks indicate a potential incomplete installation. This affects the stability and functionality of the app.

## Facts
- A new version of the Hermes app was installed with version number 0.0.0.
- The build markers indicates a previous install with version number 0.0.0.
- The PlistBuddy data confirmed the CFBundleVersion as 0.0.0.
- The asset integrity check using npx indicates an incomplete installation.

## Concepts
- Build markers
- Asset integrity
- PlistBuddy data

## Files
- `/Applications/Hermes.app/Contents/Info.plist`
- `/usr/libexec/PlistBuddy`

_Importance: 6 · Confidence: 1_
