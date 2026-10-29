---
type: file_edit
title: Reverse proxy diagnosis
description: Diagnose subdomain/reverse-proxy outages (503/502).
resource: agentmemory://observation/obs_mvt5u0d6_db920fccad70
tags: ["reverse-proxy / public-subdomain outage debugging", "file_edit"]
timestamp: 2026-10-29T06:26:19.862827+00:00
source: agentmemory
session_id: 20261029_010915_e2b06b
importance: 8
confidence: 0.9
---
# Summary

To diagnose a public hostname (especially a subdomain behind a reverse proxy) being unreachable, follow these steps:
  1. Resolve the name to find the frontend host.
  2. SSH to the frontend host and find the vhost.
  3. Read the proxy error log to find the decisive line.
  4. Check the backend target.
  5. Verify the full chain.

## Facts
- Diagnose subdomain/reverse-proxy outages (503/502) as per the tool output.

## Concepts
- reverse-proxy / public-subdomain outage debugging

_Importance: 8 · Confidence: 0.9_
