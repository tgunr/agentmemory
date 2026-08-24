---
type: Error
title: Web Extract Failed: Brave Search Backend Limitation
description: Attempted to extract GitHub release page but backend is search-only
resource: agentmemory://observation/obs_mrqbhdl0_f93da735aa9b
tags: ["web extraction", "backend configuration", "brave search limitations", "firecrawl", "tavily", "error"]
timestamp: 2026-07-18T12:02:20.289068+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The agent attempted to extract content from a GitHub releases page using the web_extract tool. The operation failed because the configured Brave Search (Free) backend only supports searching, not content extraction. An alternative extraction backend must be configured to proceed.

## Facts
- Target URL: https://github.com/willsigmon/bluebubbles-helper/releases/tag/v0.0.22-tahoe
- Current web backend: Brave Search (Free)
- Brave Search (Free) does not support URL content extraction
- Required fix: Set web.extract_backend to firecrawl, tavily, exa, or parallel

## Concepts
- web extraction
- backend configuration
- brave search limitations
- firecrawl
- tavily

_Importance: 4 · Confidence: 1_
