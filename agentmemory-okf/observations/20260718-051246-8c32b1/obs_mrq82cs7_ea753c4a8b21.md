---
type: CommandRun
title: Investigate Hermes projects skill storage and state
description: Checking projects.py registry paths and sqlite3 active_id state
resource: agentmemory://observation/obs_mrq82cs7_ea753c4a8b21
tags: ["Hermes skills", "CLI project management", "SQLite state tracking", "YAML configuration registry", "Environment variable overrides", "commandrun"]
timestamp: 2026-07-18T10:26:40.563900+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 5
confidence: 1
---
# Summary

Executed diagnostic commands to understand how the Hermes projects skill stores and tracks project data. Found that the YAML registry is empty but the SQLite database retains an active project ID, indicating a dual-storage mechanism or state mismatch.

## Facts
- projects.py list returns no matching projects
- projects.py stats shows 0 total projects, using registry /Users/davec/.hermes/projects.yaml
- projects.py resolves storage to ~/.hermes/projects.yaml by default, or ~/.hermes/profiles/&lt;name&gt;/projects.yaml for named profiles, or $HERMES_PROJECT_FILE
- projects.db contains a project_meta table with an active_id of a3db4080-5a4c-48f0-a513-c4a01de448ad

## Concepts
- Hermes skills
- CLI project management
- SQLite state tracking
- YAML configuration registry
- Environment variable overrides

## Files
- `~/.hermes/skills/productivity/projects/scripts/projects.py`
- `/Users/davec/.hermes/projects.yaml`
- `~/.hermes/projects.db`

_Importance: 5 · Confidence: 1_
