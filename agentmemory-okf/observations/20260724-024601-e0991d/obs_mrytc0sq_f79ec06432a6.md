---
type: Observation
title: File 'references/device-install-xcodeproj.md' written to skill 'swift-ios-build'
description: Xcodegen generates a signed `.app` for device install via `xcrun devicectl`.
resource: agentmemory://observation/obs_mrytc0sq_f79ec06432a6
tags: ["observation"]
timestamp: 2026-07-24T10:44:12.932054+00:00
source: agentmemory
session_id: 20260724_024601_e0991d
importance: 8
confidence: 0.75
---
# Summary

Xcodegen resolves issues with device install and app signing for TiltPalApp in SwiftPM.

## Facts
- TildePalApp `@main App` builds into a bare Mach-O without embedded .mobileprovision, requiring xcodegen
- xcodegen generates a signed `.app` with an Apple Development ID using the local keychain

## Files
- `/Users/davec/.hermes/skills/software-development/swift-ios-build/references/device-install-xcodeproj.md`

_Importance: 8 · Confidence: 0.75_
