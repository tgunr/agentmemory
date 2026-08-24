---
type: file_edit
title: macos-app-crash-debug
description: Diagnose and work around macOS GUI apps that crash on launch or on a specific action.
resource: agentmemory://observation/obs_mrv4v00z_a98ba30d847f
tags: ["Chromium-Embedded-Framework", "bundled-Chromium desktop apps", "CRAfter (GPU) process death on Metal stack", "Sentry/crashpad minidump forensics", "file_edit"]
timestamp: 2026-07-21T20:55:49.470336+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 5
confidence: 0.9
---
# Summary

Diagnose and work around macOS GUI apps that crash on launch or on a specific action. Covers Chromium-Embedded-Framework (CEF) apps, bundled-Chromium desktop apps, crashpad/Sentry minidumps, Apple DiagnosticReports, stale CEF singleton-lock crashes, and the ANGLE/WebGL-on-macOS pitfall.

## Facts
- Use whenever the user reports \"App X crashes on startup / when I click Y\", especially on macOS betas or after an OS update.

## Concepts
- Chromium-Embedded-Framework
- bundled-Chromium desktop apps
- CRAfter (GPU) process death on Metal stack
- Sentry/crashpad minidump forensics

## Files
- `/Applications/AppName.app/Contents/Frameworks/* Helper (GPU).app`

_Importance: 5 · Confidence: 0.9_
