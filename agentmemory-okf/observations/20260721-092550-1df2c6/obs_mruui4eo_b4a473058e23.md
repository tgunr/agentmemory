---
type: file_edit
title: hook-use-session-list-actions.ts
description: No specific context provided.
resource: agentmemory://observation/obs_mruui4eo_b4a473058e23
tags: ["file_edit"]
timestamp: 2026-07-21T16:05:52.457322+00:00
source: agentmemory
session_id: 20260721_092550_1df2c6
importance: 8
confidence: 0.75
---
# Summary

This hook provides two separate lists for recent chats/active sessions and stored sessions within a given profile scope, with corresponding hooks for fetching and refreshing the data. The useSessionListActions function returns callbacks that can be wired into the sidebar for these effects.

## Facts
- New feature added to useSessionListActions function
- Refactored cron session job logic and improvements

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-session-list-actions.ts`

_Importance: 8 · Confidence: 0.75_
