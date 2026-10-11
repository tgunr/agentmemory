---
type: Observation
title: Live Probe with Auto Complete
description: Gateway API Probe
resource: agentmemory://observation/obs_mv0ofekb_2ddf73d6b231
tags: ["auto complete", "observation"]
timestamp: 2026-10-09T08:01:32.022915+00:00
source: agentmemory
session_id: 20261009_025220_855283
importance: 8
confidence: 1
---
# Summary

The terminal executed a command to probe the `kilo-auto/efficient` model via the Gateway API, receiving a response with model details.

## Facts
- Tool: terminal
- CMD: cd ~/.hermes\nset -a; . ~/.hermes/.env 2>/dev/null; set +a\necho "=== live probe: kilo-auto/efficient via gateway ==="
- CMD Continuation: curl -s -m 90 https://api.kilo.ai/api/gateway/chat/completions ... | python3

## Concepts
- auto complete

_Importance: 8 · Confidence: 1_
