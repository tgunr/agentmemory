---
type: file_edit
title: Fix mock declarations in profile.test.ts
description: Reorganize atom declarations and add missing vi.mock calls
resource: agentmemory://observation/obs_mrp2zrrp_93207d72b3a9
tags: ["Vitest mocking", "Jotai atoms", "unit test setup", "TypeScript variable redeclaration", "vi.mock side-effect isolation", "file_edit"]
timestamp: 2026-07-17T15:16:55.760495+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

The agent attempted to fix mock declarations in a Vitest unit test file by consolidating atom declarations and adding missing vi.mock calls for query-client and starmap stores. However, TypeScript errors indicate duplicate variable declarations for $sessions and $connection still exist, requiring further correction.

## Facts
- Edited /private/tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts
- Moved $connection atom declaration to group with other Jotai atoms
- Removed duplicate $sessions declaration
- Added vi.mock for @/lib/query-client with invalidateQueries mock
- Added vi.mock for @/store/starmap with resetStarmapGraph mock
- LSP diagnostics show TypeScript errors: Cannot redeclare block-scoped variable '$sessions' and '$connection'
- File was previously read with partial view (offset/limit pagination warning)

## Concepts
- Vitest mocking
- Jotai atoms
- unit test setup
- TypeScript variable redeclaration
- vi.mock side-effect isolation

## Files
- `/private/tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts`

_Importance: 5 · Confidence: 1_
