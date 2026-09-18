---
type: CommandRun
title: Investigate BlueBubbles echo window and webhook registration
description: Checking _norm_text, echo prevention, and webhook status for double delivery issue
resource: agentmemory://observation/obs_mrrpe96a_f0645ddddd10
tags: ["echo prevention", "self-loop guard", "text normalization", "webhook registration", "gateway diagnostics", "commandrun"]
timestamp: 2026-07-19T11:19:35.405314+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Executed diagnostic code to investigate potential double delivery in BlueBubbles. Confirmed the echo prevention window is 30 seconds and reviewed text normalization logic, but the webhook registration endpoint returned "Not Found". Gateway logs indicate normal startup without immediate errors.

## Facts
- BlueBubbles echo window (_sent_text_window) is configured to 30.0 seconds
- _norm_text normalizes strings by stripping, lowercasing, and collapsing whitespace via regex
- Self-loop guard tracks _sent_guids (max 500) and _sent_texts to prevent Tahoe echo loops
- BlueBubbles webhook API (localhost:1234) returned "Not Found" for registered webhooks query
- Gateway logs show clean startup sequence at 06:10:52 connecting to email and Telegram

## Concepts
- echo prevention
- self-loop guard
- text normalization
- webhook registration
- gateway diagnostics

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`
- `/Users/davec/.hermes/logs/gateway.log`

_Importance: 5 · Confidence: 1_
