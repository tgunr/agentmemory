---
type: FileRead
title: Read BlueBubbles webhook handler logic
description: Parsing payload, filtering events, and ignoring self-sent messages
resource: agentmemory://observation/obs_mrqhs3jo_d37cb051be93
tags: ["Webhook payload parsing", "Event filtering", "Message loop prevention", "BlueBubbles integration", "fileread"]
timestamp: 2026-07-18T14:58:38.193954+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The agent read a section of the BlueBubbles platform integration file to understand the webhook event processing logic. This section handles JSON payload parsing, event type filtering, and ignoring self-sent messages to prevent infinite loops.

## Facts
- File /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py has 1155 total lines
- Webhook handler parses JSON payload from form data and returns 400 on parse errors
- Filters out non-message events using a _MESSAGE_EVENTS constant
- Ignores messages where isFromMe, fromMe, or is_from_me is true to prevent echo loops

## Concepts
- Webhook payload parsing
- Event filtering
- Message loop prevention
- BlueBubbles integration

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
