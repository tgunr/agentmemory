---
type: Search
title: Locate BlueBubbles payload extraction helper
description: Search output was truncated before showing the requested definition
resource: agentmemory://observation/obs_mrqhuq1e_0339a6112f39
tags: ["payload extraction", "attachment error handling", "log redaction", "search"]
timestamp: 2026-07-18T15:00:40.655541+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 2
confidence: 1
---
# Summary

The search attempted to find the BlueBubbles payload-record extraction function, but truncation prevented its definition from being displayed. Nearby code confirms defensive attachment-download error handling and identifier redaction in logs.

## Facts
- Searched /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py for "def _extract_payload_record" with 14 lines of context.
- The result reported 29 lines and was truncated; visible lines 945-953 show attachment download failures being logged with a redacted GUID before returning None.
- The search hint recommends using offset=10 or narrowing the query to retrieve the remaining output.

## Concepts
- payload extraction
- attachment error handling
- log redaction

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 2 · Confidence: 1_
