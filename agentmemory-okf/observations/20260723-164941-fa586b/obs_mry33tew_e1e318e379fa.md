---
type: file_edit
title: Hermes Desktop UI Profile Rail Pulse Behavior Update
description: Troubleshooting and behavior for the Hermes Desktop profile rail "finished session" pulse indicator.
resource: agentmemory://observation/obs_mry33tew_e1e318e379fa
tags: ["Reactive Hook Update", "file_edit"]
timestamp: 2026-07-23T22:30:00.097826+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 7
confidence: 0.9
---
# Summary

The pulse auto-decays cleared when user opens the session or switches to its profile. The fix ensures that the profile rail never shows a pulse if a backgrounded session finishes its turn.

## Facts
- Moved the `runningChanged` handler outside the `if (apply)` block to apply transitions to all sessions, not just the active one.

## Concepts
- Reactive Hook Update

## Files
- `apps/desktop/src/app/session/hooks/use-message-stream/gateway-event.ts`

_Importance: 7 · Confidence: 0.9_
