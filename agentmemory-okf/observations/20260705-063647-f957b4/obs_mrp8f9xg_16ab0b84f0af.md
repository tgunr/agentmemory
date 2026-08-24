---
type: FileRead
title: Reviewed desktop slash actions for sessions and overlays
description: Handlers manage title updates, command help, memory graph, pet generation, and pet browsing.
resource: agentmemory://observation/obs_mrp8f9xg_16ab0b84f0af
tags: ["slash command handlers", "gateway RPC", "optimistic state update", "desktop overlays", "pet generation", "fileread"]
timestamp: 2026-07-17T17:48:57.216205+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

The read covered slash-command implementations for session metadata, command discovery, and rich desktop overlays. These handlers favor native desktop UI for journey and pet workflows while using gateway requests for session-backed actions.

## Facts
- The title handler calls requestGateway('session.title') with session_id and title, updates local session state, refreshes sessions, and reports queued initialization or errors.
- The help handler fetches commands.catalog for the active session and renders it with renderCommandsCatalog.
- The journey handler opens the memory graph; hatch optionally seeds $petGenInput before opening pet generation; pet list/gallery/browse/all opens the pets command palette page.
- The pet scale branch begins by parsing the provided value as a Number for local resizing and store persistence.

## Concepts
- slash command handlers
- gateway RPC
- optimistic state update
- desktop overlays
- pet generation

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 3 · Confidence: 1_
