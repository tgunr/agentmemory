---
type: FileRead
title: Curl API request to local server
description: 
resource: agentmemory://observation/obs_mrycs80e_435b2ecb080a
tags: ["fileread"]
timestamp: 2026-07-24T03:00:55.304603+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260723_220045
importance: 2
confidence: 0.75
---
# Summary

A successful GET request to the local server's API endpoint retrieved a list of models, which was then piped through `head` to display only the top 100 results. This operation is routine and does not introduce any breaking changes.

## Facts
- curl -s http://127.0.0.1:8001/v1 Models requested from local server.

_Importance: 2 · Confidence: 0.75_
