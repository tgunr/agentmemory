---
type: file_edit
title: Xcode script to print camera key and bundle ID
description: Prints NSCameraUsageDescription for a Debug-iphonesimulator build.
resource: agentmemory://observation/obs_mrz9l7rz_082229baa6d2
tags: ["Xcode scripts and derived data directories", "file_edit"]
timestamp: 2026-07-24T18:19:15.737933+00:00
source: agentmemory
session_id: 20260724_122430_f6ce48
importance: 6
confidence: 0.9
---
# Summary

Automated an Xcode build using a shell script that printed NSCameraUsageDescription from a Debug-iphonesimulator build of TiltPalApp. This change matters because it affects how the app interacts with camera functionality.

## Facts
- The TiltPalApp.app path changed in the DerivedData directory.
- The App file exists in ~/Library/Developer/Xcode/DerivedData and was used to execute a script.

## Concepts
- Xcode scripts and derived data directories

_Importance: 6 · Confidence: 0.9_
