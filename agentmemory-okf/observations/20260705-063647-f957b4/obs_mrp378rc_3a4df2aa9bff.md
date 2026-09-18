---
type: FileRead
title: Reviewed desktop project type definitions
description: Project interfaces mirror the CLI projects database representation.
resource: agentmemory://observation/obs_mrp378rc_3a4df2aa9bff
tags: ["TypeScript interfaces", "project workspace model", "frontend-backend type contract", "nullable fields", "fileread"]
timestamp: 2026-07-17T15:22:44.371994+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 3
confidence: 1
---
# Summary

Read lines 610-639 of the desktop Hermes type definitions. This section establishes the typed frontend representation of per-profile projects and their folders, explicitly mirroring hermes_cli.projects_db.Project.to_dict().

## Facts
- ProjectFolder defines path, nullable label, is_primary, and added_at fields.
- ProjectInfo includes identity, display metadata, nullable board_slug and primary_path, archived status, creation time, and ProjectFolder[] folders.
- ProjectsPayload contains projects: ProjectInfo[] and nullable active_id.
- The next interface begins with ProfileSoul at line 638 and includes a content string.

## Concepts
- TypeScript interfaces
- project workspace model
- frontend-backend type contract
- nullable fields

## Files
- `/Users/davec/.hermes/hermes-agent/apps/desktop/src/types/hermes.ts`

_Importance: 3 · Confidence: 1_
