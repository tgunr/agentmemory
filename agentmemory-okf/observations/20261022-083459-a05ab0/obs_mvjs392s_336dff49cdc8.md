---
type: CommandRun
title: Execute Cloudflare Proxy Worker Template
description: Reads template and outputs environment variables
resource: agentmemory://observation/obs_mvjs392s_336dff49cdc8
tags: ["Cloudflare Proxy Worker", "commandrun"]
timestamp: 2026-10-22T16:51:40.844621+00:00
source: agentmemory
session_id: 20261022_083459_a05ab0
importance: 7
confidence: 1
---
# Summary

The execute_code tool was used to execute a Cloudflare Proxy Worker template. The output included environment variables for authentication.

## Facts
- Secrets (wrangler secret put / dashboard): UPSTREAM_BASE e.g. https://ai-gateway.kilo.ai/api/v1
- Secrets (wrangler secret put / dashboard): UPSTREAM_KEY the OWNER's real provider key — never leaves this Worker
- Secrets (wrangler secret put / dashboard): CLIENT_TOKEN the delegatee's token; rotate by replacing this one secret
- Secrets (wrangler secret put / dashboard): ALLOWED_MODELS optional, comma-separated model ids
- Why a Worker: no always-on host, $0 at household volume, SSE streams pass

## Concepts
- Cloudflare Proxy Worker

## Files
- `/Users/davec/.hermes/skills/integrations/model-access-delegation/templates/cloudflare-proxy-worker.js`

_Importance: 7 · Confidence: 1_
