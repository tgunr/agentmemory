---
type: file_edit
title: Remove UV projects from profiles
description: 
resource: agentmemory://observation/obs_ms7dv0k4_abb456ec90d5
tags: ["SQL migration", "file_edit"]
timestamp: 2026-07-30T10:41:00.810270+00:00
source: agentmemory
session_id: 20260730_052105_b2cb06
importance: 7
confidence: 0.9
---
# Summary

Removed UV-related projects from profiles using execute_code tool. Database backups were created prior to deletion for potential future reference.

## Facts
- Backed up default and AI sqlite databases before deletion of UV projects
- Migrated CC profile to remain unchanged during project removal

## Concepts
- SQL migration

## Files
- `/tmp/hermes-projects-backup-20260730-053218/`

_Importance: 7 · Confidence: 0.9_
