---
type: FileRead
title: Route and Model Output Contract
description: 
resource: agentmemory://observation/obs_mrxebemq_739aefc63159
tags: ["fileread"]
timestamp: 2026-07-23T10:56:03.790461+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 7
confidence: 0.75
---
# Summary

The /route command provides a manual route, but it does not switch the model. Users must switch models themselves. There are several pitfalls to be aware of when using /route, including an old CLI shell-quoting bug and web dispatch issues.

## Facts
- Router defaults to target tier 1 for cheap tasks
- Prompt wrapping bug fixed in hemesa-agent/cli.py::process_command

## Files
- `/Users/davec/.hermes/skills/autonomous-ai-agents/model-selection-routing/SKILL.md`

_Importance: 7 · Confidence: 0.75_
