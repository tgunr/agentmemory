---
type: Search
title: Search for slash command hooks and dependencies
description: Found useSlashCommand and SlashCommandDeps in use-prompt-actions directory
resource: agentmemory://observation/obs_mrp37fbb_56b1f2b0240c
tags: ["React hooks", "slash commands", "custom hooks", "TypeScript interfaces", "search"]
timestamp: 2026-07-17T15:22:52.865888+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

Search operation located slash command implementation in the use-prompt-actions hooks directory. The useSlashCommand hook is defined in slash.ts with SlashCommandDeps interface and is imported and utilized in the main index.ts file.

## Facts
- Found 4 matches across 2 files matching pattern: useSlashCommand|changeSessionCwd|enterProject|useCwdActions|SlashCommandDeps
- slash.ts defines SlashCommandDeps interface at line 45
- slash.ts exports useSlashCommand function at line 69
- index.ts imports useSlashCommand at line 38
- index.ts uses useSlashCommand hook at line 444

## Concepts
- React hooks
- slash commands
- custom hooks
- TypeScript interfaces

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/index.ts`

_Importance: 3 · Confidence: 1_
