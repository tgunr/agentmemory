---
type: file_edit
title: Updated Hermes desktop
description: Updated profile-scoped window with no projects for that profile showing "no projects" is correct behavior
resource: agentmemory://observation/obs_mvwwwm30_c8c1729e9269
tags: ["per-machine state", "profile-scoped windows", "gateway state", "file_edit"]
timestamp: 2026-10-31T21:27:29.480663+00:00
source: agentmemory
session_id: local-3e140115fa5d0f8d79b0b0d66a75b1a9bb9f93977fb8d92d9edb1f39b3fb3435
importance: 6
confidence: 0.9
---
# Summary

The tool call was a edit for the Hermes desktop and the observation noted that two windows on two gateways show different counts. The outcome is that the behavior is correct and the changes are per-machine. A probe was run without the UI and the exact HTTP routes were executed from a profile-scoped backend.

## Facts
- Gateway and desktop state are per-machine
- Profile-scoped window is displayed on two gateways

## Concepts
- per-machine state
- profile-scoped windows
- gateway state

## Files
- `references/statusbar-profiles-projects.md`

_Importance: 6 · Confidence: 0.9_
