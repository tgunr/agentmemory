---
type: file_write
title: Write BlueBubbles/Hermes diagnostics cookbook to skill
description: Documenting loop resolution, log analysis, and API probing techniques
resource: agentmemory://observation/obs_mrrq0lek_8853c906f8bf
tags: ["BlueBubbles webhook loop", "iMessage pseudo-chat GUID resolution", "Server log analysis", "API endpoint probing", "Echo guard and message deduplication", "file_write"]
timestamp: 2026-07-19T11:36:57.688828+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

A comprehensive diagnostics cookbook was written to the bluebubbles-gateway skill to document the resolution of a message looping issue between BlueBubbles and Hermes. The document details how to identify the root cause via server logs, provides a Python script for probing the BB API, and includes a troubleshooting matrix for various failure modes.

## Facts
- File written to /Users/davec/.hermes/skills/integrations/bluebubbles-gateway/references/bluebubbles-diagnostics.md
- Documents root cause of message loop: sending to 'any;-' pseudo-chat instead of 'iMessage;-'
- Fix applied in _resolve_chat_guid to synthesize correct iMessage GUIDs and prevent webhook dispatch storms
- Includes Python probe script for /api/v1/chat/query (requires POST with JSON body, not GET)
- Provides troubleshooting matrix for distinguishing live loops, stale phone displays, and allowlist lockouts
- API credentials present in the original probe script were stripped from this record

## Concepts
- BlueBubbles webhook loop
- iMessage pseudo-chat GUID resolution
- Server log analysis
- API endpoint probing
- Echo guard and message deduplication

## Files
- `/Users/davec/.hermes/skills/integrations/bluebubbles-gateway/references/bluebubbles-diagnostics.md`

_Importance: 6 · Confidence: 1_
