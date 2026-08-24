---
type: Error
title: web_extract failed due to backend configuration
description: Brave Search (Free) does not support URL extraction
resource: agentmemory://observation/obs_mrqebnt8_d7130e2e486f
tags: ["web extraction", "backend configuration", "API limitations", "error"]
timestamp: 2026-07-18T13:21:52.456663+00:00
source: agentmemory
session_id: 20260718_081548_174516
importance: 4
confidence: 1
---
# Summary

The agent attempted to extract web content from an Amazon product URL using the web_extract tool. The operation failed because the configured backend, Brave Search (Free), only supports searching and lacks URL extraction capabilities. The system suggests changing the web.extract_backend configuration to an extraction-capable service.

## Facts
- Attempted to extract content from https://www.amazon.com/dp/B0CKP3Z4W1
- Tool used: web_extract
- Current backend is Brave Search (Free), which is search-only
- Fix requires setting web.extract_backend to firecrawl, tavily, exa, or parallel

## Concepts
- web extraction
- backend configuration
- API limitations

_Importance: 4 · Confidence: 1_
