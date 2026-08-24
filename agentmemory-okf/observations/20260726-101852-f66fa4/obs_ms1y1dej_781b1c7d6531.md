---
type: Observation
title: Athropic API pricing docs
description: Failed to extract price info using Brave Search backend due to missing URL parsing capabilities.
resource: agentmemory://observation/obs_ms1y1dej_781b1c7d6531
tags: ["web extraction with URL parsing issue", "observation"]
timestamp: 2026-07-26T15:19:12.655144+00:00
source: agentmemory
session_id: 20260726_101852_f66fa4
importance: 6
confidence: 1
---
# Summary

The tool call to extract price info using the web extract function failed due to the Brave search backend not being able to parse URLs. The necessary update to switch to a supported backend needs to be applied.

## Facts
- Brave Search (Free) search-only backend used
- Lack of URL content extraction from Brave Search results
- necessary web Extract backend update required, with current backend being FireCrawl

## Concepts
- web extraction with URL parsing issue

_Importance: 6 · Confidence: 1_
