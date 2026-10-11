---
type: FileRead
title: GPU Price Monitor script
description: No context available
resource: agentmemory://observation/obs_mv2gpcn2_4d6c11955ae5
tags: ["Craigslist price scraping", "GPUDojo API", "eBay price scraping", "fileread"]
timestamp: 2026-10-10T14:00:51.514501+00:00
source: agentmemory
session_id: cron_b99b9d2f2fcd_20261010_090031
importance: 4
confidence: 0.9
---
# Summary

The GPU price monitor script reads local files and uses external APIs to fetch data on GPU prices, including Craigslist, GPUDojo, SecondHandSilicon, and eBay.
It includes retry logic for rate-limiting API calls and uses a Python script to parse HTML data.
The script also extracts listings from Craigslist live marketplaces and prints the results.

## Facts
- Craigslist and GPUDojo URLs extracted

## Concepts
- Craigslist price scraping
- GPUDojo API
- eBay price scraping

## Files
- `/home/user/.hermes/profiles/ollama/scripts/gpu_price_monitor.sh`

_Importance: 4 · Confidence: 0.9_
