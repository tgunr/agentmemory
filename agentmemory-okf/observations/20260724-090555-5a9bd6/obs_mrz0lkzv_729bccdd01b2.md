---
type: file_edit
title: TiltPal App failed to compile due to unsupported CMMotionManager
description: Compilation error in iOS sources caused by macOS platform compatibility issue.
resource: agentmemory://observation/obs_mrz0lkzv_729bccdd01b2
tags: ["CMMotionManager", "COREMOTION_EXPORT", "'CMMotionManager' has been explicitly marked unavailable here", "file_edit"]
timestamp: 2026-07-24T14:07:36.296627+00:00
source: agentmemory
session_id: 20260724_090555_5a9bd6
importance: 5
confidence: 0.9
---
# Summary

The TiltPal App failed to compile due to an error in the CMMotionManager class, which is unavailable on macOS. This issue affects the App's ability to function correctly.

## Facts
- User ran swift build command with custom build path
- Build output failed with a nonzero exit code

## Concepts
- CMMotionManager
- COREMOTION_EXPORT
- 'CMMotionManager' has been explicitly marked unavailable here

## Files
- `/Volumes/davec/Work/tiltpal/ios/Sources/TiltPalApp/MotionManager.swift`
- `/Volumes/davec/Work/tiltpal/ios/Sources/TiltPalApp/ContentView.swift`

_Importance: 5 · Confidence: 0.9_
