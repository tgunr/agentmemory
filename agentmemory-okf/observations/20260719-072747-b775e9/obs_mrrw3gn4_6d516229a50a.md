---
type: file_edit
title: Patched CEF minidump forensics skill with macOS 27 crash case study
description: Added detailed analysis of native plugin crash and .ips parsing workaround for Tahoe beta
resource: agentmemory://observation/obs_mrrw3gn4_6d516229a50a
tags: ["CEF minidump forensics", "macOS crash diagnostics", ".ips file parsing", "native plugin debugging", "macOS Tahoe beta compatibility", "file_edit"]
timestamp: 2026-07-19T14:27:09.180012+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 8
confidence: 1
---
# Summary

Added a detailed second case study documenting a different crash scenario where an app launched successfully with --disable-gpu but crashed when opening documents. The forensics reveal native plugin heap corruption and a system-level macOS Tahoe beta bug, plus provides a parsing workaround for the non-standard .ips crash report format on macOS 27.

## Facts
- Tool: skill_manage with patch action on references/cef-minidump-forensics.md
- Skill name: macos-app-crash-debug
- Replaced single sentence limit with comprehensive case study
- Case study covers native plugin heap corruption via libAnkerNet.dylib
- Documents EXC_BAD_ACCESS SIGSEGV bug in com.apple.appkit.xpc.openAndSavePanelService
- Includes Python script workaround for .ips parsing (two concatenated JSON objects)

## Concepts
- CEF minidump forensics
- macOS crash diagnostics
- .ips file parsing
- native plugin debugging
- macOS Tahoe beta compatibility

## Files
- `references/cef-minidump-forensics.md`

_Importance: 8 · Confidence: 1_
