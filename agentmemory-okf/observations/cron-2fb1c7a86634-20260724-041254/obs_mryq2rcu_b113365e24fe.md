---
type: CommandRun
title: lsof -i :8001 ; curl
description: Network listener check and model validation
resource: agentmemory://observation/obs_mryq2rcu_b113365e24fe
tags: ["net listener checks", "model validation", "commandrun"]
timestamp: 2026-07-24T09:13:01.948624+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260724_041254
importance: 8
confidence: 0.9
---
# Summary

Error checking model, returning non-zero status but no error message.

## Facts
- Lsof output indicates a vcom-tunnel network listener on port 8001
- Curl request to localhost:8001 returns HTTP code 200

## Concepts
- net listener checks
- model validation

_Importance: 8 · Confidence: 0.9_
