---
type: Observation
title: Duplicate file issue detected
description: Error in Hermes agent desktop directory
resource: agentmemory://observation/obs_ms6osyv1_b57ceb65e060
tags: ["git dup", "observation"]
timestamp: 2026-07-29T22:59:34.904337+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 7
confidence: 1
---
# Summary

The Hermes agent desktop directory is experiencing a duplicate file issue.

## Facts
- git show 7f74b324c:src/store/session.ts
- "fatal: path 'apps/desktop/src/store/session.ts' exists, but not "src/store/session.ts"
- Did you mean...
- '7f74b324c:apps/desktop/src/store/session.ts'

## Concepts
- git dup

## Files
- `/home/user/.hermes/hermes-agent/apps/desktop/src/store/session.ts`

_Importance: 7 · Confidence: 1_
