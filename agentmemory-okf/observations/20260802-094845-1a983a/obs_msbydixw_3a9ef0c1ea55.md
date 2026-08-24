---
type: FileRead
title: agent initialization and compression setting application
description: No specific context provided
resource: agentmemory://observation/obs_msbydixw_3a9ef0c1ea55
tags: ["micro-compaction", "fileread"]
timestamp: 2026-08-02T15:26:21.471473+00:00
source: agentmemory
session_id: 20260802_094845_1a983a
importance: 7
confidence: 0.9
---
# Summary

The agent initializes and applies micro-compaction settings to the compressor. It also rejects models whose context window is below the minimum required for reliable tool-calling workflows.

## Facts
- Minimum context length for reliable tool-calling workflows is 64K tokens.

## Concepts
- micro-compaction

## Files
- `/Users/davec/.hermes/hermes-agent/agent/agent_init.py`

_Importance: 7 · Confidence: 0.9_
