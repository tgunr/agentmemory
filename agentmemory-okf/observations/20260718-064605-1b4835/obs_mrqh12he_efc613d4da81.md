---
type: FileRead
title: BlueBubbles webhook handler implementation
description: Message processing with auth, event filtering, and attachment handling
resource: agentmemory://observation/obs_mrqh12he_efc613d4da81
tags: ["webhook handler", "BlueBubbles integration", "message event filtering", "attachment processing", "MIME type classification", "aiohttp web framework", "fileread"]
timestamp: 2026-07-18T14:37:37.102556+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

Reading the BlueBubbles platform webhook handler that authenticates incoming requests, filters non-message events, skips self-sent messages and tapbacks, then processes inbound attachments by downloading and classifying them by MIME type.

## Facts
- Webhook auth via token from query params (password, guid) or headers (x-password, x-guid, x-bluebubbles-guid)
- Parses JSON body with fallback to form-encoded data via parse_qs
- Filters to only _MESSAGE_EVENTS, silently acknowledges others
- Skips messages from self (isFromMe/fromMe/is_from_me) and tapback reactions
- Downloads attachments via _download_attachment, classifies as PHOTO/VOICE/VIDEO/DOCUMENT by MIME type
- Uses aiohttp web framework for request/response handling
- MessageType enum values: TEXT, PHOTO, VOICE, VIDEO, DOCUMENT

## Concepts
- webhook handler
- BlueBubbles integration
- message event filtering
- attachment processing
- MIME type classification
- aiohttp web framework

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
