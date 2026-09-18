---
type: CommandRun
title: Inspect Sentry crash dump for GPU renderer modules
description: Checking if crash dump loaded AGXMetal (hardware) or SwiftShader (software)
resource: agentmemory://observation/obs_mrrtfzw5_2a3b2b7d4ac2
tags: ["Crash dump analysis", "Chromium GPU rendering", "SwiftShader vs AGXMetal", "Sentry crash dumps", "Electron Chromium flags", "commandrun"]
timestamp: 2026-07-19T13:12:55.154399+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 6
confidence: 1
---
# Summary

Executed a terminal command to analyze a Sentry crash dump using strings and grep to identify loaded GPU and rendering libraries. The analysis revealed that despite SwiftShader/ANGLE fallback flags being present, the Apple Metal GPU renderer (AGXMetal) was also loaded, which may be related to the crash.

## Facts
- Analyzed crash dump at ~/Library/Application Support/eufyMake Studio Profile/.SentryDmp/completed/8a447cc6-2369-4465-bf29-85ca78b92666.dmp
- Chromium flags found in dump: --enable-unsafe-swiftshader, --use-angle=swiftshader, --use-gl=angle
- Found 1 reference to AGXMetal (AGXMetalG16G_B0, AppleMetalOpenGLRenderer) indicating hardware GPU usage
- Found 9 references to SwiftShader/ANGLE (libANGLE-shared.dylib) indicating software fallback libraries
- Chrome executable path found in environment: /Applications/Google Chrome.app/Contents/MacOS/Google Chrome

## Concepts
- Crash dump analysis
- Chromium GPU rendering
- SwiftShader vs AGXMetal
- Sentry crash dumps
- Electron Chromium flags

## Files
- `~/Library/Application Support/eufyMake Studio Profile/.SentryDmp/completed/8a447cc6-2369-4465-bf29-85ca78b92666.dmp`

_Importance: 6 · Confidence: 1_
