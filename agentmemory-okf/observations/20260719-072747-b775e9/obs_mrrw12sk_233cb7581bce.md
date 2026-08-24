---
type: FileRead
title: CEF Minidump Forensics & macOS Crash Debugging
description: Shell commands and case study for analyzing CEF/Chromium GPU crashes on macOS
resource: agentmemory://observation/obs_mrrw12sk_233cb7581bce
tags: ["CEF crash debugging", "macOS minidump forensics", "Chromium GPU crash analysis", "Apple Metal compatibility", "SwiftShader workarounds", "Sentry crashpad", "fileread"]
timestamp: 2026-07-19T14:25:17.919987+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 6
confidence: 1
---
# Summary

The agent accessed a reference guide for CEF and Chromium minidump forensics on macOS. The document provides shell commands to locate crash dumps and analyze GPU/graphics backend failures, alongside a case study of Chromium 122 failing on macOS 27's Metal stack. It also documents CLI workarounds for disabling GPU/WebGL to prevent hard crashes and resolve stale lock issues.

## Facts
- Reference file: references/cef-minidump-forensics.md (skill: macos-app-crash-debug)
- Locates CEF crash artifacts: Sentry/crashpad .dmp files, debug.log, Apple DiagnosticReports
- Uses strings and grep to extract crash signatures, GL backends (Metal vs SwiftShader), and argv from minidumps
- Case study: EufyMake Studio (CEF/Chromium 122) crashes on macOS 27 (Tahoe) due to Metal GPU incompatibility
- Workarounds: --disable-gpu --use-gl=swiftshader (launch only), --disable-gpu --disable-webgl --disable-3d-apis (fail soft)
- Notes --use-angle=swiftshader still routes through Metal on macOS, failing to avoid Metal crashes
- Stale CEF/UserData/SingletonLock symlink can cause relaunch crashes after kill -9

## Concepts
- CEF crash debugging
- macOS minidump forensics
- Chromium GPU crash analysis
- Apple Metal compatibility
- SwiftShader workarounds
- Sentry crashpad

## Files
- `references/cef-minidump-forensics.md`

_Importance: 6 · Confidence: 1_
