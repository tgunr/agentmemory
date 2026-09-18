---
type: file_edit
title: Verify Project Sessions Tool
description: Maintains the integrity of Hermes Desktop projects.
resource: agentmemory://observation/obs_ms7e8dti_8a9dca4f2854
tags: ["RPC", "SQLite", "Hermes Desktop", "file_edit"]
timestamp: 2026-07-30T10:51:24.508304+00:00
source: agentmemory
session_id: 20260730_052105_b2cb06
importance: 7
confidence: 0.9
---
# Summary

Tool provides an essential script to diagnose a Hermes Desktop project with an empty session list in the sidebar. It iterates through all projects, their folders, and state databases to determine if there are any active sessions under each project's folder.

## Facts
- The tool ensures project data integrity by checking the number of active sessions on each sidebar view.
- The code uses SQLite to store and retrieve project data, and also employs RPC to synchronize gateway information.

## Concepts
- RPC
- SQLite
- Hermes Desktop

## Files
- `scripts/verify_project_sessions.py`

_Importance: 7 · Confidence: 0.9_
