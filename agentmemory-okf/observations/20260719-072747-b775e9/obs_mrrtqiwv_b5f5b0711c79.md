---
type: file_write
title: Created macOS app crash debugging skill
description: CEF, crashpad minidumps, and ANGLE/Metal pitfalls
resource: agentmemory://observation/obs_mrrtqiwv_b5f5b0711c79
tags: ["macOS crash debugging", "Chromium Embedded Framework (CEF)", "Crashpad and Sentry minidumps", "ANGLE and Metal backend", "GPU process crashes", "file_write"]
timestamp: 2026-07-19T13:21:06.356672+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 6
confidence: 1
---
# Summary

A new skill was created to provide a structured methodology for diagnosing macOS GUI app crashes, particularly those involving Chromium-Embedded-Framework (CEF) applications. The skill details evidence-gathering steps, minidump forensics using `strings`, and common pitfalls like GPU process crashes on Apple's Metal stack during macOS beta updates.

## Facts
- Skill 'macos-app-crash-debug' created in category 'software-development'
- Skill file written to /Users/davec/.hermes/profiles/cc/skills/software-development/macos-app-crash-debug/SKILL.md
- Covers Chromium-Embedded-Framework (CEF) apps, crashpad/Sentry minidumps, and Apple DiagnosticReports
- Includes specific guidance for ANGLE/WebGL-on-macOS pitfall where swiftshader still routes through Metal/AGX stack

## Concepts
- macOS crash debugging
- Chromium Embedded Framework (CEF)
- Crashpad and Sentry minidumps
- ANGLE and Metal backend
- GPU process crashes

## Files
- `/Users/davec/.hermes/profiles/cc/skills/software-development/macos-app-crash-debug/SKILL.md`

_Importance: 6 · Confidence: 1_
