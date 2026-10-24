---
type: file_edit
title: web_extract error setting web_backend
description: No supported backend found for firecrawl
resource: agentmemory://observation/obs_mvl1fay1_575c74c6ad50
tags: ["web_extract_backend_error", "file_edit"]
timestamp: 2026-10-23T14:00:45.859961+00:00
source: agentmemory
session_id: local-65810db2c7e9563b86a8fb4597a2def1a6d4bb57a3bb903b51ef3405c78659a0
importance: 6
confidence: 0.9
---
# Summary

The tool web_extract failed because brave_search is not a backend that can extract URL content, and no suitable backend was selected. The recommended solution is to set the web.extract_backend to firecrawl, tavily, keenable, exa, or parallel.

## Facts
- brave_search_is_search_only

## Concepts
- web_extract_backend_error

_Importance: 6 · Confidence: 0.9_
