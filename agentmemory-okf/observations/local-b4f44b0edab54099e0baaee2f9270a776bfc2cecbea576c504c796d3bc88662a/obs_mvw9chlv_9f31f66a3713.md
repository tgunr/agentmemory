---
type: file_edit
title: Hermes auxiliary compression model on host pinning
description: Hermes configuration and code updates
resource: agentmemory://observation/obs_mvw9chlv_9f31f66a3713
tags: ["compression", "aux model", "kilocode", "context window", "gemini-3.6-flash", "kilo-auto/small", "threshold clamp", "file_edit"]
timestamp: 2026-10-31T10:27:59.388004+00:00
source: agentmemory
session_id: local-b4f44b0edab54099e0baaee2f9270a776bfc2cecbea576c504c796d3bc88662a
importance: 8
confidence: 0.9
---
# Summary

Hermes auxiliary compression model pinned to context_length 262144; escalation path on kilocode triggered

## Facts
- True catalog window; old 128K pin forced 128K compaction trigger
- Main window x compression.threshold

## Concepts
- compression
- aux model
- kilocode
- context window
- gemini-3.6-flash
- kilo-auto/small
- threshold clamp

## Files
- `~/.hermes/config.yaml`
- `~/.hermes/hermes-agent/agent/conversation_compression.py`
- `~/.hermes/hermes-agent/agent/context_compressor.py`

_Importance: 8 · Confidence: 0.9_
