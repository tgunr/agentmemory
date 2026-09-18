---
type: file_edit
title: Test export endpoint comparison
description: No auth vs bearer
resource: agentmemory://observation/obs_mrvxvlk1_ee68438c89fc
tags: ["auth middleware", "file_edit"]
timestamp: 2026-07-22T10:28:06.235999+00:00
source: agentmemory
session_id: 20260722_052513_8901df
importance: 8
confidence: 1
---
# Summary

The export endpoint was tested using curl with no auth and with bearer. The python3 command then validated the output to show only one error key in a session with zero observers.

## Facts
- Curl output no auth: HTTP 401 size 24
- Curl output with bearer: HTTP 200 size 7141964
- Pandas json validation output: keys: ['error'], sessions: 0, observations: 0, memories: 0

## Concepts
- auth middleware

## Files
- `/tmp/am_export_test.json`

_Importance: 8 · Confidence: 1_
