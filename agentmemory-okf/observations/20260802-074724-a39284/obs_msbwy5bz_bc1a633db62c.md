---
type: FileRead
title: Total files found is zero, no results within specified glob search pattern
description: Making Hermes API queries on local project directory.
resource: agentmemory://observation/obs_msbwy5bz_bc1a633db62c
tags: ["fileread"]
timestamp: 2026-08-02T14:46:24.379397+00:00
source: agentmemory
session_id: 20260802_074724_a39284
importance: 6
confidence: 0.75
---
# Summary

The tool's 'search_files' method executed successfully but none of the specified file patterns were found. The zero total_count was likely returned due to one or more of these factors: a non-existent Hermes project directory, an invalid file glob pattern in search_files call, and/or permissions issue preventing read access into searched directory.

## Facts
- Negative total_count indicates failed find operation due to search glob criteria or Hermes Agent not being able to read file contents or path, or any possible errors related to the search files functionality.

_Importance: 6 · Confidence: 0.75_
