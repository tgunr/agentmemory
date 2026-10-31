---
type: file_edit
title: HerMES Agent Stash Check
description: Fully merge stash in head
resource: agentmemory://observation/obs_mvv2jvat_e3aaca080c34
tags: ["Git stash", "file_edit"]
timestamp: 2026-10-30T14:30:00.241085+00:00
source: agentmemory
session_id: local-5f21df6e0d37aa0be3f21982ea90776a250afe8e05aa9497317ec4cef073fc91
importance: 7
confidence: 0.9
---
# Summary

The HerMES Agent checks if a stash is fully merged in the head of a Git repository. It iterates through each stash, applies the changes, and checks if the stash is fully merged using Git apply and Git stash show. If not fully merged, it outputs a message.

## Facts
- HerMES Agent checks for stash fully merged in head

## Concepts
- Git stash

## Files
- `/app/shell/session-context-rail.dom.test.tsx`
- `/src/app/shell/session-context-rail.test.ts`
- `/desktop/src/app/shell/session-context-rail.tsx`

_Importance: 7 · Confidence: 0.9_
