---
type: CommandRun
title: Runtime error in Hermes Desktop
description: A backend responds with a 404 session not found.
resource: agentmemory://observation/obs_msbxh0hs_cd53df24490b
tags: ["stale persisted last session id", "commandrun"]
timestamp: 2026-08-02T15:01:04.569891+00:00
source: agentmemory
session_id: 20260802_074724_a39284
importance: 5
confidence: 0.9
---
# Summary

The HMS launched fine but threw an exception when trying to launch due to a stale Session not found response. The fix was in `resolveStoredSession()` and has been applied + tested. We are investigating this as it will continue 3 times on boot; we should find the cause.

## Facts
- The desktop launches cleanly, but the backend returns a session not found response.

## Concepts
- stale persisted last session id

_Importance: 5 · Confidence: 0.9_
