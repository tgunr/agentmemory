---
type: FileRead
title: web_extract tool failure due to Brave Search backend
description: Unable to extract content from GitHub API using Brave Search frontend
resource: agentmemory://observation/obs_msf1s9c5_17d5198e9ab1
tags: ["Brave Search limitation", "fileread"]
timestamp: 2026-08-04T19:25:06.241846+00:00
source: agentmemory
session_id: 20260804_141612_969e2e
importance: 5
confidence: 0.9
---
# Summary

web_extract tool failed to complete successfully due to Brave Search limitations. The operation was unable to extract content from the specified GitHub API URL.

## Facts
- Failed web_extract operation with error message: Brave Search (Free) is a search-only backend and cannot extract URL content.
- Expected back-end: firecrawl, tavily, exa, or parallel

## Concepts
- Brave Search limitation

_Importance: 5 · Confidence: 0.9_
