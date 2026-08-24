---
type: file_write
title: Profile Pulse Not Showing for Background Sessions
description: The pulse doesn't work as expected in background profiles.
resource: agentmemory://observation/obs_mry2b40f_3e13f5cbba32
tags: ["file_write"]
timestamp: 2026-07-23T22:07:40.806973+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 8
confidence: 0.75
---
# Summary

The pulse doesn't show for background profiles because of a logical mistake. It has been fixed by making the `runningChanged` handling outside the `if (apply)` block.

## Facts
- Background sessions never received the busy state update due to incorrect gating logic.
- A change was made in apps/desktop/src/app/session/hooks/use-message-stream/gateway-event.ts to include all sessions in the busy state transition.

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/hermes-agent/references/profile-pulse-background-sessions.md`

_Importance: 8 · Confidence: 0.75_
