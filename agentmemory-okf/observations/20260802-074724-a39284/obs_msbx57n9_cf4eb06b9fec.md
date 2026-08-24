---
type: FileRead
title: Code snippet from session.ts
description: No relevant context available
resource: agentmemory://observation/obs_msbx57n9_cf4eb06b9fec
tags: ["fileread"]
timestamp: 2026-08-02T14:51:53.969348+00:00
source: agentmemory
session_id: 20260802_074724_a39284
importance: 8
confidence: 0.75
---
# Summary

The code implements a reminder function to restore a user's session, even when switching profiles. The last non-overlay route and remembered session id are scoped globally for a single route with every profile. A fallback is used if the route does not exist or has expired.

## Facts
- A single global key remembered for one session across every profile.

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/session.ts`

_Importance: 8 · Confidence: 0.75_
