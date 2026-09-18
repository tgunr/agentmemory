---
type: Search
title: Search BlueBubbles server logs for errors and timeouts
description: Found 190 matches in main.log for helper/Send/AppleScript/crash/timeout patterns
resource: agentmemory://observation/obs_mrqccgv8_dfaf761e5d97
tags: ["log analysis", "error patterns", "BlueBubbles server", "message handling", "API errors", "search"]
timestamp: 2026-07-18T12:26:30.879790+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

Searched the BlueBubbles server main log file for error patterns, crashes, and timeouts. Found 190 matches showing normal server operations including message handling, API ping requests, and one 401 unauthorized error, but no crashes or timeouts visible in the results.

## Facts
- Searched /Users/davec/Library/Logs/bluebubbles-server/main.log
- Pattern: helper|Send|AppleScript|inject|crash|30|timeout|timed out
- Found 190 total matches
- Log contains API errors (401 Unauthorized), message events, ping requests
- Date range in logs: 2026-07-11
- No crashes or timeouts visible in truncated results

## Concepts
- log analysis
- error patterns
- BlueBubbles server
- message handling
- API errors

## Files
- `/Users/davec/Library/Logs/bluebubbles-server/main.log`

_Importance: 3 · Confidence: 1_
