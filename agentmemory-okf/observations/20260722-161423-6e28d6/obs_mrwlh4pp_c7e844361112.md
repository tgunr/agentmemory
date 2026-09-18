---
type: Observation
title: Error with Brave Search backend
description: Failed extraction due to search-only limitations
resource: agentmemory://observation/obs_mrwlh4pp_c7e844361112
tags: ["search-only backend restrictions", "tool configuration options", "observation"]
timestamp: 2026-07-22T21:28:42.011125+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 5
confidence: 0.9
---
# Summary

The tool call failed with the error that Brave Search (Free) is not capable of extracting URL content. The issue was resolved by setting a valid backend, such as firecrawl or tavily.

## Facts
- Char limit set too high at 10000
- Backend Brave Search (Free) is a search-only backend and cannot extract URL content

## Concepts
- search-only backend restrictions
- tool configuration options

_Importance: 5 · Confidence: 0.9_
