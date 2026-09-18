---
type: file_edit
title: BlueBubbles skill update
description: Updated BlueBubbles skill for bluebubbles-gateway
resource: agentmemory://observation/obs_msq4h4mb_9ca1d6bc56ba
tags: ["Revised webhook configuration", "file_edit"]
timestamp: 2026-08-12T13:25:53.693801+00:00
source: agentmemory
session_id: 20260812_081748_d67311
importance: 6
confidence: 0.9
---
# Summary

The BlueBubbles skill was updated for bluebubbles-gateway, addressing stability issues with the webhook listener host and password formatting.

## Facts
- Webhook listener host must be the Mac's LAN IPv4 (e.g. 192.168.88.7)
- Password has a trailing `!` and must be URL-encoded in query strings (%21)

## Concepts
- Revised webhook configuration

## Files
- `SKILL.md`

_Importance: 6 · Confidence: 0.9_
