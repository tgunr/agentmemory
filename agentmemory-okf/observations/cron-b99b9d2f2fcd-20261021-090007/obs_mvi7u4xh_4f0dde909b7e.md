---
type: file_edit
title: GPU Price Monitoring Script Updates
description: EBAY and CRAIGLIST Scrape Methods Need Refining
resource: agentmemory://observation/obs_mvi7u4xh_4f0dde909b7e
tags: ["EBAY / CRAIGLIST scraping notes", "file_edit"]
timestamp: 2026-10-21T14:36:57.071353+00:00
source: agentmemory
session_id: cron_b99b9d2f2fcd_20261021_090007
importance: 8
confidence: 0.9
---
# Summary

The gpu_price_monitor.sh script has outdated eBay and Craigslist scrape methods. A refresher is needed to accurately fetch GPU price data.

## Facts
- Script's .cl-search-result regex for Craigslist and assumption that eBay is curl-only are stale.
- The gpu_price_monitor.sh script's <code>cl-static-search-result</code> regex for Craigslist is still targeting the old li.cl-static-search-result markup.

## Concepts
- EBAY / CRAIGLIST scraping notes

## Files
- `/Users/davec/.hermes/profiles/ollama/memories/gpu_price_monitor_browser_notes.md`

_Importance: 8 · Confidence: 0.9_
