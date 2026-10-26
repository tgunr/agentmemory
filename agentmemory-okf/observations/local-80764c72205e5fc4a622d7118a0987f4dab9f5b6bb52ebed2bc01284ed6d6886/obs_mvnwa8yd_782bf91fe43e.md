---
type: FileRead
title: GPU Price Monitor v3 — robust retries + live Craigslist listings.
description: Retrieve HTML source of GPUDojo and SecondHandSilicon listings for price analysis.
resource: agentmemory://observation/obs_mvnwa8yd_782bf91fe43e
tags: ["GPUDojo retry mechanism", "NVIDIA price databases", "Craigslist data extraction", "fileread"]
timestamp: 2026-10-25T14:00:10.450245+00:00
source: agentmemory
session_id: local-80764c72205e5fc4a622d7118a0987f4dab9f5b6bb52ebed2bc01284ed6d6886
importance: 5
confidence: 0.9
---
# Summary

The script fetches data from GPUDojo, SecondHandSilicon, and Craigslist to provide GPU pricing information.

## Facts
- GPUDojo uses a retry system to ensure reliable pricing data.
- SecondHandSilicon provides a database of averages for NVIDIA products.

## Concepts
- GPUDojo retry mechanism
- NVIDIA price databases
- Craigslist data extraction

## Files
- `/Users/davec/.hermes/profiles/ollama/scripts/gpu_price_monitor.sh`

_Importance: 5 · Confidence: 0.9_
