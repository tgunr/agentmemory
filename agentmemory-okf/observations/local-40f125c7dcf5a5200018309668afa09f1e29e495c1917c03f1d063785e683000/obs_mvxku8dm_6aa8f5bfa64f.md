---
type: file_edit
title: Running test in desktop app
description: Executing Vitest test in shell
resource: agentmemory://observation/obs_mvxku8dm_6aa8f5bfa64f
tags: ["unit testing", "file_edit"]
timestamp: 2026-11-01T08:37:29.185317+00:00
source: agentmemory
session_id: local-40f125c7dcf5a5200018309668afa09f1e29e495c1917c03f1d063785e683000
importance: 5
confidence: 0.9
---
# Summary

Running a Vitest test in the desktop app's shell. The test passes with 22 of 23 tests.

## Facts
- Tool used: terminal
- Command: cd ~/.hermes/hermes-agent/apps/desktop && export PATH=/opt/homebrew/bin:$PATH && npx vitest run --project ui src/app/shell/hooks/use-statusbar-items.test.tsx 2>&1 | tail -18

## Concepts
- unit testing

## Files
- `src/app/shell/hooks/use-statusbar-items.test.tsx`

_Importance: 5 · Confidence: 0.9_
