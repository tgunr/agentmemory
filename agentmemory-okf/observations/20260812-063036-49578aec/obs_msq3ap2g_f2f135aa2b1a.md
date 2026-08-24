---
type: Observation
title: parked-session-behavior creation error
description: A description that exceeds the char limit, truncated.
resource: agentmemory://observation/obs_msq3ap2g_f2f135aa2b1a
tags: ["description limit", "observation"]
timestamp: 2026-08-12T12:52:53.988880+00:00
source: agentmemory
session_id: 20260812_063036_49578aec
importance: 4
confidence: 0.9
---
# Summary

The tool fails on creating a behavior skill due to its long description, indicating that details should be moved within the prompt itself.

## Facts
- Description is 161 chars — new skills must fit the 60-char system-prompt budget...

## Concepts
- description limit

_Importance: 4 · Confidence: 0.9_
