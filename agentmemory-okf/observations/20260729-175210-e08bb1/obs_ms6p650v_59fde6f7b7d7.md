---
type: file_edit
title: Editing session ts file
description: Update active session rotation and chat workspace target atoms
resource: agentmemory://observation/obs_ms6p650v_59fde6f7b7d7
tags: ["atom-based state management", "file_edit"]
timestamp: 2026-07-29T23:09:49.418587+00:00
source: agentmemory
session_id: 20260729_175210_e08bb1
importance: 6
confidence: 0.9
---
# Summary

The current implementation of the session store is being reviewed and adjusted by editing the TypeScript file at ~/.hermes/hermes-agent/apps/desktop[src]/store/session.ts.
This change makes use of at atoms from a library named hermes-reducer which manages state for client-side updates, making the whole process more efficient

## Facts
- Cd to .hermes/hermes-agent/apps/desktop directory
- Grepped for specific keywords in src/store/session.ts

## Concepts
- atom-based state management

## Files
- `/home/user/.hermes/hermes-agent/apps/desktop/src/store/session.ts`

_Importance: 6 · Confidence: 0.9_
