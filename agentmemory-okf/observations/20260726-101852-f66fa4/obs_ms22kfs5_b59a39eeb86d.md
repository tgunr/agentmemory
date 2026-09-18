---
type: Observation
title: Could not extract data from Brave Search
description: Error message about backend limitation
resource: agentmemory://observation/obs_ms22kfs5_b59a39eeb86d
tags: ["web_extract_backend_config", "search_backend_limitations", "observation"]
timestamp: 2026-07-26T17:26:00.675285+00:00
source: agentmemory
session_id: 20260726_101852_f66fa4
importance: 8
confidence: 0.9
---
# Summary

The tool call failed because Brave Search does not support URL content extraction. A new backend should be used to successfully execute the request.

## Facts
- Failed to use Brave Search as backend for web_extract due to limitations on content extraction
- Set web.extract_backend to firecrawl, tavily, exa, or parallel to resolve issue

## Concepts
- web_extract_backend_config
- search_backend_limitations

_Importance: 8 · Confidence: 0.9_
