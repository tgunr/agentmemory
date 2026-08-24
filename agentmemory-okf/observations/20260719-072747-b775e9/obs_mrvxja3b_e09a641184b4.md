---
type: file_write
title: eufyMake Studio crash report
description: macOS 27 and document opening crash with heap corruption
resource: agentmemory://observation/obs_mrvxja3b_e09a641184b4
tags: ["heap corruption crash in native printer code", "file_write"]
timestamp: 2026-07-22T10:18:31.507090+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 7
confidence: 1
---
# Summary

The latest Tahoe-compatible version of eufyMake Studio is requested to include macOS 27 support and prevent the crash during document opening. This involves implementing fixable changes, not just patching the current build.

## Facts
- EufyMake Studio version 4.0.2 crashes on macOS 27 in native printer code due to heap corruption.
- Sentry dumps found in ~/Library/Application Support/eufyMake Studio Profile/.SentryDmp/completed/.
- Request: ship a Tahoe-compatible build.

## Concepts
- heap corruption crash in native printer code

## Files
- `/private/tmp/eufy_anker_short.txt`

_Importance: 7 · Confidence: 1_
