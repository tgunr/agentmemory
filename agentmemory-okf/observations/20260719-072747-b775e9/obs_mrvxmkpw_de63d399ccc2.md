---
type: file_write
title: Crash evidence path for EufyMake Studio on macOS 27 Tahoe
description: Diagnostics from user crashes and sentry dumps
resource: agentmemory://observation/obs_mrvxmkpw_de63d399ccc2
tags: ["macOS 27 Apple AppKit crash bug", "file_write"]
timestamp: 2026-07-22T10:21:05.247159+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 5
confidence: 0.9
---
# Summary

EufyMake Studio suffers from intermittent crashes due to a bug affecting the macOS 27.0 build, prompting a request for a Tahoe-compatible build.

## Facts
- Product facts verified 2026-07, including App, Built on CEF/Chromium, and macOS version, with breaks on Tahoe dev beta
- EufyMake Studio 4.0.2 (com.anker.pceufyMake) crashes 100% when opening documents on macOS 27.0 (26A5378n), with main-process crash in native code and SIGSEGV caused by the Open/Save panel

## Concepts
- macOS 27 Apple AppKit crash bug

## Files
- `/Users/davec/.hermes/profiles/cc/skills/software-development/macos-cef-app-tahoe-crash-diagnosis/references/eufymake_studio_tahoe.md`

_Importance: 5 · Confidence: 0.9_
