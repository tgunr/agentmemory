---
type: Fact
title: TiltPal autolevel turn-calculation engine IMPLEMENTED (previously out-of-scope).
description: TiltPal autolevel turn-calculation engine IMPLEMENTED (previously out-of-scope). SwiftPM package at /Users/davec/work/tiltpal (Swift 6.4). Build with `swift build --build-path /tmp/tiltpal_build` — bu
resource: agentmemory://memory/mem_mrynrl1f_7ce8d9eadf91
tags: ["TiltPal", "AutoLevel", "autolevel", "LevelingSolver", "turn calculation", "standoff", "thread pitch", "3-point"]
timestamp: 2026-07-24T08:08:21.307Z
source: agentmemory
strength: 7
---
# Content

TiltPal autolevel turn-calculation engine IMPLEMENTED (previously out-of-scope). SwiftPM package at /Users/davec/work/tiltpal (Swift 6.4). Build with `swift build --build-path /tmp/tiltpal_build` — building on /Volumes/... hits a rename-on-mounted-volume error, so use a local build path. Verified: 4 unit tests pass (testFourPointTopRight, testPitchOnlyLeftRightSplit, testThreePointSumsToZero, testHandednessFlip).

SOLVER (LevelingSolver.solve(layout:tilt:spec:)): rigid surface tilt = single plane with two slope DOFs about centre: z(x,y)=tan(tiltX)*x+tan(tiltY)*y. To level, change each standoff length by delta(x,y) = -z(x,y). Turns = delta / threadPitch (3.0 mm). Sign maps to rotation via StandoffSpec.clockwiseRaises (default true). Height delta + = raise that corner.

KEY DECISION — LEG LENGTHS ARE REQUIRED: turns = leverArm_mm * tan(theta) / 3.0. The turn COUNT cannot be derived from the tilt angle alone; the standoff's distance from centre (set by 3/4-point geometry, or user-entered positions) is mandatory. The app MUST capture geometry: 3-point side length, or 4-point width x length, or let the user enter measured leg positions. This answers the open question in the spec.

3- vs 4-point: identical math (a plane has only 2 DOF); 4-point adds mechanical stability only. Default UI guide = 4-point.

WORKED EXAMPLE — 4-point 200x200 mm, top-right 0.1 deg high: top-right & bottom-left are the tilting pair at (±100,±100). Top-Right must LOWER 0.0823 turns (29.6 deg) -> counter-clockwise; Bottom-Left RAISE 0.0823 turns -> clockwise; the other two corners are unaffected. The app phrasing: 'Turn Upper-Right 0.08 turns counter-clockwise (≈30 deg).'

Standoff: 25.4 mm base, 3 mm pitch (per spec). Repo layout: TiltPalCore (solver + geometry), tiltpal-cli (demo), TiltPalCoreTests.

## Files
- `/Users/davec/work/tiltpal/Sources/TiltPalCore/LevelingSolver.swift`
