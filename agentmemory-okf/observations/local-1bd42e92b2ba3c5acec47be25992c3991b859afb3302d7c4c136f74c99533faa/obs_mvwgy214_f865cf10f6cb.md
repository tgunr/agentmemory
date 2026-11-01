---
type: FileRead
title: GPU price monitor v3 — robust retries + live Craigslist listings.
description: Script to parse GPU prices from multiple sources, including
    <strong>Craigslist</strong>, <strong>GPUDojo</strong>, and <strong>SecondHandSilicon</strong>.
resource: agentmemory://observation/obs_mvwgy214_f865cf10f6cb
tags: ["rate-limiting", "Craigslist API", "GPUDojo API", "SecondHandSilicon API", "fileread"]
timestamp: 2026-10-31T14:00:42.947747+00:00
source: agentmemory
session_id: local-1bd42e92b2ba3c5acec47be25992c3991b859afb3302d7c4c136f74c99533faa
importance: 8
confidence: 0.9
---
# Summary

This script uses multiple APIs to fetch GPU pricing data from various sources,
    including <strong>Craigslist</strong>, <strong>GPUDojo</strong>, and <strong>SecondHandSilicon</strong>.
    The fetching process involves retry mechanisms to handle rate-limits, ensuring that the
    data is accurate and up-to-date.

## Facts
- Craigslist search parameters must include query and sort options.
- The GPUDojo API uses retry mechanisms to handle rate-limits.

## Concepts
- rate-limiting
- Craigslist API
- GPUDojo API
- SecondHandSilicon API

## Files
- `/Users/davec/.hermes/profiles/ollama/scripts/gpu_price_monitor.sh`

_Importance: 8 · Confidence: 0.9_
