---
type: FileRead
title: Swap llama.cpp server
description: 
resource: agentmemory://observation/obs_msbz0mul_d2bc8097ca96
tags: ["batch processing", "server management", "fileread"]
timestamp: 2026-08-02T15:44:19.625455+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 8
confidence: 1
---
# Summary

This script reads and swaps the GGUF (global GUID) for the current llama.cpp server with a new one. It updates the launchd plist to use the new file.

## Facts
- Total number of lines in the script is 97.
- The script uses bash and has a usage message section.
- The available models are: llama3.2:3b, qwen3:14b, qwen3-coder:18b, deepseek-coder-v2:16b, devstral:latest.

## Concepts
- batch processing
- server management

## Files
- `/Users/davec/.hermes/scripts/swap-llamacpp-model.sh`

_Importance: 8 · Confidence: 1_
