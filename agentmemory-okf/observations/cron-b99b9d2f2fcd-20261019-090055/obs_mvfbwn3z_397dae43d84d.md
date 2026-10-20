---
type: file_edit
title: Determine GPU prices
description: Ebay RTX 4090 price search
resource: agentmemory://observation/obs_mvfbwn3z_397dae43d84d
tags: ["python scripting", "ebay api", "python selenium", "file_edit"]
timestamp: 2026-10-19T14:07:33.882958+00:00
source: agentmemory
session_id: cron_b99b9d2f2fcd_20261019_090055
importance: 4
confidence: 0.9
---
# Summary

The script executes a search on Ebay for the latest RTX 4090 GPU prices and extracts the top 10 results, which are then printed to the console and written to the cache. The process is repeated for 3 attempts and the results are validated.

## Facts
- Post to cron job to run Python script on every 15 minutes to search for latest Nvidia prices

## Concepts
- python scripting
- ebay api
- python selenium

## Files
- `/Users/davec/.hermes/profiles/ollama/cache/scratch/ebay_4090.json`

_Importance: 4 · Confidence: 0.9_
