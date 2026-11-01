---
type: file_edit
title: Updating Hermes Terminal Agent
description: Running Vitest for shell hook
resource: agentmemory://observation/obs_mvxkulsz_b3023b475ed5
tags: ["Node warnings", "Vitest testing", "file_edit"]
timestamp: 2026-11-01T08:37:46.589827+00:00
source: agentmemory
session_id: local-40f125c7dcf5a5200018309668afa09f1e29e495c1917c03f1d063785e683000
importance: 7
confidence: 1
---
# Summary

Patched Hermes terminal agent using Vitest for shell hook, results in 23 tests passing.

## Facts
- ExperimentalWarning: localStorage is not available because --localstorage-file was not provided.
- Timeout: 590ms
- Command: npx vitest run --project ui src/app/shell/hooks/use-statusbar-items.test.tsx

## Concepts
- Node warnings
- Vitest testing

## Files
- `~/.hermes/hermes-agent/apps/desktop/.local/share/vitest`

_Importance: 7 · Confidence: 1_
