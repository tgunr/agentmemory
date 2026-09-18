---
type: Observation
title: terminal
description: {"command":"B=http://127.0.0.1:11434/v1\necho \"### Ollama as OpenAI-compatible: chat completion speed test (qwen3:1.7b…
resource: agentmemory://observation/obs_mrtgk68j_acec7c3cb8fc
tags: ["observation"]
timestamp: 2026-07-20T16:47:47.344030+00:00
source: agentmemory
session_id: 20260720_094317_18534f
importance: 5
confidence: 0.3
---
# Summary

{"command":"B=http://127.0.0.1:11434/v1\necho \"### Ollama as OpenAI-compatible: chat completion speed test (qwen3:1.7b) ###\"\ntime curl -s -X POST \"$B/chat/completions\" -H 'Content-Type: application/json' \\\n  -d '{\"model\":\"qwen3:1.7b\",\"messages\":[{\"role\":\"user\",\"content\":\"reply with the single word: ok\"}],\"max_tokens\":8}' \\\n  | python3 -c \"import sys,json; print('resp:', …

_Importance: 5 · Confidence: 0.3_
