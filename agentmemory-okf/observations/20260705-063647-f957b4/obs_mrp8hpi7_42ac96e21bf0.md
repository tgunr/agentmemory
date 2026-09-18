---
type: Search
title: Search found 3 matches for _lastRoutedProfile in profile.ts
description: Looking for state management patterns in profile store
resource: agentmemory://observation/obs_mrp8hpi7_42ac96e21bf0
tags: ["state management", "routing state", "private module variables", "search"]
timestamp: 2026-07-17T17:50:50.716346+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

Searched for RxJS BehaviorSubject patterns and routing state variables in the profile store. Found an internal _lastRoutedProfile variable being used to track navigation state, but no observable setter patterns as initially searched.

## Facts
- Search queried 4 patterns in /Users/davec/.hermes/hermes-agent/apps/desktop/src/store/profile.ts
- Found 3 matches all related to _lastRoutedProfile variable at lines 172, 178, 184
- No matches found for $projects.set(), $projectTree.set(), or $sessions.set() patterns

## Concepts
- state management
- routing state
- private module variables

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/store/profile.ts`

_Importance: 3 · Confidence: 1_
