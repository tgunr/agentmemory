---
type: FileRead
title: Read BlueBubbles platform integration code (lines 170-209)
description: Text normalization, API helpers, and mention pattern compilation
resource: agentmemory://observation/obs_mrrobjhc_e98d72f48d44
tags: ["BlueBubbles integration", "Message normalization", "API authentication", "Pattern compilation", "Wake word detection", "Config parsing", "fileread"]
timestamp: 2026-07-19T10:49:29.180983+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 2
confidence: 1
---
# Summary

Reading BlueBubbles platform integration code showing API helper methods and mention pattern compilation. The code handles text normalization for message comparison and flexible parsing of wake word patterns from various input formats.

## Facts
- File: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py (1250 lines, 49KB)
- _norm_text normalizes text for echo comparison (lowercase, strip, collapse whitespace)
- _api_url constructs API URLs with password authentication parameter
- _compile_mention_patterns parses wake words from config/env (supports JSON, comma-separated, newline-separated)
- Uses DEFAULT_MENTION_PATTERNS when no config provided
- Pattern compilation converts strings to compiled regex patterns

## Concepts
- BlueBubbles integration
- Message normalization
- API authentication
- Pattern compilation
- Wake word detection
- Config parsing

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 2 · Confidence: 1_
