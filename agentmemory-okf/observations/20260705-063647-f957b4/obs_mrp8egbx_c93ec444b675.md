---
type: FileRead
title: Read slash.ts hook file for prompt actions
description: File contained interface definitions for slash command handling context (lines 15-59 of 692 total)
resource: agentmemory://observation/obs_mrp8egbx_c93ec444b675
tags: ["slash command handler", "session management hook", "TypeScript interface", "gateway profile integration", "fileread"]
timestamp: 2026-07-17T17:48:18.857579+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

Read TypeScript file containing slash command hook infrastructure, revealing interfaces that define the context and dependencies needed for handling slash commands in a desktop chat application. This establishes the pattern for command dispatch and session integration.

## Facts
- File path: /tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts</file>
    <fact>Total lines: 692, showing lines 15-59 with truncation hint
- File size: 25258 bytes
- Imports from 4 stores: session, profile, composer, projects, and additional modules
- Interface SlashActionCtx defines: arg, command, name, recordInput, and optional sessionHint
- Interface SlashCommandDeps contains refs and callbacks for session management and slash handling

## Concepts
- slash command handler
- session management hook
- TypeScript interface
- gateway profile integration

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 4 · Confidence: 1_
