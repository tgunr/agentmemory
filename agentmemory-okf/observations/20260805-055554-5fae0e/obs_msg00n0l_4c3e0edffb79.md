---
type: file_edit
title: Reverse-proxy / public-subdomain outage debugging
description: # Reverse-proxy / public-subdomain outage debugging
resource: agentmemory://observation/obs_msg00n0l_4c3e0edffb79
tags: ["file_edit"]
timestamp: 2026-08-05T11:23:24.153412+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 5
confidence: 0.85
---
# Summary

Diagnose public-subdomain / reverse-proxy outages in self-hosted setups. Use when a hostname like *.example.com returns 503/502/connection errors, or \"X is down\" where X is exposed through a reverse proxy or tunnel.

## Facts
- Dig command to resolve frontend host;
- Ssh to frontend host and find vhost;
- Read proxy error log for decisive line;
- Check backend target; if nothing, restart it,
- If the backend is a managed service, check its load status;

_Importance: 5 · Confidence: 0.85_
