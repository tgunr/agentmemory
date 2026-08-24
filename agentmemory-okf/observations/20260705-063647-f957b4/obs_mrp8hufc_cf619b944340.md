---
type: FileRead
title: Read profile.test.ts setup and mocks (first 60 lines)
description: Vitest unit test setup for nanostores profile state management
resource: agentmemory://observation/obs_mrp8hufc_cf619b944340
tags: ["Vitest unit testing", "nanostores state management", "Module mocking and dynamic imports", "Desktop app window stubbing", "fileread"]
timestamp: 2026-07-17T17:50:57.094406+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

Read the first 60 lines of a Vitest test file for the desktop app's profile store. The setup mocks side-effecting dependencies like the gateway and REST client before dynamically importing the store modules to test nanostores state management.

## Facts
- File is 136 lines total; lines 1-60 were read.
- Uses Vitest and nanostores to test desktop profile state.
- Mocks side-effecting modules (gateway, hermes API, query-client, starmap) prior to dynamic imports.
- Includes helper factories for ProfileInfo and HermesConnection types.
- Stubs window.hermesDesktop.getConnection in the beforeEach hook.

## Concepts
- Vitest unit testing
- nanostores state management
- Module mocking and dynamic imports
- Desktop app window stubbing

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/profile.test.ts`

_Importance: 3 · Confidence: 1_
