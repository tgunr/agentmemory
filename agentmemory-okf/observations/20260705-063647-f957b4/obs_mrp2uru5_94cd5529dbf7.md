---
type: FileRead
title: Read profile store imports and canonical profile key note
description: Initial 20 lines of the desktop profile state module
resource: agentmemory://observation/obs_mrp2uru5_94cd5529dbf7
tags: ["Nanostores state management", "profile key normalization", "persisted client state", "session gateway ownership", "fileread"]
timestamp: 2026-07-17T15:13:02.568786+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The beginning of the profile store establishes its dependencies and documents profile-key normalization semantics. The canonicalization rule is important for consistent session-to-gateway profile comparisons throughout the module.

## Facts
- apps/desktop/src/store/profile.ts is a 407-line, 16,431-byte TypeScript file using nanostores atom and computed state.
- The module imports profile APIs, query client, persisted storage helpers, gateway/session/starmap stores, and ProfileInfo.
- A comment defines the canonical profile key as trimmed input with empty values mapped to "default", used when comparing a session owner profile with the live gateway profile.
- The read was truncated after lines 1-20; offset 21 is needed to continue.

## Concepts
- Nanostores state management
- profile key normalization
- persisted client state
- session gateway ownership

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/store/profile.ts`

_Importance: 3 · Confidence: 1_
