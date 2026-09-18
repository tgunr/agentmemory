---
type: Error
title: Web search failed due to missing Brave API key
description: Attempted to search for duck recipes but BRAVE_SEARCH_API_KEY is not configured
resource: agentmemory://observation/obs_mrrr09yd_203c0b761ba3
tags: ["web search API", "environment variable configuration", "hermes CLI", "Brave Search API", "error"]
timestamp: 2026-07-19T12:04:42.466860+00:00
source: agentmemory
session_id: 20260719_070432_3968d6
importance: 4
confidence: 1
---
# Summary

A web search tool call was attempted but failed because the required Brave Search API key environment variable is missing. The agent needs to configure the API key using the hermes CLI to enable web search functionality.

## Facts
- Tool used: web_search
- Query attempted: "easy duck recipes family dinner"
- Error: BRAVE_SEARCH_API_KEY is not set
- Resolution: Set via hermes config set env.BRAVE_SEARCH_API_KEY

## Concepts
- web search API
- environment variable configuration
- hermes CLI
- Brave Search API

_Importance: 4 · Confidence: 1_
