---
type: FileRead
title: Retrieve Hermes connection JSON and route resume primary session resolvers
description: Read output from terminal command.
resource: agentmemory://observation/obs_msbx3zco_608310af1f1c
tags: ["fileread"]
timestamp: 2026-08-02T14:50:56.565602+00:00
source: agentmemory
session_id: 20260802_074724_a39284
importance: 5
confidence: 0.75
---
# Summary

The agent executed a terminal command to retrieve the Hermes connection JSON and find files related to primary session resolvers. The command used grep and head to process output from file.

## Facts
- Connection JSON mode set to local, remote mode with token auth.

## Files
- `/Users/davec/.hermes/hermes-agent/connection.json`
- `apps/desktop/src/app/session-picker-overlay.tsx`
- `apps/desktop/src/App/chat/sidebar/session-actions-menu.tsx`
- `/Library/Application Support/Hermes/connection.json`

_Importance: 5 · Confidence: 0.75_
