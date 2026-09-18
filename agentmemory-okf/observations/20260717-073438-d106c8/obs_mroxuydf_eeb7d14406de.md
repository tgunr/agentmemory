---
type: file_edit
title: Added CHANGELOG entry for session title fix
description: Documented fix for Hermes/Kilo session title resolution in api::session::start path
resource: agentmemory://observation/obs_mroxuydf_eeb7d14406de
tags: ["changelog management", "session title resolution", "Hermes/Kilo Code integration", "event subscriber wiring", "fallback chain", "file_edit"]
timestamp: 2026-07-17T12:53:12.960493+00:00
source: agentmemory
session_id: 20260717_073438_d106c8
importance: 5
confidence: 1
---
# Summary

A CHANGELOG entry was added documenting a bug fix where session titles were not being properly resolved. The root cause was that the Hermes/Kilo session title lookup was only connected to a dead event subscriber. The fix routes title resolution through `resolveSessionTitle` on the live API path, broadens matching to include `session_key`, and ensures hooks forward titles.

## Facts
- Added "### Fixed" section under "[Unreleased]" in CHANGELOG.md
- Fix: Hermes/Kilo session title lookup was only wired into dead `event::session::started` subscriber; no code ever published `agentmemory.session.started`
- Live `api::session::start` path now resolves title via `resolveSessionTitle`
- Title resolution prefers Hermes/Kilo session title over explicit hook title
- Fallback chain: first user prompt → project name
- Lookup now matches by `session_key` in addition to `id`
- `session-start` hooks now forward `title` when present
- Warning: file was last read with partial pagination, should be re-read before overwriting

## Concepts
- changelog management
- session title resolution
- Hermes/Kilo Code integration
- event subscriber wiring
- fallback chain

## Files
- `/Volumes/AI/agentmemory/CHANGELOG.md`

_Importance: 5 · Confidence: 1_
