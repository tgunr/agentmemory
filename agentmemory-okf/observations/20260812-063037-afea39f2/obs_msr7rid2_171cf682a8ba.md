---
type: file_edit
title: Error checking github token
description: Invalid authentication request
resource: agentmemory://observation/obs_msr7rid2_171cf682a8ba
tags: ["auth failed", "file_edit"]
timestamp: 2026-08-13T07:45:43.089801+00:00
source: agentmemory
session_id: 20260812_063037_afea39f2
importance: 5
confidence: 0.9
---
# Summary

The tool failed to authenticate with the github repository.

## Facts
- Command executed: gh auth status 2>&1 | head -20; echo "---EXIT:$?---"

## Concepts
- auth failed

_Importance: 5 · Confidence: 0.9_
