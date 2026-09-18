---
type: file_edit
title: Bug Report — com.apple.appkit.xpc.openAndSavePanelService crashes on macOS 27 (Tahoe) beta
description: Applies to third-party apps and presents file dialog issues
resource: agentmemory://observation/obs_mrvwp522_c24a0701f2e2
tags: ["native panel", "SIGSEGV", "macOS Tahoe beta regression", "file_edit"]
timestamp: 2026-07-22T09:55:05.301731+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 7
confidence: 0.9
---
# Summary

The bug causes third-party apps like EufyMake Studio to crash upon presenting the native Save panel, necessitating a fix for `TNode::Remove` in `com.apple.appkit.xpc.openAndSavePanelService`. Restoring daemon functionality could enable usability of affected apps.

## Facts
- Specifically, the system daemon `com.apple.appkit.xpc.openAndSavePanelService` crashes with a SIGSEGV when invoked by non-sandboxed or sandboxed app via native Open/Save panel on macOS 27 Tahoe beta.

## Concepts
- native panel
- SIGSEGV
- macOS Tahoe beta regression

## Files
- `/Users/davec/Desktop/eufyMake_Apple_Feedback.md`

_Importance: 7 · Confidence: 0.9_
