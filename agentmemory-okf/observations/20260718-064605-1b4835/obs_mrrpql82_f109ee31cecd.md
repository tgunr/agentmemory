---
type: CommandRun
title: BlueBubbles API query and adapter status check
description: Diagnostic script to inspect chat/query response format and live adapter config
resource: agentmemory://observation/obs_mrrpql82_f109ee31cecd
tags: ["BlueBubbles REST API", "gateway adapter configuration", "private_api flag", "helper flag", "bash command escaping", "commandrun"]
timestamp: 2026-07-19T11:29:10.895958+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

A diagnostic script attempted to query the BlueBubbles REST API to understand the chat/query response schema (guid, chatIdentifier, participants fields) but the inline curl+python3 command failed due to bash escaping issues. However, a grep of the gateway log successfully revealed that the BlueBubbles adapter is connected with both private_api and helper flags set to False.

## Facts
- curl command to BlueBubbles API at localhost:1234 failed due to bash syntax error (escaping issue with complex python3 -c inline script)
- BlueBubbles adapter log shows: connected to http://localhost:1234 with private_api=False, helper=False
- Timestamp of adapter connection log: 2026-07-19 06:10:57,743
- The query endpoint attempted was /api/v1/chat/query with password and limit=10 parameters

## Concepts
- BlueBubbles REST API
- gateway adapter configuration
- private_api flag
- helper flag
- bash command escaping

## Files
- `/Users/davec/.hermes/logs/gateway.log`

_Importance: 5 · Confidence: 1_
