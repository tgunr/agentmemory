---
type: FileRead
title: Read profile store file (first 25 lines of 407 total)
description: TypeScript nanostores file for profile management
resource: agentmemory://observation/obs_mrp8igyd_c40cfa6e1062
tags: ["nanostores", "profile management", "typescript", "fileread"]
timestamp: 2026-07-17T17:51:26.291127+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 2
confidence: 1
---
# Summary

The profile store file was read to understand profile state management in the Hermes desktop application. It uses nanostores for reactive state and includes a canonical key normalization function that ensures empty profile names become "default".

## Facts
- File path: /Users/davec/.hermes/hermes-agent/apps/desktop/src/store/profile.ts
- Total lines: 407, truncated after showing lines 1-25
- Imports nanostores (atom, computed), hermes API functions, query client, and storage utilities
- Exports normalizeProfileKey function that trims and defaults empty strings to "default"

## Concepts
- nanostores
- profile management
- typescript

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/profile.ts`

_Importance: 2 · Confidence: 1_
