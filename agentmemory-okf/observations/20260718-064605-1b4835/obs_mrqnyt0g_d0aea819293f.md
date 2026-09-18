---
type: Search
title: Search found 50 401 Unauthorized errors in bluebubbles gateway logs
description: Repeated authentication failures to 192.168.88.7:1234 in agent.log
resource: agentmemory://observation/obs_mrqnyt0g_d0aea819293f
tags: ["BlueBubbles gateway", "HTTP 401 Unauthorized error", "Credential validation", "Log analysis", "search"]
timestamp: 2026-07-18T17:51:48.829261+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Search of Hermes logs revealed persistent authentication failures with the BlueBubbles messaging gateway, where the system repeatedly attempts to ping a local server but receives 401 Unauthorized responses. This indicates the configured password may be invalid or the server requires different authentication credentials.

## Facts
- Search pattern matched "Unauthorized" in log entries
- All 50 matches occurred in /Users/davec/.hermes/logs/agent.log
- Errors show 401 Unauthorized for http://192.168.88.7:1234/api/v1/ping endpoint
- Password parameter "pmn2213" visible in URLs (potential credential exposure)
- Errors timestamped between 06:38:57 and 07:59:05 on 2026-07-18
- Repeated every ~5 minutes indicating regular health check attempts

## Concepts
- BlueBubbles gateway
- HTTP 401 Unauthorized error
- Credential validation
- Log analysis

## Files
- `/Users/davec/.hermes/logs/agent.log`

_Importance: 6 · Confidence: 1_
