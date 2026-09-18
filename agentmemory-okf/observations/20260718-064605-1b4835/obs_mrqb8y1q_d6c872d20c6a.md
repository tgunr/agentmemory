---
type: Error
title: web_extract tool failed due to backend limitation
description: Cannot extract URL content with Brave Search Free backend
resource: agentmemory://observation/obs_mrqb8y1q_d6c872d20c6a
tags: ["web scraping", "API documentation access", "backend configuration", "error"]
timestamp: 2026-07-18T11:55:46.905617+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The web_extract tool failed when trying to fetch content from BlueBubbles-related URLs because the configured Brave Search Free backend only supports search functionality, not URL extraction. This prevents accessing the GitHub issue and private API documentation needed for the task.

## Facts
- Tool used: web_extract
- Attempted URLs: https://github.com/BlueBubblesApp/bluebubbles-server/issues/776 and https://docs.bluebubbles.app/private-api/installation
- Error: Brave Search (Free) is search-only and cannot extract URL content
- Solution suggested: Set web.extract_backend to firecrawl, tavily, exa, or parallel

## Concepts
- web scraping
- API documentation access
- backend configuration

## Files
- `https://github.com/BlueBubblesApp/bluebubbles-server/issues/776`
- `https://docs.bluebubbles.app/private-api/installation`

_Importance: 4 · Confidence: 1_
