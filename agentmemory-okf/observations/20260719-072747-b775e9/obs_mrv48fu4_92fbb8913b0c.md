---
type: file_edit
title: Failed to Extract Web Content
description: Web extract failed due to Brave search backend issue.
resource: agentmemory://observation/obs_mrv48fu4_92fbb8913b0c
tags: ["firecrawl</context>
    <concept>tavily", "file_edit"]
timestamp: 2026-07-21T20:38:16.868053+00:00
source: agentmemory
session_id: 20260719_072747_b775e9
importance: 6
confidence: 0.9
---
# Summary

The tool attempted to extract content from two URLs with Brave Search's free backend. The extraction failed due to features limitations of this backend. Switching to an alternative extractor might help.

## Facts
- Brave Search (Free) is a search-only backend and cannot extract URL content.
- Solution: switch web.extract_backend to firecrawl, tavily, exa, or parallel.

## Concepts
- firecrawl</context>
    <concept>tavily

_Importance: 6 · Confidence: 0.9_
