---
type: FileRead
title: Parked Session Behavior
description: 
resource: agentmemory://observation/obs_msr6eskj_336b02fb0230
tags: ["parked-session-behavior", "scaffolding-only-turns", "session-meta-messages", "fileread"]
timestamp: 2026-08-13T07:07:50.173594+00:00
source: agentmemory
session_id: 20260812_063037_afea39f2
importance: 4
confidence: 0.9
---
# Summary

A turn arrival that contains ONLY system scaffolding, redirect wrappers, interrupt notices, or gateway status messages is considered a parked session.
  These meta-messages are not work requests but rather session information. 
  To stay parked without giving unnecessary feedback, one should acknowledge the received message briefly while waiting for a real task. If the turn satisfies both rules, it's a success.

## Facts
- Emit a minimal honest acknowledgment such as &quot;Parked. Standing by for an actual task or correction.&quot;
- A turn is parked if it has no verb, no question, no deliverable, no file path, no URL, no command, and no explicit &quot;do X&quot;.

## Concepts
- parked-session-behavior
- scaffolding-only-turns
- session-meta-messages

_Importance: 4 · Confidence: 0.9_
