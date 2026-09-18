---
type: FileRead
title: Read desktop slash command type definitions
description: Inspected the first 30 lines of the desktop command catalog module
resource: agentmemory://observation/obs_mrp859ga_fd56a7c17293
tags: ["TypeScript interfaces", "slash command catalog", "data-driven command dispatch", "handler registry", "fileread"]
timestamp: 2026-07-17T17:41:10.039331+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The beginning of the desktop slash command module defines catalog, completion, and theme-option interfaces. Its documented architecture uses data rows and ID-keyed dispatcher handlers so commands can be added without extending centralized branching logic.

## Facts
- CommandsCatalogSection contains a name and an array of string pairs.
- CommandsCatalogLike optionally exposes categories, pairs, skill_count, and warning.
- DesktopSlashCompletion defines display, meta, and text fields; DesktopThemeCommandOption defines description, label, and name.
- Local command actions use IDs mapped one-to-one to handlers in use-prompt-actions, avoiding a switch ladder.
- The file has 450 lines and only lines 1-30 were read.

## Concepts
- TypeScript interfaces
- slash command catalog
- data-driven command dispatch
- handler registry

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/lib/desktop-slash-commands.ts`

_Importance: 3 · Confidence: 1_
