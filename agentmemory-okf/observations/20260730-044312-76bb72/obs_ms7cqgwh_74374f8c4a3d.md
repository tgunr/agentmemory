---
type: CommandRun
title: "desktop-ui-profile-pulse" skill update in Hermes Desktop
description: Troubleshooting and behavior for the Hermes Desktop profile rail "finished session" pulse indicator.
resource: agentmemory://observation/obs_ms7cqgwh_74374f8c4a3d
tags: ["commandrun"]
timestamp: 2026-07-30T10:09:29.101071+00:00
source: agentmemory
session_id: 20260730_044312_76bb72
importance: 8
confidence: 0.75
---
# Summary

A critical architectural decision was made to fix an issue in the Hermes Desktop profile rail pulse behavior. The update included changes to the `gateway-event.ts` file, moving the `runningChanged` handler outside the `if (apply)` block. This change allows busy transitions to reach all sessions, not just the active one.

## Facts
- The background session does not pulse when finished, even though the session is idle and waiting for input.

## Files
- `apps/desktop/src/app/session/hooks/use-message-stream/gateway-event.ts`

_Importance: 8 · Confidence: 0.75_
