---
type: file_edit
title: "Adjust conversation compression threshold"
description: Modified threshold_tokens in agent/conversation_compression.py at line 1907
resource: agentmemory://observation/obs_mvw8uy3c_2e3a10570cba
tags: ["conversation compression", "file_edit"]
timestamp: 2026-10-31T10:14:20.948973+00:00
source: agentmemory
session_id: local-b4f44b0edab54099e0baaee2f9270a776bfc2cecbea576c504c796d3bc88662a
importance: 8
confidence: 0.9
---
# Summary

Modified thresholdTokens in conversation compression.py to lower the live threshold to the aux model’s window and to fix a config.

## Facts
- The summariser sends one user prompt...
- Recalculation of threshold_tokens done through update_model()...

## Concepts
- conversation compression

## Files
- `/home/user/hermes/hermes-agent/agent/conversation_compression.py`

_Importance: 8 · Confidence: 0.9_
