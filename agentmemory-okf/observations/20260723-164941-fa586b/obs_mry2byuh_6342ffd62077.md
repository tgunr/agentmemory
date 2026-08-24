---
type: Observation
title: Edit skill profile rail pulse behavior, session working/finished states, and sidebar indicator
description: Troubleshooting and behavior for the Hermes Desktop profile rail "finished session" pulse indicator.
resource: agentmemory://observation/obs_mry2byuh_6342ffd62077
tags: ["SQL migration", "auth middleware", "observation"]
timestamp: 2026-07-23T22:08:20.770959+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 5
confidence: 0.9
---
# Summary

A fix was applied to move the `runningChanged` handler outside the `if (apply)` block in `use-message-stream/gateway-event.ts`, ensuring all sessions receive `busy: false` update.

## Facts
- The issue was due to `apply` block in `use-message-stream/gateway-event.ts` gated update of `running` state.
- This gated only updates for currently active/viewed session, but not for background sessions.

## Concepts
- SQL migration
- auth middleware

_Importance: 5 · Confidence: 0.9_
