---
type: FileRead
title: Read BlueBubbles message processing logic
description: Lines 1077-1143 showing payload parsing, validation, and event dispatch
resource: agentmemory://observation/obs_mrqhq1q0_2d37734aed96
tags: ["Webhook payload parsing", "Asyncio background tasks", "Message event routing", "Group chat mention filtering", "BlueBubbles integration", "fileread"]
timestamp: 2026-07-18T14:57:02.516090+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The agent read the message processing endpoint of the BlueBubbles platform integration. This section handles parsing incoming webhook payloads, validating required fields, filtering group mentions, and dispatching the parsed data as a MessageEvent to an async background task.

## Facts
- File: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py
- Extracts chat_identifier, sender, and text from record/payload using fallback logic
- Validates required fields, returning HTTP 400 if missing
- Detects group chats via isGroup flag or ;+; in chat_guid
- Filters group messages based on require_mention configuration
- Constructs MessageEvent and dispatches via asyncio.create_task to handle_message
- Sends fire-and-forget read receipts if send_read_receipts is enabled

## Concepts
- Webhook payload parsing
- Asyncio background tasks
- Message event routing
- Group chat mention filtering
- BlueBubbles integration

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 4 · Confidence: 1_
