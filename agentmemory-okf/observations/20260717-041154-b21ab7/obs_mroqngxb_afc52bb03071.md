---
type: CommandRun
title: Git stash failed; 4 failing suites ran on un-isolated tree
description: Attempted to test clean HEAD by stashing working changes, but pathspec errors aborted stash
resource: agentmemory://observation/obs_mroqngxb_afc52bb03071
tags: ["git stash pathspec", "untracked files", "vitest test runner", "exit code masking with pipes", "commandrun"]
timestamp: 2026-07-17T09:31:26.441785+00:00
source: agentmemory
session_id: 20260717_041154_b21ab7
importance: 5
confidence: 1
---
# Summary

The diagnostic command tried to isolate the four failing test suites against a clean repository HEAD by stashing all modified files, but two untracked files prevented the stash from being created. Because the stash failed, the subsequent test run executed against the unchanged working tree, and the final pop had nothing to restore.

## Facts
- Command attempted to stash src/eval/metrics-store.ts, src/functions/metrics.ts, src/index.ts, src/triggers/api.ts, src/types.ts, README.md, AGENTS.md, test/metrics-reset.test.ts, src/functions/observe.ts, test/auto-compress.test.ts
- Stash failed because src/functions/metrics.ts and test/metrics-reset.test.ts did not match any git pathspec (likely untracked/new files)
- No stash entry was created, so "git stash pop" reported "No stash entries found"
- Tests ran on the current working tree rather than the intended clean HEAD
- Vitest results: 4 failed test files, 10 failed tests, 21 passed tests, 31 total
- Exit code was 0 due to piped tail commands swallowing errors

## Concepts
- git stash pathspec
- untracked files
- vitest test runner
- exit code masking with pipes

## Files
- `src/eval/metrics-store.ts`
- `src/functions/metrics.ts`
- `src/index.ts`
- `src/triggers/api.ts`
- `src/types.ts`
- `src/functions/observe.ts`
- `test/metrics-reset.test.ts`
- `test/auto-compress.test.ts`
- `test/api-livez-flags.test.ts`
- `test/context-slots.test.ts`
- `test/embedding-provider.test.ts`
- `test/viewer-session-id.test.ts`
- `README.md`
- `AGENTS.md`

_Importance: 5 · Confidence: 1_
