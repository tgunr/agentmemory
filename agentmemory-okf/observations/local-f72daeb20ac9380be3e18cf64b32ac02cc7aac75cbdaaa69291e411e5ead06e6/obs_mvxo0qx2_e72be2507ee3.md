---
type: CommandRun
title: Maintaining project tree state
description: No description provided
resource: agentmemory://observation/obs_mvxo0qx2_e72be2507ee3
tags: ["use Store", "react hooks", "commandrun"]
timestamp: 2026-11-01T10:06:32.003121+00:00
source: agentmemory
session_id: local-f72daeb20ac9380be3e18cf64b32ac02cc7aac75cbdaaa69291e411e5ead06e6
importance: 8
confidence: 0.9
---
# Summary

The state of the project tree is updated when subscribing to either <concept>sessions</concept> or <concept>projectTree</concept>, causing a wholesale re-render of the sidebar

## Facts
- State is reloaded upon subscribing to sessions and project tree

## Concepts
- use Store
- react hooks

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/projects.ts`

_Importance: 8 · Confidence: 0.9_
