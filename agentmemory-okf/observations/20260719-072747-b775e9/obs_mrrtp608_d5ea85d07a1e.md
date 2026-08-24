---
type: Error
title: Skill creation failed: missing 'name' field in frontmatter
description: Attempted to create macOS CEF crash debugging skill but frontmatter validation rejected it
resource: agentmemory://observation/obs_mrrtp608_d5ea85d07a1e
tags: ["skill_manage tool", "frontmatter validation", "macOS crash debugging", "CEF Chromium debugging", "crashpad minidump analysis", "error"]
timestamp: 2026-07-19T13:20:02.979613+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 4
confidence: 1
---
# Summary

Attempted to create a comprehensive skill for debugging macOS native app crashes (particularly CEF/Chromium apps) but the creation failed due to frontmatter validation. The skill content was well-structured with detailed debugging procedures, minidump forensics, and known pitfalls, but the frontmatter schema requires a 'name' field which was not included alongside 'title' and 'description'.

## Facts
- Tool: skill_manage with action=create, category=software-development
- Skill topic: macOS Native App Crash Debugging for CEF/bundled-Chromium apps
- Frontmatter included 'title' and 'description' but was missing required 'name' field
- Error message: "Frontmatter must include 'name' field."
- Skill content covers crashpad/Sentry minidumps, Apple DiagnosticReports, ANGLE/WebGL pitfalls, GPU process crashes on Metal stack
- Key technique documented: using `strings` on .dmp minidump files to extract crash signatures

## Concepts
- skill_manage tool
- frontmatter validation
- macOS crash debugging
- CEF Chromium debugging
- crashpad minidump analysis

## Files
- `skill:software-development/macOS Native App Crash Debugging`

_Importance: 4 · Confidence: 1_
