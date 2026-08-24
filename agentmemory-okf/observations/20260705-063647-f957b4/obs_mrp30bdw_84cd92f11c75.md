---
type: file_edit
title: Added setConnection mock function in profile.test.ts
description: Added vi.fn() mock wrapping $connection.set() for testing
resource: agentmemory://observation/obs_mrp30bdw_84cd92f11c75
tags: ["vitest mocking", "TypeScript type errors", "atom store testing", "file_edit"]
timestamp: 2026-07-17T15:17:21.185492+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

Added a vitest mock function setConnection to wrap $connection.set() calls in the test file. While the patch succeeded, it triggered TypeScript errors indicating that mocked objects are missing required properties 'mode' and 'profile', suggesting incomplete mock setup in the test.

## Facts
- Added setConnection = vi.fn((value: unknown) => $connection.set(value)) mock function
- File path: /tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts
- Patch operation mode was "replace"
- Edit successful but introduced 5 TypeScript errors on properties 'mode' and 'profile' not existing on type '{}'
- Errors at lines 81, 82, 93, 102, and 113

## Concepts
- vitest mocking
- TypeScript type errors
- atom store testing

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts`

_Importance: 5 · Confidence: 1_
