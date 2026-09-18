---
type: CommandRun
title: Send test iMessage via local Hermes API
description: Testing BlueBubbles message sending endpoint with curl
resource: agentmemory://observation/obs_mrqcaym3_ee16255249e5
tags: ["BlueBubbles API", "Hermes", "iMessage automation", "curl", "REST API testing", "commandrun"]
timestamp: 2026-07-18T12:25:20.566435+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

A test message was sent to a local BlueBubbles/Hermes API to verify the message sending endpoint. The curl command executed successfully, though the API response body was not returned in the terminal output.

## Facts
- Executed POST request to http://localhost:1234/api/v1/message/text
- Targeted chatGuid iMessage;-;+19364420811 with a generated tempGuid
- Command exited with code 0, but curl response body was empty in output

## Concepts
- BlueBubbles API
- Hermes
- iMessage automation
- curl
- REST API testing

_Importance: 4 · Confidence: 1_
