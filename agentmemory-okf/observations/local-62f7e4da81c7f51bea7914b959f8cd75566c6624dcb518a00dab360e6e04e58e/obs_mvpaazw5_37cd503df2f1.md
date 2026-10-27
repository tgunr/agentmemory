---
type: CommandRun
title: Hermes Agent Error
description: Agent error in session agent:main:local:dm:local-77eea3fc22f52e28fb356f6122cf3436eb29e5a7676a9e65a8b5ab998c439c48
resource: agentmemory://observation/obs_mvpaazw5_37cd503df2f1
tags: ["Model context window不足", "commandrun"]
timestamp: 2026-10-26T13:20:26.162142+00:00
source: agentmemory
session_id: local-62f7e4da81c7f51bea7914b959f8cd75566c6624dcb518a00dab360e6e04e58e
importance: 7
confidence: 0.9
---
# Summary

The Hermes Agent encountered an error due to a limited context window in the aion-labs/aion-rp-llama-3.1-8b model.

## Facts
- Aion-labs/aion-rp-llama-3.1-8b has a context window of 32,768 tokens, which is below the minimum 64,000 required by Hermes Agent.

## Concepts
- Model context window不足

_Importance: 7 · Confidence: 0.9_
