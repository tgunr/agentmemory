---
type: file_edit
title: Invalid web_extract backend configuration
description: Error occurred while extracting data from web pages
resource: agentmemory://observation/obs_mvato71t_7fcf1677153f
tags: ["web_extract backend configuration", "search-only backend", "file_edit"]
timestamp: 2026-10-16T10:26:02.029967+00:00
source: agentmemory
session_id: 20261016_052544_912a20
importance: 7
confidence: 1
---
# Summary

The web_extract tool failed to execute due to an invalid backend configuration. The error message indicates that Brave Search (Free) cannot extract URL content. This may affect subsequent tool calls.

## Facts
- Tool used: web_extract
- Tool error: Brave Search (Free) is a search-only backend and cannot extract URL content.
- Error message: "web.extract_backend to firecrawl, tavily, keenable, exa, or parallel."
- URLs visited: https://kilo.ai/docs/desktop/troubleshooting, https://github.com/Kilo-Org/kilocode/issues?q=is%3Aissue+%22Configuring+Protocols%22, https://kilo.ai/docs/desktop/installation
- Error code: <unknown>

## Concepts
- web_extract backend configuration
- search-only backend

_Importance: 7 · Confidence: 1_
