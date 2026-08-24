---
type: file_edit
title: Pitfall: `projects.db` is global (one source of truth for projects); `state.db` is per-profile.
description: Check what's really on disk vs what's in the DB to avoid duplicate projects with case-mismatch paths on case-insensitive APFS
resource: agentmemory://observation/obs_ms7dmyvj_486da4e1dfb8
tags: ["file_edit"]
timestamp: 2026-07-30T10:34:45.386827+00:00
source: agentmemory
session_id: 20260730_052105_b2cb06
importance: 8
confidence: 0.75
---
# Summary

This patch updates the sidebar display to use on-disk casing instead of the DB's global string values, preventing duplicate projects with case-mismatch paths. This change should prevent future duplicate project issues and ensure the tree is displayed correctly in the live gateway process.

## Facts
- macOS APFS (default, case-insensitive) treats `/Volumes/projects/UV` and `/Volumes/projects/uv` as the same directory.
- SQlite `LIKE` is case-INSENSITIVE for ASCII by default — a post-fix `SELECT COUNT(*) ... WHERE path LIKE '%/UV%'` will still report all your now-lowercase rows as \"uppercase\".

## Files
- `/references/projects-sidebar-and-consolidation.md`

_Importance: 8 · Confidence: 0.75_
