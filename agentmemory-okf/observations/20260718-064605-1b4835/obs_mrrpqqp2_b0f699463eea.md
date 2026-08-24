---
type: CommandRun
title: HTTP API endpoint returned 404 error for chat query
description: Failed to reach localhost:1234/api/v1/chat/query endpoint
resource: agentmemory://observation/obs_mrrpqqp2_b0f699463eea
tags: ["HTTP API request", "404 error handling", "Chat query endpoint", "Localhost service testing", "commandrun"]
timestamp: 2026-07-19T11:29:17.986251+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

An HTTP request to the BB chat query API endpoint failed with a 404 Not Found error. The script attempted to authenticate with a password parameter and fetch chat data with a limit of 20 records, but the endpoint does not exist at the specified localhost address.

## Facts
- Tool used: execute_code with hermes_tools terminal function
- API endpoint: http://localhost:1234/api/v1/chat/query
- Password parameter: PMN222130pmn!
- Limit parameter: 20
- Result: HTTP Error 404: Not Found
- Script written to /tmp/bb_q.py before execution

## Concepts
- HTTP API request
- 404 error handling
- Chat query endpoint
- Localhost service testing

## Files
- `/tmp/bb_q.py`

_Importance: 5 · Confidence: 1_
