---
type: file_edit
title: Electron app deployment
description: Extracting electron application using asar extractor
resource: agentmemory://observation/obs_mvatuv9x_b3ec2078a001
tags: ["electron app deployment", "file_edit"]
timestamp: 2026-10-16T10:31:13.361640+00:00
source: agentmemory
session_id: 20261016_052544_912a20
importance: 4
confidence: 0.9
---
# Summary

Deployed Electron app from /Applications/Kilo.app by executing the asar extractor command and verifying extracted app files.

## Facts
- Command executed: npx --yes @electron/asar extract /Applications/Kilo.app/Contents/Resources/app.asar app

## Concepts
- electron app deployment

## Files
- `/private/tmp/kilox`
- `/Applications/Kilo.app/Contents/Resources/app.asar`
- `/private/tmp/kilox/app`

_Importance: 4 · Confidence: 0.9_
