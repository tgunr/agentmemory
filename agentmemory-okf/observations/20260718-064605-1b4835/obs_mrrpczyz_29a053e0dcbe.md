---
type: FileRead
title: Reviewed BlueBubbles outbound echo-loop prevention
description: Outbound messages are tracked by GUID and normalized chat/text keys.
resource: agentmemory://observation/obs_mrrpczyz_29a053e0dcbe
tags: ["webhook echo suppression", "self-loop guard", "normalized message deduplication", "bounded ordered cache", "BlueBubbles private API replies", "multipart attachment upload", "fileread"]
timestamp: 2026-07-19T11:18:36.824851+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The BlueBubbles sender prevents self-reinjection loops by recording both returned message GUIDs and normalized chat/text combinations. Prefix-stripped handle tracking is critical because echoed replies may use bare handles rather than the prefixed identifiers used when sending.

## Facts
- Text messages are posted to /api/v1/message/text with chatGuid, tempGuid, and message; private API replies additionally include selectedMessageGuid and partIndex.
- Successful outbound message GUIDs are stored in self._sent_guids with timestamp and bounded by self._sent_guids_max.
- Normalized outbound text is stored in self._sent_texts under chat_id, resolved GUID, and prefix-stripped handle keys to catch BlueBubbles webhook echoes using bare handles.
- Attachment sending validates client connectivity and file existence, resolves the chat GUID, and derives a filename before multipart upload.

## Concepts
- webhook echo suppression
- self-loop guard
- normalized message deduplication
- bounded ordered cache
- BlueBubbles private API replies
- multipart attachment upload

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
