---
type: Observation
title: EufyMake Studio crashes on macOS 27 (Tahoe) when opening a document
description: EufyMake Studio launches and connects to the printer, but crashes the moment a document/project is opened in the main process inside EufyMake's native printer-streaming code.
resource: agentmemory://observation/obs_mrvwov0f_eb9f0b6399b9
tags: ["Filing system crash", "Printer-streaming code error", "observation"]
timestamp: 2026-07-22T09:54:52.282310+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 8
confidence: 0.9
---
# Summary

The user reported that EufyMake Studio crashes immediately when trying to open a document, and this is reproducible. They tried several flag combinations but were still unable to fix the issue. The user requests a compatible macOS 27 build of EufyMake Studio.

## Facts
- EufyMake Studio was launched on macOS 27 Tahoe beta
- The crash occurred when opening an existing project / clicking "open document" (pops the native file panel)

## Concepts
- Filing system crash
- Printer-streaming code error

## Files
- `/Users/davec/Desktop/eufyMake_Anker_bug_report.md`

_Importance: 8 · Confidence: 0.9_
