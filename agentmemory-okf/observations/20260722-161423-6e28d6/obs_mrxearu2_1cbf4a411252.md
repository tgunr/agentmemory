---
type: Observation
title: Pitfalls in routing and API calls
description: No specific context provided.
resource: agentmemory://observation/obs_mrxearu2_1cbf4a411252
tags: ["CLI shellquoting</content>
    <concept>Pitfalls in routing", "observation"]
timestamp: 2026-07-23T10:55:34.245013+00:00
source: agentmemory
session_id: 20260722_161423_6e28d6
importance: 8
confidence: 0.9
---
# Summary

The fix for the previous version of the skill addressed a shell-quoting issue and a routing bug, but new bugs were introduced. The Web UI still does not directly call functions, and the desktop app's model picker status bar can be used instead of "/model" to switch providers.

## Facts
- New bug fixes found in hermes-agent/cli.py::process_command and agent.skill_bundles.build_bundle_invocation_message.
    New bug fixes found in models.yaml regarding WebUI /route dispatch path
    New bug fixes found in models.yaml regarding Desktop /model picker overlay

## Concepts
- CLI shellquoting</content>
    <concept>Pitfalls in routing

## Files
- `//Users/davec/.hermes/skills/autonomous-ai-agents/model-selection-routing/SKILL.md`

_Importance: 8 · Confidence: 0.9_
