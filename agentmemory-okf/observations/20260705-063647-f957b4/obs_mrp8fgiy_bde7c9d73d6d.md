---
type: FileRead
title: Read slash command hook interfaces and imports
description: Inspected the first 80 lines of the desktop prompt slash-command dispatcher.
resource: agentmemory://observation/obs_mrp8fgiy_bde7c9d73d6d
tags: ["React hooks", "slash command dispatcher", "dependency injection", "session management", "gateway requests", "fileread"]
timestamp: 2026-07-17T17:49:05.763423+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The beginning of the desktop slash-command hook was inspected to understand its dependencies and invocation context. It is a large dispatcher coordinating slash commands with session lifecycle, gateway operations, UI stores, profiles, and prompt submission.

## Facts
- The file defines SlashActionCtx with arg, command, name, recordInput, and optional sessionHint fields.
- SlashCommandDeps injects session refs, message appending, branching, backend session creation, skin handling, session handoff, memory graph opening, session refresh/resume, gateway requests, draft reset, and prompt submission.
- useSlashCommand is documented as the /slash command dispatcher extracted from usePromptActions.
- The module integrates desktop slash-command resolution, profiles, YOLO state, command palette, composer drafts, notifications, pet generation, model/session pickers, and gateway response types.
- Only lines 1-80 of 632 were read; the file is 22,384 bytes and the output was truncated.

## Concepts
- React hooks
- slash command dispatcher
- dependency injection
- session management
- gateway requests

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 3 · Confidence: 1_
