---
type: FileRead
title: Reviewed desktop i18n type definitions
description: Inspected translation keys around profile, speech, retry, and branching errors.
resource: agentmemory://observation/obs_mrp389ir_8f42ac5d4567
tags: ["TypeScript i18n types", "localized error messages", "parameterized translations", "chat recovery", "fileread"]
timestamp: 2026-07-17T15:23:32.014692+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 2
confidence: 1
---
# Summary

A portion of the desktop application's localization type contract was inspected. It establishes typed labels and parameterized messages for profile selection, YOLO mode, speech-to-text, failed chat operations, stranded resume recovery, and branching validation.

## Facts
- Lines 1988-2007 define string and formatter translation types including yoloSystem, profileStatus, noProfileNamed, and newChatsProfile.
- The section includes failure and recovery keys: setProfileFailed, stopFailed, regenerateFailed, editFailed, resumeFailed, resumeStrandedTitle, resumeStrandedBody, and resumeRetry.
- The file has 2,073 lines and the read was truncated at line 2007, with continuation available from offset 2008.

## Concepts
- TypeScript i18n types
- localized error messages
- parameterized translations
- chat recovery

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/i18n/types.ts`

_Importance: 2 · Confidence: 1_
