---
type: CommandRun
title: Explore test infrastructure in Hermes desktop app
description: Investigate package.json test scripts and test-desktop.mjs structure
resource: agentmemory://observation/obs_mrp2wda1_d71cd3d899bb
tags: ["Electron app testing", "thin installer architecture", "vitest testing framework", "commandrun"]
timestamp: 2026-07-17T15:14:17.013056+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

Discovered that the desktop app has separate test infrastructures: vitest for UI tests and a custom Node.js script for packaged app testing across platforms. The test-desktop.mjs script explicitly handles the thin-installer architecture where the Python payload is no longer bundled but fetched at first launch.

## Facts
- package.json contains 7 test-related scripts: test:desktop, test:desktop:all, test:desktop:dmg, test:desktop:nsis, test:desktop:existing, test:desktop:fresh, test:desktop:platforms, test:ui
- test-desktop.mjs is a Node.js script (not vitest) that handles platform-specific packaged app testing for mac, windows, and linux
- Script uses @electron/asar for listing packages and references Phase 1 thin-installer flow
- No vitest.config.* files found in the desktop directory
- test:ui uses vitest with jsdom environment

## Concepts
- Electron app testing
- thin installer architecture
- vitest testing framework

## Files
- `/tmp/hermes-profile-fix/apps/desktop/package.json`
- `/tmp/hermes-profile-fix/apps/desktop/scripts/test-desktop.mjs`

_Importance: 5 · Confidence: 1_
