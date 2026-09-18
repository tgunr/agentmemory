---
type: file_write
title: Web Extract Tool Usage
description: Broke due to Brave search backend limitation
resource: agentmemory://observation/obs_mseqb3g0_1ad5c8fab47e
tags: ["search backend limitations", "web extraction", "file_write"]
timestamp: 2026-08-04T14:03:49.671832+00:00
source: agentmemory
session_id: 20260804_090117_7c84ed
importance: 4
confidence: 1
---
# Summary

The web_extract tool could not execute due to insufficient backend capabilities. Its default choice, Brave Search (Free), is a search-only backend that cannot extract content.

## Facts
- Timestamp: 2026-08-04T14:03:49.671832+00:00
- Invalid web extract backend chosen (Brave Search)
- Valid backends available are firecrawl, tavily, exa and parallel
- web.extract_backend configuration not set

## Concepts
- search backend limitations
- web extraction

_Importance: 4 · Confidence: 1_
