---
type: file_write
title: Bash script template for safe CEF/macOS app launcher with crash workarounds
description: Handles singleton lock cleanup and GPU/WebGL crash mitigations
resource: agentmemory://observation/obs_mrrtqkjv_46d99c75d0b6
tags: ["CEF Chromium Embedded Framework", "macOS app bundling", "Singleton lock cleanup", "GPU crash workarounds", "shell script debugging", "file_write"]
timestamp: 2026-07-19T13:21:08.485545+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 5
confidence: 1
---
# Summary

Created a bash wrapper script template to safely launch crashing CEF-based macOS applications by cleaning up stale lock files and applying GPU-related workaround flags. This addresses common issues when CEF apps hard-crash and leave phantom locks that prevent subsequent launches.

## Facts
- Created templates/safe-launcher.sh in macos-app-crash-debug skill
- Script removes stale singleton lock files from CEF UserData directory
- Applies GPU/WebGL disabling flags to workaround Metal crashes on macOS beta
- Exports SENTRY_DUMP_STDOUT=1 for additional debugging output
- Logs all output to /tmp/&lt;app&gt;-safe.log using tee

## Concepts
- CEF Chromium Embedded Framework
- macOS app bundling
- Singleton lock cleanup
- GPU crash workarounds
- shell script debugging

## Files
- `/Users/davec/.hermes/profiles/cc/skills/software-development/macos-app-crash-debug/templates/safe-launcher.sh`

_Importance: 5 · Confidence: 1_
