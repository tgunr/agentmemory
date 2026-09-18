---
type: file_write
title: Documented CEF/Metal crash workaround for macOS Tahoe beta
description: Case study added to macos-app-diagnostics skill for EufyMake Studio
resource: agentmemory://observation/obs_mrrsbw2q_fb5804fc905b
tags: ["macOS app diagnostics", "Chromium Embedded Framework (CEF)", "Apple Metal GPU rendering", "SwiftShader software rendering", "Sentry crash dumps", "macOS beta troubleshooting", "file_write"]
timestamp: 2026-07-19T12:41:43.965244+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 5
confidence: 1
---
# Summary

A case study documenting the diagnosis and workaround for EufyMake Studio crashing on macOS 27 Tahoe beta was added to the macos-app-diagnostics skill. The crash was traced to the app's bundled Chromium/CEF failing on Apple's updated Metal stack, resolved by forcing software rendering via SwiftShader and a wrapper app.

## Facts
- Wrote case study to references/cef-metal-crash-on-macos-beta.md in the macos-app-diagnostics skill
- EufyMake Studio v4.0.2 (Chromium 122/CEF) crashes on macOS 27 Tahoe beta due to Apple Metal stack changes
- Crash dumps located in ~/Library/Application Support/eufyMake Studio Profile/.SentryDmp/completed/
- Workaround requires software rendering flags: --disable-gpu --use-gl=swiftshader --use-angle=swiftshader --ignore-gpu-blocklist
- Permanent workaround implemented via a wrapper app at /Applications/eufyMake Studio (Safe).app

## Concepts
- macOS app diagnostics
- Chromium Embedded Framework (CEF)
- Apple Metal GPU rendering
- SwiftShader software rendering
- Sentry crash dumps
- macOS beta troubleshooting

## Files
- `/Users/davec/.hermes/profiles/cc/skills/apple/macos-app-diagnostics/references/cef-metal-crash-on-macos-beta.md`
- `/Applications/eufyMake Studio (Safe).app`

_Importance: 5 · Confidence: 1_
