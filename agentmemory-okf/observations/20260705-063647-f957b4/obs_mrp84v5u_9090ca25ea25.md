---
type: FileRead
title: Desktop slash command handler logic
description: Reading slash command dispatch and execution flow in desktop app
resource: agentmemory://observation/obs_mrp84v5u_9090ca25ea25
tags: ["slash command handling", "command dispatch pattern", "gateway API integration", "React hooks for prompt actions", "async command processing", "desktop application architecture", "composer state management", "fileread"]
timestamp: 2026-07-17T17:40:51.517174+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

Read the slash command handler implementation in the desktop app's session hooks. The code shows a two-tier dispatch system: first attempts slash.exec endpoint, then falls back to command.dispatch. Handles multiple dispatch types with specific UI behaviors like setting composer drafts for prefill commands and showing notices before message submission.

## Facts
- File located at /tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts
- Handles slash command dispatch with types: exec, plugin, alias, send, prefill, skill
- Uses requestGateway to call 'slash.exec' endpoint with session_id and command
- Falls back to 'command.dispatch' endpoint if slash.exec fails
- Manages composer state via setComposerDraft for prefill directives
- Checks busyRef.current before submitting to prevent concurrent operations
- Uses parseCommandDispatch to parse gateway responses
- Handles notice display for send/prefill types (e.g., "⊙ Goal set")
- Desktop-specific validation via isDesktopSlashCommand check

## Concepts
- slash command handling
- command dispatch pattern
- gateway API integration
- React hooks for prompt actions
- async command processing
- desktop application architecture
- composer state management

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 4 · Confidence: 1_
