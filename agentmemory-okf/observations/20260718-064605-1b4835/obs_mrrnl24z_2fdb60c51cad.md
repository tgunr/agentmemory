---
type: file_edit
title: Patched bluebubbles-gateway skill documentation for self-loop fix
description: Clarified prefix-stripped handle recording is essential for BlueBubbles echo prevention
resource: agentmemory://observation/obs_mrrnl24z_2fdb60c51cad
tags: ["webhook echo prevention", "message deduplication", "BlueBubbles platform integration", "file_edit"]
timestamp: 2026-07-19T10:28:53.646915+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 8
confidence: 1
---
# Summary

Updated the bluebubbles-gateway skill documentation to clarify that the prefix-stripped handle must be recorded on outbound sends to prevent self-echo loops. This addresses a production issue where BlueBubbles re-webhooks replies using bare handles instead of the full prefixed format, making the stripped key matching essential for proper deduplication.

## Facts
- Patched skill_manage with action "patch" on bluebubbles-gateway skill
- Updated documentation to emphasize recording sends under prefix-stripped handles (iMessage;-;+1… → +1…)
- Critical: BlueBubbles re-webhooks replies as bare handles, requiring stripped key matching
- Previous attempt #3 missed this detail and the loop survived in production
- References production history in references/bluebubbles-self-loop.md

## Concepts
- webhook echo prevention
- message deduplication
- BlueBubbles platform integration

## Files
- `gateway/platforms/bluebubbles.py`
- `references/bluebubbles-self-loop.md`

_Importance: 8 · Confidence: 1_
