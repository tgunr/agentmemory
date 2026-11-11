---
type: FileRead
title: Failed web extract call
description: Unsupported search backend
resource: agentmemory://observation/obs_mwajlidw_9289acf6d0cf
tags: ["web extract limitations", "fileread"]
timestamp: 2026-11-10T10:23:42.929362+00:00
source: agentmemory
session_id: local-8fbd041d09f9edb5c7a7c0bc00c2037c7a64b755e7393500bbed05918111ea58
importance: 7
confidence: 1
---
# Summary

Web extract call with Brave Search backend failed due to its limitations on extracting URL content. Consider using a different backend like firecrawl, tavily, keenable, exa, or parallel.

## Facts
- Tool: web_extract
- Input: { "urls": [ "https://help.gitkraken.com/gitkraken-client/searching/" ] }
- Output: { "success": false, "error": "Brave Search (Free) is a search-only backend and cannot extract URL content. Set web.extract_backend to firecrawl, tavily, keenable, exa, or parallel." }

## Concepts
- web extract limitations

_Importance: 7 · Confidence: 1_
