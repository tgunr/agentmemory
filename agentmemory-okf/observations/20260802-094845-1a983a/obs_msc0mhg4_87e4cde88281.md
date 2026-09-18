---
type: file_edit
title: Negotiating local OpenAI-compatible inference servers with Hermes
description: a tutorial providing guidance on setting up and customising local models for inference via Apple FM, Ollama vLLM, lava.cpp, or similar compatible systems using skills like config Local Model Providers
resource: agentmemory://observation/obs_msc0mhg4_87e4cde88281
tags: ["parameter incompatibilities", "mapping developer-role messages to system for GPT-5 models", "file_edit"]
timestamp: 2026-08-02T16:29:18.669445+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 7
confidence: 0.9
---
# Summary

In this skill, learn how to set up local OpenAI-compatible inference servers utilising Apple FM, Ollama vLLM, lava.cpp and configure and handle potential parameter inconsistencies. This tutorial demonstrates common solutions to detection and skipping of unsupported parameters in Hermes configuration files.

## Facts
- Apple FM supports reasoning parameters, whereas some servers reject them with HTTP 400 error.
- The Hermes transport layer can skip unsupported parameters if the provider is detected.

## Concepts
- parameter incompatibilities
- mapping developer-role messages to system for GPT-5 models

## Files
- `/home/agent/config.yaml`
- `/usr/bin/ollama serve`
- `/usr/bin/python -m vllm.entrypoints.openai.api_server`

_Importance: 7 · Confidence: 0.9_
