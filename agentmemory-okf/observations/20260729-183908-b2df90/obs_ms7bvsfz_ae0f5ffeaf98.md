---
type: CommandRun
title: Reset tools session to upstream/main after merge drift fix
description: User chose to discard local features, reset main branch.
resource: agentmemory://observation/obs_ms7bvsfz_ae0f5ffeaf98
tags: ["git reset", "Hermes desktop app", "merge drift", "commandrun"]
timestamp: 2026-07-30T09:45:37.723070+00:00
source: agentmemory
session_id: 20260729_183908_b2df90
importance: 8
confidence: 0.9
---
# Summary

A user reset the tools session to upstream/main after merge drift introduced several errors, which they resolved by resetting local features into the main branch.

## Facts
- Reset `main` to byte-identical with `upstream/main` using git. Successful build and Hermes launch on merged branch.

## Concepts
- git reset
- Hermes desktop app
- merge drift

## Files
- `references/session-2026-07-29b-reset-to-upstream.md`

_Importance: 8 · Confidence: 0.9_
