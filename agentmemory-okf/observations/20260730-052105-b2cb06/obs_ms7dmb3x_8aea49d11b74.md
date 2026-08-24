---
type: file_edit
title: Pitfall: `projects.db` is global (one source of truth for projects); ...
description: Duplicate projects + case-mismatch paths on case-insensitive APFS
resource: agentmemory://observation/obs_ms7dmb3x_8aea49d11b74
tags: ["SQL migration", "file_edit"]
timestamp: 2026-07-30T10:34:14.580329+00:00
source: agentmemory
session_id: 20260730_052105_b2cb06
importance: 8
confidence: 0.9
---
# Summary

Patch in skill 'hermes-workspace-context': normalize every stored path to the on-disk casing.
  Fix duplicate projects and case-mismatch paths on case-insensitive APFS. Provide a way to create
  descriptive project names first.

## Facts
- SQLite `LIKE` is case-INSENSITIVE for ASCII by default — a post-fix
    SELECT COUNT(*) ... WHERE path LIKE '%/UV%' will still report all your now-lowercase
    rows as "uppercase"
- Always `shutil.copy` each `projects.db`/`state.db` to a timestamped backup dir BEFORE the
    UPDATE pass (one folder for all profiles makes rollback obvious)

## Concepts
- SQL migration

## Files
- `/Volumes/projects/uv/...`
- `/Users/davec/projects/UV/...`

_Importance: 8 · Confidence: 0.9_
