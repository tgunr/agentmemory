---
type: file_edit
title: Fix session store mock in profile.test.ts
description: Remove vi.fn() wrapper from setConnection mock
resource: agentmemory://observation/obs_mrp30ena_b97ff54f8415
tags: ["vitest vi.mock", "store mocking", "unit test setup", "file_edit"]
timestamp: 2026-07-17T15:17:25.411219+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

Updated the session store mock so setConnection is used directly instead of wrapped in vi.fn(). This likely aligns the mock with the real export or with how the test expects setConnection to behave.

## Facts
- Edited /tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts
- Changed vi.mock for @/store/session from setConnection: vi.fn() to setConnection (passthrough)
- Patch applied successfully

## Concepts
- vitest vi.mock
- store mocking
- unit test setup

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts`

_Importance: 4 · Confidence: 1_
