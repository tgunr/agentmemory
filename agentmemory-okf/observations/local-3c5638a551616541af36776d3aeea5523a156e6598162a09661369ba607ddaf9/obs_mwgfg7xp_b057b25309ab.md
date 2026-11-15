---
type: Observation
title: Web extract error from Prologue audiobook app
description: 
resource: agentmemory://observation/obs_mwgfg7xp_b057b25309ab
tags: ["web extract backend selection", "error handling in execute_code tool", "observation"]
timestamp: 2026-11-14T13:14:14.671182+00:00
source: agentmemory
session_id: local-3c5638a551616541af36776d3aeea5523a156e6598162a09661369ba607ddaf9
importance: 8
confidence: 0.9
---
# Summary

The execute_code tool failed to extract URL content from Prologue audiobook app due to an invalid web extract request. The error message indicates that the Brave Search (Free) backend is not capable of extracting content, suggesting the need to set the web.extract_backend parameter.

## Facts
- Brave Search (Free) is a search-only backend and cannot extract URL content. 
Set web.extract_backend to firecrawl, tavily, keenable, exa, or parallel.
- KeyError: 'results'

## Concepts
- web extract backend selection
- error handling in execute_code tool

## Files
- `/var/folders/hl/ls4hd0dx283_3btyvcf3wgt40000gn/T/hermes_kernel_qt_u6uf/hermes_kernel_runner.py`

_Importance: 8 · Confidence: 0.9_
