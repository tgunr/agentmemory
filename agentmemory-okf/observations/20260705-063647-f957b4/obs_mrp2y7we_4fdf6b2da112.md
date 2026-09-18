---
type: file_edit
title: Add mocked atoms for projects and session stores in profile test
description: Extended test setup with additional vi.mock calls for store dependencies
resource: agentmemory://observation/obs_mrp2y7we_4fdf6b2da112
tags: ["test mocking", "vitest", "atom state", "module mocking", "file_edit"]
timestamp: 2026-07-17T15:15:43.344463+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 5
confidence: 1
---
# Summary

The profile.test.ts file was extended to mock additional store dependencies ($projects, $projectTree, $sessions) that are imported by the profile module. This ensures proper isolation of unit tests by mocking all external store dependencies.

## Facts
- Added $projects = atom<unknown[]>([]) mock
- Added $projectTree = atom<unknown[]>([]) mock
- Added $sessions = atom<unknown[]>([]) mock
- Added vi.mock for '@/store/projects' module
- Added vi.mock for '@/store/session' module

## Concepts
- test mocking
- vitest
- atom state
- module mocking

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/store/profile.test.ts`

_Importance: 5 · Confidence: 1_
