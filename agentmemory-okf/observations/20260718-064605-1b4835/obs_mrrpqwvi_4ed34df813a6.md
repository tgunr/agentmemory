---
type: CommandRun
title: Test BlueBubbles chat API endpoints
description: Verified /api/v1/chat/query returns paginated chat data; /api/v1/chat is 404
resource: agentmemory://observation/obs_mrrpqwvi_4ed34df813a6
tags: ["BlueBubbles API", "REST API endpoint testing", "API pagination", "iMessage SMS RCS integration", "commandrun"]
timestamp: 2026-07-19T11:29:25.994106+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Executed a Python script to probe the local BlueBubbles API chat endpoints. Discovered that /api/v1/chat/query successfully returns paginated chat data including participant details and service types, while /api/v1/chat returns a 404 error.

## Facts
- Script /tmp/bb_q2.py queries localhost:1234 API for chat data
- Endpoint /api/v1/chat/query returns HTTP 200 with chat records (guid, chatIdentifier, participants)
- Query supports limit and offset parameters for pagination
- Participant data includes address and service type (SMS, iMessage, RCS)
- Endpoint /api/v1/chat returns HTTP 404 Not Found

## Concepts
- BlueBubbles API
- REST API endpoint testing
- API pagination
- iMessage SMS RCS integration

## Files
- `/tmp/bb_q2.py`

_Importance: 5 · Confidence: 1_
