---
type: file_edit
title: Editing files in hermes-agent
description: Running grep and git commands in website/docs
resource: agentmemory://observation/obs_mvw8vi8z_72e85255cfb1
tags: ["ollama_num_ctx", "file_edit"]
timestamp: 2026-10-31T10:14:47.072588+00:00
source: agentmemory
session_id: local-b4f44b0edab54099e0baaee2f9270a776bfc2cecbea576c504c796d3bc88662a
importance: 8
confidence: 0.9
---
# Summary

Edited files in the hermes-agent, ran grep and git commands on website/docs, and reported output.

## Facts
- Running command: cd ~/.hermes/hermes-agent && grep -rln &quot;ollama_num_ctx&quot; website/docs | head; echo ===; git status --short
- Output: website/docs/integrations/providers.md\n===\n M agent/agent_init_ollama.py\n M tests/agent/test_ollama_num_ctx.py

## Concepts
- ollama_num_ctx

## Files
- `website/docs/integrations/providers.md`
- `agent/agent_init_ollama.py`
- `tests/agent/test_ollama_num_ctx.py`

_Importance: 8 · Confidence: 0.9_
