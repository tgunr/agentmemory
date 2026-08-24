---
type: FileRead
title: Read BlueBubbles webhook payload parsing logic
description: Extracting chat GUID, identifier, and sender from nested payload structures
resource: agentmemory://observation/obs_mrqiblwd_b9c08fe5211a
tags: ["Webhook payload parsing", "BlueBubbles integration", "Fallback data extraction", "API validation", "fileread"]
timestamp: 2026-07-18T15:13:48.442740+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The agent read the BlueBubbles platform integration file to understand how webhook payloads are parsed. The code handles fallback logic for extracting chat GUIDs, identifiers, and sender information from various nested JSON structures, ensuring required fields are present before processing.

## Facts
- File has 1187 total lines; reading lines 1115-1144
- Implements fallback for BlueBubbles v1.9+ webhooks where chat GUID is nested in data.chats[0].guid
- Extracts chat_identifier from chatIdentifier or identifier fields in record or payload
- Extracts sender from handle.address, sender, from, or address fields
- Returns HTTP 400 error if sender, chat identifiers, or text are missing

## Concepts
- Webhook payload parsing
- BlueBubbles integration
- Fallback data extraction
- API validation

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 3 · Confidence: 1_
