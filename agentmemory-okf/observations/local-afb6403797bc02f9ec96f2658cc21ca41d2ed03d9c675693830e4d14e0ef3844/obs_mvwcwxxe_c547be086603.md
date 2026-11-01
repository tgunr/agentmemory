---
type: file_edit
title: Updated project tsconfig.json detected
description: No lint errors reported
resource: agentmemory://observation/obs_mvwcwxxe_c547be086603
tags: ["Single-file tsc", "tscconfig.json", "file_edit"]
timestamp: 2026-10-31T12:07:52.508089+00:00
source: agentmemory
session_id: local-afb6403797bc02f9ec96f2658cc21ca41d2ed03d9c675693830e4d14e0ef3844
importance: 8
confidence: 0.9
---
# Summary

User updated a project file, triggering lint and file updates. Lint skipped due to single-file tsc.

## Facts
- A shared/canonical owner keeps a session's workspace behind its own mutation RPC, so these local verbs are missing there;
- project tsconfig.json detected — per-file tsc skipped

## Concepts
- Single-file tsc
- tscconfig.json

## Files
- `/Users/davec/.hermes/hermes-agent/ui-tui/src/app/slash/commands/projects.ts`

_Importance: 8 · Confidence: 0.9_
