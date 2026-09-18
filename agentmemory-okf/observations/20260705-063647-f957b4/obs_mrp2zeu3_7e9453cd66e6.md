---
type: file_edit
title: Refactor vi.mock setup in profile test to hoist atoms
description: Simplify mock factory by hoisting nanostores atoms to module scope
resource: agentmemory://observation/obs_mrp2zeu3_7e9453cd66e6
tags: ["vi.mock hoisting", "nanostores atom", "Vitest mocking patterns", "dynamic import in test setup", "top-level await", "file_edit"]
timestamp: 2026-07-17T15:16:38.998727+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

The edit restructured vi.mock setup in a profile test file by hoisting $sessions and $connection nanostores atoms to module scope, eliminating the need for a dynamic import inside the mock factory function. This simplifies the mock but introduced a TypeScript error where an await expression is used outside an async context, likely from the remaining `await import('./profile')` and `await import('./session')` calls.

## Facts
- Replaced async dynamic `await import('nanostores')` inside vi.mock factory with module-level `$sessions` and `$connection` atom declarations
- Removed vi.mock calls for `@/lib/query-client` and `@/store/starmap`
- Simplified `@/store/session` mock from multi-line factory to single-line object literal
- LSP error introduced: 'await' expressions are only allowed within async functions and at the top levels of modules at line 25:20
- File is a Vitest test for the profile store module

## Concepts
- vi.mock hoisting
- nanostores atom
- Vitest mocking patterns
- dynamic import in test setup
- top-level await

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts`

_Importance: 5 · Confidence: 1_
