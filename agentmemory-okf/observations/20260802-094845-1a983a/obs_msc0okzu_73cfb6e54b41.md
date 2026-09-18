---
type: file_write
title: Model Selection & Runtime Swapping (Mac M4/32GB)
description: Serving Ollama GGUFs through llama-server (no re-download)
resource: agentmemory://observation/obs_msc0okzu_73cfb6e54b41
tags: ["Runtime model swapping", "file_write"]
timestamp: 2026-08-02T16:30:56.580200+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 8
confidence: 0.9
---
# Summary

Tools were invoked with llamacpp-swap and bash commands to swap between models. The `/llamacpp-swap` quick command uses a script invocation that updates the launchd plist, Hermes config, and launches a fresh server.

## Facts
- llama stores models as raw GGUF blobs under `~/.ollama/models/blobs/sha256-*`
- A symlink to the model blob is created in `~/.cache/llama/`, which is used by `llama-server --model` at the symlink.

## Concepts
- Runtime model swapping

## Files
- `/Users/davec/.hermes/profiles/ai/skills/autonomous-ai-agents/local-model-providers/references/llamacpp-model-selection.md`

_Importance: 8 · Confidence: 0.9_
