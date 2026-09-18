---
type: FileRead
title: Read profile store unit test setup
description: First 32 lines of profile.test.ts showing Vitest mocks
resource: agentmemory://observation/obs_mrp2zume_7695f2e12c4d
tags: ["Vitest unit testing", "Nanostores state management", "Dependency mocking", "Side-effect isolation", "fileread"]
timestamp: 2026-07-17T15:16:59.458195+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

Read the first 32 lines of the profile store test file to understand its setup and mocking strategy. The test uses Vitest to mock various side-effecting dependencies like the gateway socket and REST query client before dynamically importing the profile store modules.

## Facts
- File path: /tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts
- File has 161 total lines and is 6378 bytes
- Uses Vitest for testing and Nanostores for state management
- Mocks side-effecting modules: gateway, hermes, query-client, starmap, projects, session
- Tests $activeGatewayProfile, $profiles, ensureGatewayProfile, and refreshProfiles

## Concepts
- Vitest unit testing
- Nanostores state management
- Dependency mocking
- Side-effect isolation

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts`

_Importance: 3 · Confidence: 1_
