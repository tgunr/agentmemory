---
type: Error
title: web_extract failed due to backend limitations
description: Brave Search (Free) does not support URL content extraction
resource: agentmemory://observation/obs_mrrr3ldo_d94ab20ea65c
tags: ["web extraction", "backend configuration", "Brave Search API limitations", "firecrawl", "tavily", "error"]
timestamp: 2026-07-19T12:07:17.241379+00:00
source: agentmemory
session_id: 20260719_070432_3968d6
importance: 4
confidence: 1
---
# Summary

The agent attempted to extract content from two recipe URLs using the web_extract tool, but the operation failed. The failure occurred because the active backend, Brave Search (Free), only supports search operations. To resolve this, the web.extract_backend configuration must be updated to a supported extraction backend.

## Facts
- Target URLs: https://www.allrecipes.com/gallery/duck-recipes/ and https://www.bonappetit.com/gallery/easy-duck-recipes
- web.extract_backend is currently configured to use Brave Search (Free)
- Brave Search (Free) is restricted to search-only operations and cannot extract content
- Resolution requires setting web.extract_backend to firecrawl, tavily, exa, or parallel

## Concepts
- web extraction
- backend configuration
- Brave Search API limitations
- firecrawl
- tavily

_Importance: 4 · Confidence: 1_
