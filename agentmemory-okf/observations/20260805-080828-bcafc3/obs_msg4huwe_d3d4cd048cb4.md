---
type: file_edit
title: Curl command to fetch models
description: Fetched models from localhost:8081/v1/models
resource: agentmemory://observation/obs_msg4huwe_d3d4cd048cb4
tags: ["file_edit"]
timestamp: 2026-08-05T13:28:45.994132+00:00
source: agentmemory
session_id: 20260805_080828_bcafc3
importance: 7
confidence: 0.75
---
# Summary

The curl command successfully fetched models from localhost:8081/v1/models and saved them to /tmp/srv_models.json

## Facts
- curl -s --max-time 5 -o /tmp/srv_models.json http://127.0.0.1:8081/v1/models && echo "saved"

## Files
- `/tmp/srv_models.json`

_Importance: 7 · Confidence: 0.75_
