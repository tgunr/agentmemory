---
type: file_edit
title: Add context length to Ollama provider config
description: Update hermes profile using # command
resource: agentmemory://observation/obs_msby6nce_1ba7d428cc15
tags: ["Ollama provider configuration", "hermes config command", "file_edit"]
timestamp: 2026-08-02T15:21:00.585954+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 6
confidence: 0.9
---
# Summary

The user ran a special command in the terminal to edit the context length for the Ollama provider.

## Facts
- User ran `# Also add context_length to default Ollama provider (it may not have one)\nhermes config set --profile ai providers.ollama-launch.context_length 65536 --force 2>&1\necho "Done"`

## Concepts
- Ollama provider configuration
- hermes config command

_Importance: 6 · Confidence: 0.9_
