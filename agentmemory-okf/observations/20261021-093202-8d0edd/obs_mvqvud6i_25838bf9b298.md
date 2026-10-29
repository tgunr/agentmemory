---
type: file_write
title: Ollama pve Disable Script
description: Disabling Ollama Service
resource: agentmemory://observation/obs_mvqvud6i_25838bf9b298
tags: ["Disabling Ollama Service", "file_write"]
timestamp: 2026-10-27T16:11:07.959469+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 5
confidence: 0.9
---
# Summary

This script disables the Ollama service on pve root and verifies the change. It reverts the drop-in edit and model changes. It also checks what still references the old server port.

## Facts
- Written to /Users/davec/.hermes/profiles/systems/cache/scratch/nc30/ollama_disable_pve.sh

## Concepts
- Disabling Ollama Service

## Files
- `/Users/davec/.hermes/profiles/systems/cache/scratch/nc30/ollama_disable_pve.sh`

_Importance: 5 · Confidence: 0.9_
