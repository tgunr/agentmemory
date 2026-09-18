---
type: CommandRun
title: Retrieve model information with curl
description: No specific context provided
resource: agentmemory://observation/obs_mryictnr_49c84233f4ae
tags: ["curl", "commandrun"]
timestamp: 2026-07-24T05:36:54.563656+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260724_003646
importance: 5
confidence: 0.9
---
# Summary

The command ran successfully and provided the expected output.

## Facts
- The command executed was "curl -sf http://127.0.0.1:8001/v1/models 2>/dev/null; echo \"EXIT_CODE=$?\""
- The output from the command was "{\"object\":\"list\",\"data\":[{\"object\":\"model\",\"created\":1784871414,\"id\":\"system\",\"owned_by\":\"Apple\"},{\"object\":\"model\",\"created\":1784871414,\"id\":\"pcc\",\"owned_by\":\"Apple\"}]}EXIT_CODE=0", "exit_code": 0, "error": null"

## Concepts
- curl

_Importance: 5 · Confidence: 0.9_
