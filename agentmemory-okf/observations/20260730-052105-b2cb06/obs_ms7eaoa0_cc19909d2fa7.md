---
type: file_edit
title: Patch reference file
description: 
resource: agentmemory://observation/obs_ms7eaoa0_cc19909d2fa7
tags: ["Project naming conventions", "file_edit"]
timestamp: 2026-07-30T10:53:11.397664+00:00
source: agentmemory
session_id: 20260730_052105_b2cb06
importance: 6
confidence: 0.9
---
# Summary

The patch ensures descriptive names are applied when creating projects via the sidebar. This prevents accidental re-duplicates and resolves visual issues in the sidebar. It also addresses cross-profile project issue after cleanup, ensuring only projected entries display from active profiles.

## Facts
- Never use default project names.
- Accidental re-adds of the same folder lead to dedup decisions.

## Concepts
- Project naming conventions

## Files
- `/references/projects-sidebar-and-consolidation.md`

_Importance: 6 · Confidence: 0.9_
