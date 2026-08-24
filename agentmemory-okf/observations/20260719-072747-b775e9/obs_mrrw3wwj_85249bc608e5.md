---
type: Error
title: Memory update failed: exceeds 2200 char limit
description: Attempted to update CNC profile and add macOS beta notes
resource: agentmemory://observation/obs_mrrw3wwj_85249bc608e5
tags: ["Memory management", "Character limits", "macOS beta debugging", "Persistent context", "error"]
timestamp: 2026-07-19T14:27:30.254324+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 5
confidence: 1
---
# Summary

The agent attempted to update its persistent memory by shortening the CNC machining profile entry and adding new notes regarding macOS 27.0 Tahoe dev beta compatibility issues. The operation failed because the combined character count would exceed the strict 2,200-character limit, requiring further trimming of existing entries before retrying.

## Facts
- Memory limit is 2,200 characters; pre-operation usage was 2,167 characters.
- Attempted to replace CNC profile entry and add macOS 27.0 Tahoe dev beta (Build 26A5378n) debugging notes.
- Operation failed because resulting size would be 2,255 characters (55 chars over limit).
- macOS notes identify Chromium crashes on Apple Metal GPU and native file panel segfaults; references skill `macos-app-crash-debug`.
- CNC profile covers Onefinity Foreman CNC, Redline controller, 2 kW spindle, feeds/speeds, and CAM software.

## Concepts
- Memory management
- Character limits
- macOS beta debugging
- Persistent context

## Files
- `~/.hermes/profiles/cnc/`

_Importance: 5 · Confidence: 1_
