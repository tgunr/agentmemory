---
type: CommandRun
title: Typecheck errors in profile.test.ts, session-actions tests pass
description: Worktree validation for hermes profile fix
resource: agentmemory://observation/obs_mrp30xnw_1436fd2e3dc8
tags: ["TypeScript type errors", "profile store testing", "vitest jsdom testing", "worktree validation", "commandrun"]
timestamp: 2026-07-17T15:17:50.055099+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 6
confidence: 1
---
# Summary

Typecheck of the hermes-profile-fix worktree revealed 5 type errors in profile.test.ts where properties 'mode' and 'profile' are accessed on a type that resolves to empty object {}. The use-session-actions test suite passes all 13 tests cleanly, indicating the session hooks are not affected by the type issue isolated to the store tests.

## Facts
- 5 TypeScript errors in src/store/profile.test.ts: lines 83, 84, 95, 104, 115
- Errors are TS2339: Property 'mode'/'profile' does not exist on type '{}'
- use-session-actions test file passed all 13 tests in 37ms
- Test file: src/app/session/hooks/use-session-actions.test.tsx
- Total test duration: 968ms (transform 220ms, import 456ms, environment 409ms)
- Command exit code: 0 (despite typecheck errors, only filtered output shown)
- Working directory: /tmp/hermes-profile-fix/apps/desktop

## Concepts
- TypeScript type errors
- profile store testing
- vitest jsdom testing
- worktree validation

## Files
- `apps/desktop/src/store/profile.test.ts`
- `apps/desktop/src/app/session/hooks/use-session-actions.test.tsx`

_Importance: 6 · Confidence: 1_
