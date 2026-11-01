---
type: file_edit
title: health files check
description: Running scripts in hermes-agent
resource: agentmemory://observation/obs_mvw8yqpg_37c8175d0b81
tags: ["health checking", "file_edit"]
timestamp: 2026-10-31T10:17:17.999868+00:00
source: agentmemory
session_id: local-b4f44b0edab54099e0baaee2f9270a776bfc2cecbea576c504c796d3bc88662a
importance: 5
confidence: 1
---
# Summary

The tool executed a script to check for health file issues. The output revealed 3 errors and confirmed none of the agent's files were flagged as problematic.

## Facts
- cd ~/.hermes/hermes-agent &&
- python scripts/check --only health 2>&1 |
- grep -E \"agent_init_ollama|test_ollama_num_ctx\" ||
- echo \"none of my files flagged\";
- python scripts/check --only ruff 2>&1 |
- grep -E \"^(-->|Found)\">

## Concepts
- health checking

_Importance: 5 · Confidence: 1_
