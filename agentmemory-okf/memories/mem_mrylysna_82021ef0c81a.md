---
type: architecture
title: Project renamed from AutoLevel to TiltPal. Folder moved from /Users/davec/work/a
description: Project renamed from AutoLevel to TiltPal. Folder moved from /Users/davec/work/autolevel-ios/ to /Users/davec/work/tiltpal/. Architecture preserved: SwiftUI + CoreMotion iOS app for sensing surface ti
resource: agentmemory://memory/mem_mrylysna_82021ef0c81a
tags: ["TiltPal", "AutoLevel", "rename", "SwiftUI", "CoreMotion", "standoff", "thread pitch", "3-point"]
timestamp: 2026-07-24T07:17:58.532Z
source: agentmemory
strength: 7
---
# Content

Project renamed from AutoLevel to TiltPal. Folder moved from /Users/davec/work/autolevel-ios/ to /Users/davec/work/tiltpal/. Architecture preserved: SwiftUI + CoreMotion iOS app for sensing surface tilt via device accelerometer/gyroscope and calculating 3D-printed threaded standoff adjustment turns. Core specs: 3mm thread pitch, 25.4mm (1 inch) base standoff length, supports 3-point and 4-point standoff configurations. Turn calculation formula: turns = height_delta_mm / 3.0. Out-of-scope for rename: actual Xcode/SwiftUI project scaffolding and CoreMotion integration code.

## Files
- `/Users/davec/work/tiltpal/`
