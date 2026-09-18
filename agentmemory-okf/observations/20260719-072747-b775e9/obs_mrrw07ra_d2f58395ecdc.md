---
type: Observation
title: Viewed macos-app-crash-debug skill
description: Guide for diagnosing CEF/Chromium macOS app crashes and minidumps
resource: agentmemory://observation/obs_mrrw07ra_d2f58395ecdc
tags: ["macOS crash debugging", "CEF (Chromium Embedded Framework)", "crashpad minidumps", "Metal GPU crashes", "ANGLE/WebGL", "observation"]
timestamp: 2026-07-19T14:24:37.695686+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 5
confidence: 1
---
# Summary

The agent retrieved the macos-app-crash-debug skill to prepare for diagnosing macOS GUI application crashes, specifically targeting Chromium-Embedded-Framework apps. The skill outlines a methodology for distinguishing between native and Chromium helper-process crashes, and details techniques for analyzing minidumps to identify GPU/Metal-related failures.

## Facts
- Skill covers CEF apps, crashpad/Sentry minidumps, Apple DiagnosticReports, and ANGLE/WebGL pitfalls
- CEF apps use crashpad/Sentry (.dmp) for helper crashes, while Apple DiagnosticReports (.ips) indicate native main-process crashes
- Minidump forensics can be performed using `strings` to extract crash signatures like AGXMetal or GPUWrangler
- Launching app from terminal helps identify stale singleton-lock or LaunchServices environment issues

## Concepts
- macOS crash debugging
- CEF (Chromium Embedded Framework)
- crashpad minidumps
- Metal GPU crashes
- ANGLE/WebGL

_Importance: 5 · Confidence: 1_
