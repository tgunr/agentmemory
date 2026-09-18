---
type: file_edit
title: Skill view tool usage
description: Integration of GitHub feature fork with the skill view tool for up-to-date information
resource: agentmemory://observation/obs_ms6qdn2h_76972bd7b870
tags: ["GitHub Fork", "Cherry-Pick Workflow", "Refactoring API Changes", "file_edit"]
timestamp: 2026-07-29T23:43:39.012053+00:00
source: agentmemory
session_id: 20260729_183908_b2df90
importance: 8
confidence: 0.9
---
# Summary

The skill view tool was used to integrate a GitHub feature fork with upstream changes while preserving local work by cherry-picking and adapting the commits. This process involved resolving conflicts and updating call sites, import paths, and exported names to adapt to the new upstream architecture.

## Facts
- Local feature serves the workflow, but isn't general-purpose enough.
- Upstream refactored (renamed stores, moved files, changed APIs) causing merge conflicts due to local baggage.

## Concepts
- GitHub Fork
- Cherry-Pick Workflow
- Refactoring API Changes

## Files
- `/.hermes/hermes-agent git log main --not upstream/main --one line | head -30`
- ``
- ``

_Importance: 8 · Confidence: 0.9_
