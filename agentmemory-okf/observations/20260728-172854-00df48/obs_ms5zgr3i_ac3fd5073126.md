---
type: CommandRun
title: Skill View command
description: 
resource: agentmemory://observation/obs_ms5zgr3i_ac3fd5073126
tags: ["SQL migration", "Sidebar project registration", "Project folders", "commandrun"]
timestamp: 2026-07-29T11:10:14.563595+00:00
source: agentmemory
session_id: 20260728_172854_00df48
importance: 7
confidence: 0.9
---
# Summary

The script creates both the project rows AND all their folder attachments in the sidebar SQLite DB. It uses a list of predefined projects, generates unique IDs for each one, and inserts data into the database.

## Facts
- Script executes successfully without errors.
- SQLite database connection is established and used.

## Concepts
- SQL migration
- Sidebar project registration
- Project folders

## Files
- `/references/sidebar-bulk-registration.py`

_Importance: 7 · Confidence: 0.9_
