---
type: FileRead
title: sessions listing from /Users/davec/.hermes/profiles/*
description: List of sessions in profiles directories, including timestamps and owner staff IDs.
resource: agentmemory://observation/obs_mrw47k4n_a9f0560e96a3
tags: ["yarn or npm execution", "git log or git history", "profiling tools", "fileread"]
timestamp: 2026-07-22T13:25:21.955903+00:00
source: agentmemory
session_id: 20260722_082139_2ee6a2
importance: 4
confidence: 1
---
# Summary

The command <code>ls -la /Users/davec/.hermes/profiles/*/sessions 2>/dev/null; echo '---'; find /Users/davec/.hermes/profiles -maxdepth 2 -name '*.jsonl' 2>/dev/null | head -20</code> was executed with a timeout of 15 seconds.

## Facts
- Command executed: ls -la /Users/davec/.hermes/profiles/*/sessions 2>/dev/null; echo '---'; find /Users/davec/.hermes/profiles -maxdepth 2 -name '*.jsonl' 2>/dev/null | head -20
- This has the potential to impact profiling and analytics.
- Returned sessions data is 2728 files total.

## Concepts
- yarn or npm execution
- git log or git history
- profiling tools

_Importance: 4 · Confidence: 1_
