---
type: FileRead
title: React hooks and session source management
description: Analyze React hooks in use-session-list-actions.ts and implications for session source management.
resource: agentmemory://observation/obs_mry2pn4u_5e768e9bfbeb
tags: ["React hooks", "session source management", "fileread"]
timestamp: 2026-07-23T22:18:58.776061+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 7
confidence: 0.9
---
# Summary

Analysis of use-session-list-actions.ts reveals the management of React hooks and session sources.

## Facts
- Importing necessary modules from {@@hermes} including hermes-agent, lib, store, and desktop-controller-utils
- The recents list is local-only: cron rows have their own section, and each messaging platform (telegram, discord, ...) is fetched separately into its own self-managed sidebar section (refreshMessagingSessions)

## Concepts
- React hooks
- session source management

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-session-list-actions.ts`

_Importance: 7 · Confidence: 0.9_
