---
type: file_edit
title: Patching SKILL.md in 'swift-ios-build' skill
description: Edit of original recipe with caveats mentioned.
resource: agentmemory://observation/obs_mrytb586_962cdc21ad58
tags: ["SwiftPM package structure updates", "file_edit"]
timestamp: 2026-07-24T10:43:32.014782+00:00
source: agentmemory
session_id: 20260724_024601_e0991d
importance: 8
confidence: 0.9
---
# Summary

Updated the SKILL.md file in 'swift-ios-build' to reflect recent changes in SwiftPM package structure, particularly with referencing device-install-recipe.md. This edit aims to ensure users are aware of potential issues with free dev provisioning profiles.

## Facts
- New string contains updated reference and a reminder to rebuild if free provisioning is no longer available.

## Concepts
- SwiftPM package structure updates

## Files
- `/template/project.yml`
- `/templates/ios-xcodeproj.yml`
- `/project/Sources/TiltPalApp/Info.plist`
- `/DDEV/Build/Products/TiltPalApp.app`

_Importance: 8 · Confidence: 0.9_
