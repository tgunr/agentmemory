---
type: FileRead
title: Read profile.test.ts - Vitest tests for gateway profile connection sync
description: Test file for ensureGatewayProfile and $connection state synchronization
resource: agentmemory://observation/obs_mrp2y1eb_06dea42afc28
tags: ["Vitest testing framework", "nanostores state management", "gateway profile synchronization", "connection mode switching (local/remote)", "image attach handling (path vs bytes)", "mocking with vi.mock and vi.fn", "fileread"]
timestamp: 2026-07-17T15:15:34.926711+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

Read the profile.test.ts file which contains regression tests for gateway profile connection synchronization. The tests verify that when switching between local and remote profiles, the $connection store properly updates its mode and profile properties, preventing image attach errors on remote gateways.

## Facts
- Test file uses Vitest with nanostores for state management
- Tests ensureGatewayProfile function sync with $connection store
- Regression test for issue #46651: activating remote profile must flip $connection.mode from "local" to "remote"
- Without proper sync, image attach uses path-based image.attach against remote gateway instead of image.attach_bytes
- Mocks dependencies: @/store/gateway, @/hermes, @/lib/query-client, @/store/starmap
- Tests cover: remote profile activation, returning to default profile, and error handling when descriptor fetch fails
- Uses vi.stubGlobal to mock window.hermesDesktop.getConnection

## Concepts
- Vitest testing framework
- nanostores state management
- gateway profile synchronization
- connection mode switching (local/remote)
- image attach handling (path vs bytes)
- mocking with vi.mock and vi.fn

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts`

_Importance: 4 · Confidence: 1_
