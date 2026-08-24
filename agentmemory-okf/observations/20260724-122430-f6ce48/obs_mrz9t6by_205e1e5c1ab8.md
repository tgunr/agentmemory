---
type: file_write
title: xcodegen infoplist clobber bug fix on swift ios build
description: Main app build failed after xcodegen generate due to missing NSCameraUsageDescription key
resource: agentmemory://observation/obs_mrz9t6by_205e1e5c1ab8
tags: ["xcodegen template generation", "NSCameraUsageDescription", "file_write"]
timestamp: 2026-07-24T18:25:27.115085+00:00
source: agentmemory
session_id: 20260724_122430_f6ce48
importance: 7
confidence: 0.9
---
# Summary

Skill Manage detected a bug in the xcodegen template generation for Swift iOS builds. The camera-key trap was absent from the Info.plist file, causing the app to launch without a privacy key. After analyzing the issue and testing potential fixes, it was determined that pinning the plist via `settings.base` solves the problem.

## Facts
- The camera-key trap was **absent** from the built `TiltPalApp.app/Info.plist`.
- xcodegen rewrites custom keys when generating templates.

## Concepts
- xcodegen template generation
- NSCameraUsageDescription

## Files
- `/Users/davec/.hermes/skills/software-development/swift-ios-build/references/xcodegen-infoplist-clobber.md`

_Importance: 7 · Confidence: 0.9_
