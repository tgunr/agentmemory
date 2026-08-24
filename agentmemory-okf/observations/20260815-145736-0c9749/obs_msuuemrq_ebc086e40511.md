---
type: FileRead
title: Bash shell executed Hermes tool
description: Sets configuration for TurboQuant API
resource: agentmemory://observation/obs_msuuemrq_ebc086e40511
tags: ["TurboQuant", "fileread"]
timestamp: 2026-08-15T20:42:51.971071+00:00
source: agentmemory
session_id: 20260815_145736_0c9749
importance: 7
confidence: 1
---
# Summary

The sys admin executed a series of Hermès commands to configure the TurboQuant API.

## Facts
- Sys admin ran command: which hermes && hermes --version 2>&1 | head -1\nhermes config set providers.turboquant.api \"http://127.0.0.1:8083/v1\" 2>&1 | tail -3
- Sys admin ran command: hermes config set providers.turboquant.api_key \"not-needed\" 2>&1 | tail -3
- Sys admin ran command: hermes config set providers.turboquant.default_model \"Qwen/Qwen2.5-Coder-14B\" 2>&1 | tail -3

## Concepts
- TurboQuant

_Importance: 7 · Confidence: 1_
