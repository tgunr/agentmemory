---
type: FileRead
title: Read slash command handlers for profile and project
description: Lines 300-334 of 701 in slash.ts showing profile switching and project command logic
resource: agentmemory://observation/obs_mrp8gmki_d0f7676a64ef
tags: ["slash commands", "profile management", "session state management", "reactive state stores", "gateway profile initialization", "fileread"]
timestamp: 2026-07-17T17:50:00.256189+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

Reading the slash command handler file to understand profile switching and project command implementations. The profile command validates the target profile exists, updates state via $newChatProfile, ensures the gateway profile is available, and starts a fresh session draft to rebuild UI against the new backend.

## Facts
- File has 701 total lines, 25414 bytes
- Profile handler fetches profiles via getProfiles(), finds match by name, normalizes key, sets $newChatProfile, calls ensureGatewayProfile(), then startFreshSessionDraft()
- Profile not found triggers error notification listing available profile names
- Project handler (/project) re-homes active session to project's cwd and scopes sidebar
- startFreshSessionDraft() drops current session draft so sidebar + composer rebuild against new profile's backend

## Concepts
- slash commands
- profile management
- session state management
- reactive state stores
- gateway profile initialization

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 3 · Confidence: 1_
