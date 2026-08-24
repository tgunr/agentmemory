---
type: Observation
title: Terminal tool call to remove malformed models sub-tree and verify configuration
description: Called the terminal with a custom command to update and verify the Hermes configuration.
resource: agentmemory://observation/obs_msuui3re_677e7c0f7ece
tags: ["TurboQuant (MLX coder)", "YAML parsing", "observation"]
timestamp: 2026-08-15T20:45:33.957666+00:00
source: agentmemory
session_id: 20260815_145736_0c9749
importance: 5
confidence: 1
---
# Summary

The terminal tool was called with a custom command to remove the malformed models sub-tree from the configuration, set a new context length, verify the existing configuration, and perform a YAML parse check. These actions are crucial for maintaining the stability of the Hermes setup.

## Facts
- Set providers.turboquant.models = {} in /Users/davec/.hermes/config.yaml
- Set providers.turboquant.models.\"Qwen/Qwen2.5-Coder-14B\".context_length = 32768 in /Users/davec/.hermes/config.yaml
- Verified the Hermes configuration for TurboQuant (MLX coder) with successful parse and discovery results

## Concepts
- TurboQuant (MLX coder)
- YAML parsing

## Files
- `/Users/davec/.hermes/config.yaml`

_Importance: 5 · Confidence: 1_
