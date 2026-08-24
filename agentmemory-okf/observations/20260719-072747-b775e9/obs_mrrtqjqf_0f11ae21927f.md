---
type: file_write
title: Write CEF minidump forensics reference to skill
description: Documenting crash analysis commands and macOS 27 Metal crash case study
resource: agentmemory://observation/obs_mrrtqjqf_0f11ae21927f
tags: ["CEF crash forensics", "Chromium minidump analysis", "macOS crash debugging", "Apple Metal GPU crashes", "SwiftShader and ANGLE workarounds", "Sentry crashpad", "file_write"]
timestamp: 2026-07-19T13:21:07.425957+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 6
confidence: 1
---
# Summary

A comprehensive reference guide for CEF/Chromium minidump forensics was added to the macos-app-crash-debug skill. It provides actionable bash commands for locating and analyzing crash dumps, alongside a detailed case study of a Metal-related GPU crash on macOS 27 beta, including effective workarounds and limitations.

## Facts
- File written to skill 'macos-app-crash-debug' via skill_manage tool
- Full path: /Users/davec/.hermes/profiles/cc/skills/software-development/macos-app-crash-debug/references/cef-minidump-forensics.md
- Includes bash commands to locate Sentry/Crashpad minidumps and CEF debug logs on macOS
- Provides strings/grep commands to extract crash signatures, GL backends, and argv from .dmp files
- Case study covers EufyMake Studio (CEF 122) crashing on macOS 27 (Tahoe) due to Apple Metal GPU incompatibility
- Documents workarounds: --disable-gpu --use-gl=swiftshader (partial) and --disable-webgl (fail soft)
- Notes that --use-angle=swiftshader on macOS still routes through Metal and fails to avoid the crash

## Concepts
- CEF crash forensics
- Chromium minidump analysis
- macOS crash debugging
- Apple Metal GPU crashes
- SwiftShader and ANGLE workarounds
- Sentry crashpad

## Files
- `/Users/davec/.hermes/profiles/cc/skills/software-development/macos-app-crash-debug/references/cef-minidump-forensics.md`

_Importance: 6 · Confidence: 1_
