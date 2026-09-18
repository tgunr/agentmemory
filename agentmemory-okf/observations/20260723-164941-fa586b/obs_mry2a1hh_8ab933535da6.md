---
type: Observation
title: Testing session-state cache fails during git checkout and stash popping
description: No critical bug fixes found.
resource: agentmemory://observation/obs_mry2a1hh_8ab933535da6
tags: ["Catch-up operation issue", "observation"]
timestamp: 2026-07-23T22:06:50.879838+00:00
source: agentmemory
session_id: 20260723_164941_fa586b
importance: 7
confidence: 1
---
# Summary

The automated test failed, leaving uncommitted changes on the main branch.

## Facts
- Error message from git: Your local changes to the following files would be overwritten by merge:
- Target files: package.json
- Test Results:
- Failed tests: 7
- Pending changes: Yes

## Concepts
- Catch-up operation issue

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/package.json`

_Importance: 7 · Confidence: 1_
