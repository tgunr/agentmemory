---
type: file_write
title: Created macos-app-diagnostics skill for Chromium app crash triage
description: Structured diagnostic workflow for macOS GUI apps that crash on launch
resource: agentmemory://observation/obs_mrrsbgwu_093c33109f31
tags: ["macOS app crash diagnostics", "Chromium CEF Electron crash reporting", "Sentry crashpad minidumps", "Apple Metal GPU crashes", "SwiftShader software rendering", "LaunchServices vs terminal launch", "macOS beta compatibility", "file_write"]
timestamp: 2026-07-19T12:41:24.305318+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 7
confidence: 1
---
# Summary

A comprehensive diagnostic skill was created for troubleshooting macOS app launch crashes, specifically targeting Chromium-based applications on macOS betas. The skill codifies a 5-step workflow: locate the app, find real crash evidence in Sentry minidumps (not Apple reports), launch from terminal to isolate GUI vs logic crashes, read crash signatures from minidumps, and apply software-rendering workarounds. This addresses the non-obvious reality that bundled-Chromium apps have entirely different crash reporting paths than native macOS apps.

## Facts
- Skill created: macos-app-diagnostics in category 'apple'
- File written to: /Users/davec/.hermes/profiles/cc/skills/apple/macos-app-diagnostics/SKILL.md
- Key insight: CEF/Electron/Chromium apps bypass Apple's ~/Library/Logs/DiagnosticReports and store crashes in Sentry/crashpad minidumps under ~/.SentryDmp/
- Common beta-break pattern: AGXMetal/AppleMetalOpenGLRenderer/MetalKit/WebGPU crashes indicate GPU process dying on Apple's Metal stack
- Diagnostic signal: if app runs from terminal but crashes via GUI double-click, crash is in LaunchServices/GPU path not app logic
- Workaround: Force SwiftShader software rendering instead of Metal to bypass GPU crashes
- Support-dir names often differ from bundle IDs (e.g., com.anker.pceufyMake uses 'eufyMake Studio Profile' dir)

## Concepts
- macOS app crash diagnostics
- Chromium CEF Electron crash reporting
- Sentry crashpad minidumps
- Apple Metal GPU crashes
- SwiftShader software rendering
- LaunchServices vs terminal launch
- macOS beta compatibility

## Files
- `/Users/davec/.hermes/profiles/cc/skills/apple/macos-app-diagnostics/SKILL.md`

_Importance: 7 · Confidence: 1_
