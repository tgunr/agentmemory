---
type: Error
title: Web extract failed: Brave Search backend lacks extraction capability
description: Attempted to extract Google OKF article from Towards AI
resource: agentmemory://observation/obs_mrtc488y_a48fb7d9b9b6
tags: ["web extraction backend configuration", "Brave Search API limitations", "AI agent tool configuration", "error"]
timestamp: 2026-07-20T14:43:24.993024+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 4
confidence: 1
---
# Summary

The web_extract tool failed to fetch the Towards AI article on Google's Open Knowledge Format. The failure occurred because the active Brave Search (Free) backend does not support URL content extraction. Resolving this requires configuring the web.extract_backend to an extraction-capable service like firecrawl, tavily, exa, or parallel.

## Facts
- URL: https://pub.towardsai.net/googles-open-knowledge-format-okf-the-markdown-standard-every-ai-engineer-should-know-about-1d14b223f39e
- Requested char_limit: 30000
- Error: Brave Search (Free) is search-only and cannot extract URL content
- Fix: Set web.extract_backend to firecrawl, tavily, exa, or parallel

## Concepts
- web extraction backend configuration
- Brave Search API limitations
- AI agent tool configuration

_Importance: 4 · Confidence: 1_
