---
type: file_edit
title: Failed search command
description: No query provided
resource: agentmemory://observation/obs_mvgew6th_8ef0598312fb
tags: ["command help", "search error handling", "file_edit"]
timestamp: 2026-10-20T08:18:57.791209+00:00
source: agentmemory
session_id: cron_df2ba22a5941_20261020_031756
importance: 4
confidence: 0.9
---
# Summary

The 'am search' command failed due to missing query parameters. The tool did not handle this error well, outputting only the basic help message, without any information about the actual error.

## Facts
- Search command: am search --source kilo --limit 3 2>&1 | tail -30
- Expected output: search results

## Concepts
- command help
- search error handling

_Importance: 4 · Confidence: 0.9_
