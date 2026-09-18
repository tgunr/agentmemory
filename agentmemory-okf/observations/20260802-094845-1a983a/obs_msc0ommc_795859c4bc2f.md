---
type: file_edit
title: Edit local OpenAI-compatible inference servers with Hermes Agent
description: Configure local LLM servers and integrate custom providers for Apple FM, Ollama, vLLM, llama.cpp, and other macOS-native AI services.
resource: agentmemory://observation/obs_msc0ommc_795859c4bc2f
tags: ["file_edit"]
timestamp: 2026-08-02T16:30:58.686514+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 8
confidence: 0.75
---
# Summary

The tool, skill_view, made edits to a file containing local OpenAI-compatible inference servers configuration for Hermes Agent. It fixed parameter incompatibilities between LLM servers and modified developer role messages.

## Facts
- Server logs check for errors like 'reasoning_effort is only supported by the '' model
- Hermes transport layer can detect provider and skip unsupported parameters for Apple FM and other servers

## Files
- `/Users/username/local-model-providers(SKILL.md)`

_Importance: 8 · Confidence: 0.75_
