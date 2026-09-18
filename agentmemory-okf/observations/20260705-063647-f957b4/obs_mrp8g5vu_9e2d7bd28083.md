---
type: file_edit
title: Add /project slash command and fix /profile session reset
description: Implements project switching and fixes profile switching to reset session state
resource: agentmemory://observation/obs_mrp8g5vu_9e2d7bd28083
tags: ["slash commands", "session management", "project management", "gateway API", "state management", "desktop app", "file_edit"]
timestamp: 2026-07-17T17:49:38.630523+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 6
confidence: 1
---
# Summary

Added a /project slash command that allows users to switch the active session's working directory to a project's path. The command matches project names case-insensitively against both explicit projects (with .name/.primary_path) and auto-projects (with .label/.path), then updates the session via gateway API and scopes the sidebar. Also fixed the /profile command to reset the session draft when switching profiles, ensuring the UI rebuilds against the new profile's backend.

## Facts
- File: /Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts
- Added new /project slash command that re-homes active session to project's cwd
- /project matches by name (case-insensitive) against explicit projects and auto-projects from $projects and $projectTree stores
- Explicit projects have .name and .primary_path; auto-projects have .label and .path
- Calls requestGateway('session.cwd.set', { session_id, cwd }) to update session working directory
- Calls enterProject(id) to scope sidebar to the project
- Modified /profile command to call startFreshSessionDraft() after changing profile to reset session state

## Concepts
- slash commands
- session management
- project management
- gateway API
- state management
- desktop app

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts`

_Importance: 6 · Confidence: 1_
