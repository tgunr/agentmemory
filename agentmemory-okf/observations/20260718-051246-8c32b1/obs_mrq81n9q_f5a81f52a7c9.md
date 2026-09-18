---
type: FileRead
title: Read Hermes projects skill documentation
description: Reviewed project registry architecture and manager commands.
resource: agentmemory://observation/obs_mrq81n9q_f5a81f52a7c9
tags: ["project registry", "SQLite multi-folder projects", "per-profile YAML configuration", "session linking", "workspace detection", "fileread"]
timestamp: 2026-07-18T10:26:07.496874+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 3
confidence: 1
---
# Summary

The projects skill supports two distinct registries: a SQLite-backed global sidebar registry and per-profile YAML workspace registries containing notes and linked sessions. The documentation defines registry locations, environment overrides, and the central manager CLI used for project lifecycle and context operations.

## Facts
- The Hermes Desktop sidebar reads the global SQLite database at ~/.hermes/projects.db, using projects and project_folders tables with multi-folder support.
- Workspace tracking uses per-profile YAML registries: ~/.hermes/projects.yaml by default or ~/.hermes/profiles/&lt;name&gt;/projects.yaml for named profiles.
- HERMES_PROJECT_FILE can override the registry path; profile-specific usage should set both HERMES_PROFILE and HERMES_PROJECT_FILE.
- All YAML registry operations use python3 ~/.hermes/skills/productivity/projects/scripts/projects.py with commands for listing, creating, updating, archiving, notes, directory detection, and session linking.

## Concepts
- project registry
- SQLite multi-folder projects
- per-profile YAML configuration
- session linking
- workspace detection

## Files
- `~/.hermes/skills/productivity/projects/SKILL.md`

_Importance: 3 · Confidence: 1_
