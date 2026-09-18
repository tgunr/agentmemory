---
type: Error
title: Web Extract Failed: Brave Search Backend Limitation
description: Attempted to extract BlueBubbles docs but backend doesn't support extraction
resource: agentmemory://observation/obs_mrqcgh7v_8f76030ce9ef
tags: ["web extraction", "backend configuration", "Hermes Agent", "BlueBubbles", "error"]
timestamp: 2026-07-18T12:29:37.960306+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The agent attempted to extract web content from the Hermes Agent BlueBubbles documentation. The operation failed because the configured Brave Search (Free) backend only supports searching, requiring a backend configuration change to enable content extraction.

## Facts
- Target URL: https://hermes-agent.nousresearch.com/docs/user-guide/messaging/bluebubbles
- Tool web_extract failed because Brave Search (Free) is a search-only backend.
- Fix requires setting web.extract_backend to firecrawl, tavily, exa, or parallel.

## Concepts
- web extraction
- backend configuration
- Hermes Agent
- BlueBubbles

_Importance: 4 · Confidence: 1_
