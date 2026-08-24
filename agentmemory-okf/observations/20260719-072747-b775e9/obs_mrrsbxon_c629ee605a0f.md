---
type: file_write
title: Created SwiftShader software rendering launcher script
description: Bash wrapper to bypass Metal crashes in Chromium-based apps on macOS beta
resource: agentmemory://observation/obs_mrrsbxon_c629ee605a0f
tags: ["SwiftShader rendering", "Chromium GPU flags", "Electron/CEF compatibility", "macOS Metal workaround", "file_write"]
timestamp: 2026-07-19T12:41:46.051789+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 5
confidence: 1
---
# Summary

Created a bash launcher template that wraps Chromium-based macOS applications with software rendering flags to work around Metal compatibility issues in macOS beta releases. This provides a workaround for apps using CEF or Electron that crash due to GPU driver problems.

## Facts
- Tool executed: skill_manage with write_file action
- File path: templates/macos-sw-render-wrapper/launcher
- Skill name: macos-app-diagnostics
- Script forces SwiftShader with --disable-gpu, --use-gl=swiftshader, --use-angle=swiftshader, --ignore-gpu-blocklist flags
- Successfully wrote to /Users/davec/.hermes/profiles/cc/skills/apple/macos-app-diagnostics/templates/macos-sw-render-wrapper/launcher

## Concepts
- SwiftShader rendering
- Chromium GPU flags
- Electron/CEF compatibility
- macOS Metal workaround

## Files
- `templates/macos-sw-render-wrapper/launcher`

_Importance: 5 · Confidence: 1_
