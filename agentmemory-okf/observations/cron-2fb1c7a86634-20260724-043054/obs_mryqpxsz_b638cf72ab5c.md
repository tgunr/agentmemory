---
type: FileRead
title: Lsof Output
description: cURL output from http://127.0.0.1:8001/v1/models --max-time 3
resource: agentmemory://observation/obs_mryqpxsz_b638cf72ab5c
tags: ["Port Scanning with Lsof", "fileread"]
timestamp: 2026-07-24T09:31:03.393227+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260724_043054
importance: 6
confidence: 0.9
---
# Summary

The tool lsof returned an interesting result while checking network connections and curl was run on the server to verify the response code from the API endpoint

## Facts
- lsof -i :8001 is being used to investigate a potential port conflict
- Curl output status code was 200 for the http request

## Concepts
- Port Scanning with Lsof

_Importance: 6 · Confidence: 0.9_
