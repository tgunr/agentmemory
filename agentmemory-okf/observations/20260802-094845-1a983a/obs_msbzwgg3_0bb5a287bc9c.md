---
type: file_edit
title: Test Hermes with codestral:latest via Ollama
description: Reverse a string using hermes agent
resource: agentmemory://observation/obs_msbzwgg3_0bb5a287bc9c
tags: ["context_window_minimum", "hermes_agent", "codestral_model</combatasegment>", "file_edit"]
timestamp: 2026-08-02T16:09:04.319692+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 5
confidence: 0.9
---
# Summary

The test execution failed due to a model's context window being too small. The actual output was empty.

## Facts
- Model codestral:latest has a context window of 32,768 tokens, which is below the minimum 64,000 required by Hermes Agent.

## Concepts
- context_window_minimum
- hermes_agent
- codestral_model</combatasegment>

_Importance: 5 · Confidence: 0.9_
