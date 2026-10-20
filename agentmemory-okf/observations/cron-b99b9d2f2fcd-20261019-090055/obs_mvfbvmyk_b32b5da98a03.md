---
type: file_edit
title: Full craigslist run in list view, all 4 queries
description: Running a search query on Craigslist and processing the results
resource: agentmemory://observation/obs_mvfbvmyk_b32b5da98a03
tags: ["Craigslist search query", "JavaScript Document query", "file_edit"]
timestamp: 2026-10-19T14:06:47.016214+00:00
source: agentmemory
session_id: cron_b99b9d2f2fcd_20261019_090055
importance: 7
confidence: 0.9
---
# Summary

The tool browser_exec was used to execute a full Craigslist search query in list view. The extracted data included post titles, prices, and links. The query results were then processed and stored in a JSON file.

## Facts
- Queries: (\"rtx 3090\",  \"https://chicago.craigslist.org/search/sss?query=rtx+3090&sort=date\"), (\"rtx 4080\",  \"https://chicago.craigslist.org/search/sss?query=rtx+4080&sort=date\"), (\"tesla p40\", \"https://chicago.craigslist.org/search/sss?query=tesla+p40&sort=date\"), (\"rtx a4000\", \"https://chicago.craigslist.org/search/sss?query=rtx+a4000&sort=date\")
- Document selector: div.cl-search-result, li.cl-static-search-result

## Concepts
- Craigslist search query
- JavaScript Document query

## Files
- `/Users/davec/.hermes/profiles/ollama/cache/scratch/cl_final.json`

_Importance: 7 · Confidence: 0.9_
