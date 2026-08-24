---
type: file_edit
title: Edited projects.ts file
description: Inspected auto-project and no-project handling in project store
resource: agentmemory://observation/obs_ms7btay6_ceaf012e4e5b
tags: ["auto-project handling", "NoProjectId", "file_edit"]
timestamp: 2026-07-30T09:43:41.738950+00:00
source: agentmemory
session_id: 20260729_183908_b2df90
importance: 8
confidence: 0.9
---
# Summary

Inspected handling of auto-projects and no-projects in project store, found potential improvements for auto-project handling.

## Facts
- Terminal command: cd ~/.hermes/hermes-agent/apps/desktop && grep -n "Home|NO_PROJECT idols are filesystem paths" src/store/projects.ts | head -30

## Concepts
- auto-project handling
- NoProjectId

## Files
- `/home/hermes-agent/apps/desktop/src/store/projects.ts`

_Importance: 8 · Confidence: 0.9_
