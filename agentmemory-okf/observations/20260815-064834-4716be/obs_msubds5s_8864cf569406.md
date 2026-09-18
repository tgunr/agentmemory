---
type: Error
title: warnings with Brave Search Backend
description: Cannot use Brave Search for extraction, try another backend
resource: agentmemory://observation/obs_msubds5s_8864cf569406
tags: ["web backend limitations", "error"]
timestamp: 2026-08-15T11:50:19.594824+00:00
source: agentmemory
session_id: 20260815_064834_4716be
importance: 8
confidence: 0.9
---
# Summary

The web_extract tool was unable to successfully extract data from the specified URLs due to limitations of the Brave Search backend. Consider switching to an alternative extraction back-end such as firecrawl, tavily, exa or parallel.

## Facts
- Brave Search (Free) is a search-only backend and cannot extract URL content.

## Concepts
- web backend limitations

_Importance: 8 · Confidence: 0.9_
