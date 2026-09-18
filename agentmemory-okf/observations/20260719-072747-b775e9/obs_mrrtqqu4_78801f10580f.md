---
type: Observation
title: macOS App Crash Debugging Skill (CEF/Chromium)
description: Guide for diagnosing CEF/bundled-Chromium app crashes and GPU/Metal failures
resource: agentmemory://observation/obs_mrrtqqu4_78801f10580f
tags: ["macOS crash debugging", "Chromium-Embedded-Framework (CEF)", "crashpad minidumps", "Sentry crash reporting", "Apple Metal GPU stack", "minidump forensics", "observation"]
timestamp: 2026-07-19T13:21:16.628047+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 6
confidence: 1
---
# Summary

The agent loaded the macos-app-crash-debug skill to troubleshoot a crashing macOS GUI application. The skill provides a structured methodology for diagnosing Chromium-Embedded-Framework (CEF) apps, emphasizing the extraction and analysis of crashpad/Sentry minidumps and identifying GPU/Metal stack failures.

## Facts
- Skill name: macos-app-crash-debug
- CEF apps use main + helper processes (GPU, Renderer, Utility); GPU process crashes on Apple Metal stack cause app failure
- CEF apps use crashpad/Sentry minidumps (.dmp) instead of Apple DiagnosticReports (.ips)
- Minidump forensics can be performed via the `strings` command to extract crash signatures (EXC_, SIGSEGV, AGXMetal, etc.)
- GUI vs terminal launch discrepancies often indicate stale singleton locks or LaunchServices environment differences

## Concepts
- macOS crash debugging
- Chromium-Embedded-Framework (CEF)
- crashpad minidumps
- Sentry crash reporting
- Apple Metal GPU stack
- minidump forensics

## Files
- `~/Library/Application Support/AppName Profile/.SentryDmp/completed/`
- `~/Library/Logs/DiagnosticReports/`

_Importance: 6 · Confidence: 1_
