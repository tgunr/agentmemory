---
type: CommandRun
title: Check hermes gateway processes and configuration status
description: Verify running gateway processes have correct environment flags and connections
resource: agentmemory://observation/obs_mrriyrj2_892180e256d2
tags: ["process management", "environment variables", "messaging gateway", "bluebubbles webhook", "commandrun"]
timestamp: 2026-07-19T08:19:35.004349+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

Executed diagnostic commands to verify hermes gateway configuration. The main gateway process is running with correct security settings (ALLOW_ALL_USERS=false) and has successfully established connections to all three messaging platforms (Telegram, Email, BlueBubbles) with webhook registration active.

## Facts
- Found 5 hermes gateway processes (PIDs: 15662, 21084, 22857, 25379, 30806)
- Main gateway started Sun Jul 19 03:05:19 2026 with session-key 20260719_030519_80ab6a
- BLUEBUBBLES_ALLOW_ALL_USERS=false confirmed in running process environment
- Allowed users: +193****0811, 19364420811, 9364420811
- Gateway successfully connected to telegram, email, and bluebubbles platforms
- BlueBubbles webhook registered on http://192.168.88.7:8645/bluebubbles-webhook

## Concepts
- process management
- environment variables
- messaging gateway
- bluebubbles webhook

## Files
- `/Users/davec/.hermes/logs/gateway.log`

_Importance: 4 · Confidence: 1_
