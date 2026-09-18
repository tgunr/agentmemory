---
type: file_edit
title: Patched BlueBubbles self-loop fix in gateway skill
description: Fixed message tracking to handle prefix-stripped re-webhook keys
resource: agentmemory://observation/obs_mrrnk9rd_00ebb5b14042
tags: ["BlueBubbles gateway", "self-loop prevention", "message deduplication", "iMessage integration", "file_edit"]
timestamp: 2026-07-19T10:28:16.869135+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

Patched the BlueBubbles gateway skill to fix a self-loop bug where the platform re-webhooks sent replies back using bare phone numbers instead of the prefixed chat identifiers used during sending. The fix records sent messages under both prefixed and stripped keys to ensure proper deduplication.

## Facts
- Modified references/bluebubbles-self-loop.md in bluebubbles-gateway skill
- Changed from single-loop to set-based key handling with prefix stripping
- Added logic to extract bare handle from prefixed forms (iMessage;-;+1... or any;-;+1...)
- Fixes self-loop where BB re-webhooks replies using bare handles instead of prefixed forms

## Concepts
- BlueBubbles gateway
- self-loop prevention
- message deduplication
- iMessage integration

## Files
- `references/bluebubbles-self-loop.md`

_Importance: 7 · Confidence: 1_
