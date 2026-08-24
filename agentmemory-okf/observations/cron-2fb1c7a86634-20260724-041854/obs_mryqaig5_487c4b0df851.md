---
type: Observation
title: lsof and curl tool usage
description: MongoDB server info gathering
resource: agentmemory://observation/obs_mryqaig5_487c4b0df851
tags: ["observation"]
timestamp: 2026-07-24T09:19:03.650713+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260724_041854
importance: 4
confidence: 0.75
---
# Summary

The script executed the combination of lsof and curl commands against a running MongoDB server, gathering information about listen tunnels. The requests resulted in a successful response.

## Facts
- Lsof command output shows vcom-tunnel listening on port 8001
- Curl request to http://127.0.0.1:8001/v1/models receives OK response with payload containing model list

_Importance: 4 · Confidence: 0.75_
