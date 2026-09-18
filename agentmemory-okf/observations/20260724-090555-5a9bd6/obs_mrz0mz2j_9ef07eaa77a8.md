---
type: file_edit
title: Error compiling TiltPalApp.swift
description: No 'CMMotionManager' in macOS simulator
resource: agentmemory://observation/obs_mrz0mz2j_9ef07eaa77a8
tags: ["ios simulator on MacOS", "file_edit"]
timestamp: 2026-07-24T14:08:41.208909+00:00
source: agentmemory
session_id: 20260724_090555_5a9bd6
importance: 8
confidence: 1
---
# Summary

The current code attempts to use CMMotionManager in an iOS simulator on macOS, which results in an error.
The issue is that CMMotionManager was explicitly marked as unavailable in iOS 4.0 and above for the sake of testing, but it's still available in macOS,
so a different approach needs to be taken.

## Facts
- SDK=$(xcrun --sdk iphonesimulator --show-sdk-path)
- error: 'CMMotionManager' is unavailable in macOS
- CMMotionManager has been explicitly marked unavailable in iOS 4.0 and above, but not in macOS

## Concepts
- ios simulator on MacOS

## Files
- `/Volumes/davec/Work/tiltpal/ios/Sources/TiltPalApp/MotionManager.swift`

_Importance: 8 · Confidence: 1_
