---
type: FileRead
title: Tests for issue #2518 — cold-start /api/session/new slow path fallback.
description: client-side shape checks that the fallback is wired in newSession().
resource: agentmemory://observation/obs_mrukexys_1342dd8c81d6
tags: ["fileread"]
timestamp: 2026-07-21T11:23:27.981806+00:00
source: agentmemory
session_id: 20260721_061945_d50974
importance: 9
confidence: 0.5
---
# Summary

These tests pin the follow-up fix: newSession() falls back to window._activeProvider (boot-hydrated) and then the previous session's model_provider so the fast path is hit whenever a usable default exists.

## Files
- `/Users/davec/hermes-webui/tests/test_issue2518_active_provider_fallback.py`

_Importance: 9 · Confidence: 0.5_
