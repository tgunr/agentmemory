---
type: file_write
title: Making HTTP request with curl
description: Pulling metadata from the API
resource: agentmemory://observation/obs_mry2pf3j_c9feedbb9233
tags: ["HTTP API requests", "file_write"]
timestamp: 2026-07-23T22:18:48.362982+00:00
source: agentmemory
session_id: cron_2fb1c7a86634_20260723_171841
importance: 6
confidence: 0.9
---
# Summary

The script retrieved the HTTP status code from the server.

## Facts
- Posted hook: post_tool_call to trigger shell execution
- Used command: curl -s -o /dev/null -w \"%{http_code}\" http://127.0.0.1:8001/v1/models for HTTP request

## Concepts
- HTTP API requests

_Importance: 6 · Confidence: 0.9_
