---
type: FileRead
title: Read BlueBubbles inbound attachment handling
description: Webhook messages are classified by downloaded attachment MIME type and UTI.
resource: agentmemory://observation/obs_mrrpfk0k_b8104c3d8cc0
tags: ["BlueBubbles webhook", "inbound attachment handling", "MIME type classification", "message type normalization", "webhook payload compatibility", "fileread"]
timestamp: 2026-07-19T11:20:36.112230+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The BlueBubbles gateway processes inbound webhook attachments by downloading each valid GUID and deriving the message type from MIME metadata. It also normalizes attachment-only text and handles newer webhook payloads whose chat GUID may be nested under the first chat record.

## Facts
- Inbound attachments are downloaded via self._download_attachment(att_guid, att), with cached paths and MIME types collected in media_urls and media_types.
- Images map to PHOTO, audio or CAF UTI attachments to VOICE, video to VIDEO, and all other attachments to DOCUMENT.
- For multiple attachments, PHOTO is preferred if any MIME type has an image prefix; attachment-only messages receive the placeholder text "(attachment)".
- Chat GUID lookup checks camelCase and snake_case fields in record and payload, then begins a fallback for BlueBubbles v1.9+ using data.chats[0].guid.

## Concepts
- BlueBubbles webhook
- inbound attachment handling
- MIME type classification
- message type normalization
- webhook payload compatibility

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
