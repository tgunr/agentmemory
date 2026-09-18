---
type: CommandRun
title: Queried local server info API via curl
description: Retrieved system, network, and service details from localhost:1234
resource: agentmemory://observation/obs_mrqfdtxj_1a08caef3533
tags: ["REST API", "local server info", "network configuration", "macOS environment", "commandrun"]
timestamp: 2026-07-18T13:51:33.314593+00:00
source: agentmemory
session_id: 20260718_084855_083384
importance: 4
confidence: 1
---
# Summary

Executed a curl command to query the local server's info API on port 1234. The response revealed the server is running version 1.9.9 on macOS 27.0.0, with specific local IPv4 addresses and detected Apple accounts.

## Facts
- Queried /api/v1/server/info endpoint on localhost:1234 (credentials redacted)
- Server version: 1.9.9, OS version: 27.0.0
- Computer ID: davec@Mini.local
- Local IPv4 addresses: 10.1.2.7, 192.168.88.7
- Detected iCloud and iMessage accounts: davec@mac.com
- Proxy service: lan-url, helper_connected: false

## Concepts
- REST API
- local server info
- network configuration
- macOS environment

_Importance: 4 · Confidence: 1_
