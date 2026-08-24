---
type: file_edit
title: Ran command in hermes gateway
description: Succesfully restarted gateway
resource: agentmemory://observation/obs_msr6k4uf_76c7a1c46f29
tags: ["file_edit"]
timestamp: 2026-08-13T07:11:59.363116+00:00
source: agentmemory
session_id: 20260812_081748_d67311
importance: 7
confidence: 0.75
---
# Summary

Ran command in hermes, resulting in an error due to blocked execution of gateway process. Should consider running from a separate shell.

## Facts
- Command executed by davec (~/.hermes/hermes-agent/venv/bin/python)
- Error blocking restart: blocked script cannot run

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 7 · Confidence: 0.75_
