---
type: FileRead
title: Read BlueBubbles platform message sending code (lines 516-575)
description: Examining BlueBubbles message splitting and API sending logic
resource: agentmemory://observation/obs_mrqhpvef_b4e91eb0c1c6
tags: ["BlueBubbles API integration", "iMessage bubble splitting", "message truncation", "private-api method", "reply_to handling", "fileread"]
timestamp: 2026-07-18T14:56:54.322389+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Read the BlueBubbles message sending implementation showing how text messages are split into paragraphs, truncated for length limits, and sent via BlueBubbles API with support for private-api method and reply functionality.

## Facts
- File has 1142 total lines and is 43KB in size
- Code splits messages on double newlines for separate iMessage bubbles
- Messages exceeding MAX_MESSAGE_LENGTH are truncated via truncate_message()
- Private API enabled check determines whether to use private-api method for replies
- API endpoint /api/v1/message/text is used with chatGuid, tempGuid, and message payload
- Handles reply_to by setting method to private-api and including selectedMessageGuid

## Concepts
- BlueBubbles API integration
- iMessage bubble splitting
- message truncation
- private-api method
- reply_to handling

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 5 · Confidence: 1_
