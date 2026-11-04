---
type: file_edit
title: cd into /tmp/voipboot, run Python script
description: fetch CDR data from Python script
resource: agentmemory://observation/obs_mw0w5d31_e26edeabd47f
tags: ["file_edit"]
timestamp: 2026-11-03T16:17:22.809360+00:00
source: agentmemory
session_id: local-6e9812324396b2091d17e9810b88c985c73260ca4c7357481846e1475ddcc7c9
importance: 4
confidence: 0.75
---
# Summary

The tool (python) executed a command to fetch CDR data, but it encountered an error with an invalid timezone.

## Facts
- Command executed: cd /tmp/voipboot && python3 vapi.py getCDR date_from=2026-11-03 date_to=2026-11-03 failed=1 2>&1 | head -30
- Output: { "status": "invalid_timezone", "message": "This is not a valid TimezoneCDR and resellerCDR: Must be numeric Voicemail: Values from getTimezone" }

## Files
- `/tmp/voipboot/vapi.py`

_Importance: 4 · Confidence: 0.75_
