---
type: architecture
title: AutoLevel iOS App Project Definition

Purpose: iOS application that detects surf
description: AutoLevel iOS App Project Definition

Purpose: iOS application that detects surface tilt using onboard accelerometer/gyroscope sensors and calculates precise adjustment turns for 3D-printed threaded s
resource: agentmemory://memory/mem_mrylqisg_b6378c8dd341
timestamp: 2026-07-24T07:11:32.509Z
source: agentmemory
strength: 7
---
# Content

AutoLevel iOS App Project Definition

Purpose: iOS application that detects surface tilt using onboard accelerometer/gyroscope sensors and calculates precise adjustment turns for 3D-printed threaded standoffs to level a surface.

Hardware specs:
- Standoff length: 25.4 mm (1 inch)
- Thread pitch: 3 mm per full turn
- Configurations: 3-standoff (triangular, easy manual) or 4-standoff (rectangular, stable)

Core logic:
- Measure tilt in X and Y axes (degrees)
- Map tilt to height delta at each standoff position based on geometry
- Compute turns = height_delta / 3.0 mm, round to practical increment (e.g., 1/4 turn)
- Display per-corner instructions (e.g., "Turn upper-right 0.35 turns clockwise")

Example: 0.1° tilt at top-right -> compute arc height at standoff radius -> convert to turns.

Project location: ~/work/autolevel-ios/
Tech stack target: SwiftUI + CoreMotion (CMMotionManager)


## Files
- `/Users/davec/work/autolevel-ios`
