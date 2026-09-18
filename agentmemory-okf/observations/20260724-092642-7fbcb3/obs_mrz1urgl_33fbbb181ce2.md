---
type: file_edit
title: Error in LevelViewModel.swift
description: Building TiltPalApp with xcodebuild failed
resource: agentmemory://observation/obs_mrz1urgl_33fbbb181ce2
tags: ["Swift ambiguity", "Xcodebuild", "file_edit"]
timestamp: 2026-07-24T14:42:44.222071+00:00
source: agentmemory
session_id: 20260724_092642_7fbcb3
importance: 6
confidence: 0.9
---
# Summary

The build process for TiltPalApp encountered an error in LevelViewModel.swift, which prevents the application from compiling. This issue affects stability and must be addressed.

## Facts
- Command ran: xcrun simctl list devices | grep -m1 Booted | sed -E 's/.*\\(([0-9A-F-]+)\\) \\(Booted\\).*/\\1/' && xcodebuild -scheme TiltPalApp -destination "platform=iOS Simulator,id=$BOOTED" -configuration Debug build 2>&1 | grep -A6 -iE "error:|LevelViewModel.swift"
- Output: /Volumes/davec/Work/tiltpal/ios/Sources/TiltPalApp/LevelViewModel.swift:109:17: error: 'Layout' is ambiguous for type lookup in this context

## Concepts
- Swift ambiguity
- Xcodebuild

_Importance: 6 · Confidence: 0.9_
