---
type: FileRead
title: Fast-jev context engine: verbatim, prune-only compaction for Hermes
description: select with ``context.engine: fast-jev``
resource: agentmemory://observation/obs_mvwbszdr_e8237c97e289
tags: ["React hooks", "fileread"]
timestamp: 2026-10-31T11:36:48.156316+00:00
source: agentmemory
session_id: local-b4f44b0edab54099e0baaee2f9270a776bfc2cecbea576c504c796d3bc88662a
importance: 9
confidence: 0.9
---
# Summary

Fast-jev context engine: verbatim, prune-only compaction for Hermes. Each question asks whether one tool call or the full output of that call still needs to stay in the history verbatim.

## Facts
- tool results never rewritten, only kept, truncated to a head, or removed together with their call
- history is the \"whole conversation so far, oldest first; tool outputs are replaced by a short `result` note

## Concepts
- React hooks

## Files
- `/Users/davec/.hermes/plugins/fast-jev/__init__.py`
- `/Users/davec/.hermes/plugins/fast-jev/test_engine.py`

_Importance: 9 · Confidence: 0.9_
