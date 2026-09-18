---
type: FileRead
title: Read profile.test.ts beforeEach setup
description: Vitest test setup showing mock configuration and store resets
resource: agentmemory://observation/obs_mrp2ymrm_6537a72c7be9
tags: ["Vitest testing framework", "test beforeEach setup", "mock functions and stores", "state management testing", "HermesConnection type", "fileread"]
timestamp: 2026-07-17T15:16:02.622870+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 2
confidence: 1
---
# Summary

Reading test setup for profile store. The beforeEach block resets all mocks and store state including gateway, connection, profiles, projects, and sessions to ensure test isolation.

## Facts
- File: /tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts (160 lines, 6326 bytes)
- Lines 44-63 show beforeEach block with test initialization
- Uses Vitest: vi.fn, vi.mocked, vi.stubGlobal for mocking
- Mocks window.hermesDesktop.getConnection
- Resets stores: $gateway, $activeGatewayProfile, $connection, $profiles, $projects, $projectTree, $sessions
- Uses queryClient.invalidateQueries mock
- Uses resetStarmapGraph mock
- localConn helper creates HermesConnection with defaults: baseUrl='', mode='local', profile='default'

## Concepts
- Vitest testing framework
- test beforeEach setup
- mock functions and stores
- state management testing
- HermesConnection type

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts`

_Importance: 2 · Confidence: 1_
