---
type: file_edit
title: Config context length for runtime
description: No context length for startup runtime
resource: agentmemory://observation/obs_mvpac6jq_934d2139de02
tags: ["config_context_length", "file_edit"]
timestamp: 2026-10-26T13:21:21.443005+00:00
source: agentmemory
session_id: local-62f7e4da81c7f51bea7914b959f8cd75566c6624dcb518a00dab360e6e04e58e
importance: 8
confidence: 0.9
---
# Summary

Read the durable model.context_length pin for the current runtime, or None

## Facts
- Model context length pin is stored on every cached copy
- The model context length pin is reused in various functions

## Concepts
- config_context_length

## Files
- `agent/agent_init.py`

_Importance: 8 · Confidence: 0.9_
