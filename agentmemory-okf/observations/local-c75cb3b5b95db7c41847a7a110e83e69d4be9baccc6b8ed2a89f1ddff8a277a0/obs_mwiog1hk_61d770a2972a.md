---
type: file_edit
title: NextCloud calendar list events failed
description: Error fetching personal calendar events for Nov 16-17
resource: agentmemory://observation/obs_mwiog1hk_61d770a2972a
tags: ["NextCloud API error handling", "Event retrieval from calendar", "file_edit"]
timestamp: 2026-11-16T03:01:35.236367+00:00
source: agentmemory
session_id: local-c75cb3b5b95db7c41847a7a110e83e69d4be9baccc6b8ed2a89f1ddff8a277a0
importance: 5
confidence: 1
---
# Summary

The mcp_NextCloud_calendar_list_events tool failed to fetch personal calendar events due to an error.

## Facts
- Tool: mcp__NextCloud__calendar_list_events
- Input query: {"calendar": "personal", "from": "2026-11-16", "to": "2026-11-17"}
- Output: {"error": "Calendar or event not found."}

## Concepts
- NextCloud API error handling
- Event retrieval from calendar

_Importance: 5 · Confidence: 1_
