---
type: FileRead
title: get API status
description: Get API status from local server
resource: agentmemory://observation/obs_mryfzymo_d12795d83852
tags: ["API request", "fileread"]
timestamp: 2026-07-24T04:30:55.243713+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260723_233046
importance: 5
confidence: 1
---
# Summary

The server was accessed via `curl` and the HTTP response code was retrieved.

## Facts
- <key>command</key>
      <value>"curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8001/v1/models 2>&1; echo """</value>
- <key>output</key>
      <value>200</value>
- <key>exit_code</key>
      <value>0</value>
- <key>error</key>
      <value>null</value>

## Concepts
- API request

## Files
- `/etc/hosts`

_Importance: 5 · Confidence: 1_
