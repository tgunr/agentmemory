---
type: file_edit
title: BlueBubbles Loop Diagnosis
Fix Hermes Gateway BlueBubbles Crash-Loop and Self-Echo
description: Diagnose Gemini Gateway BlueBubbles crash loop and self-echo, fix.
resource: agentmemory://observation/obs_msr68nn6_5bcb9fab0ecc
tags: ["gemini gateway bluebubbles self echo", "file_edit"]
timestamp: 2026-08-13T07:03:03.854279+00:00
source: agentmemory
session_id: 20260812_081748_d67311
importance: 5
confidence: 0.9
---
# Summary

Diagnose Gemini Gateway BlueBubbles crash loop and self-echo, fix Hermes gateway. 
Verify: tail -n 60 ~/.hermes/logs/gateway.log for exited UNCLELY (SIGKILL/OOM). Fix: delete exactly junk lines.

## Facts
- Non-Python text prepended to line 1 of a corrupted platform adapter module under ~/.hermes/hermes-agent/gateway/platforms/

## Concepts
- gemini gateway bluebubbles self echo

## Files
- `/home/user/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 5 · Confidence: 0.9_
