---
type: file_edit
title: Curl command execution
description: Executed curl command to fetch model data from local server
resource: agentmemory://observation/obs_mryo59ua_9f8addf28c2c
tags: ["file_edit"]
timestamp: 2026-07-24T08:18:59.981075+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260724_031848
importance: 4
confidence: 0.75
---
# Summary

The tool curled the local server's v1/models endpoint and received a list of models, including 'system' and 'pcc', both created by Apple and of type 'model'. The output was successful with an exit code of 0.

## Facts
- Taken at 2026-07-24T08:18:59.981075Z in terminal for a curl command.
- Made HTTP GET request to 127.0.0.1:8001/v1/models for model data.

## Files
- `https://localhost:8001/v1/models`

_Importance: 4 · Confidence: 0.75_
