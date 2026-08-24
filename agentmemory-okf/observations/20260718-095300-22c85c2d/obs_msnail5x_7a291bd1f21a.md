---
type: file_write
title: Background curator write_file failed for skill 'agentmemory-hermes-integration'
description: User-owned skills are off-limits to autonomous curation.
resource: agentmemory://observation/obs_msnail5x_7a291bd1f21a
tags: ["autonomus curation", "file_write"]
timestamp: 2026-08-10T13:51:40.960764+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 6
confidence: 0.9
---
# Summary

Background curator failed write_file operation for 'agentmemory-hermes-integration' due to lack of curator management, as user-owned skills are off-limits to autonomous curation. Running 'hermes curator adopt agentmemory-hermes-integration' can opt it in.

## Facts
- The skill is not curator-managed (created_by=None).
- User-owned skills refuse autonomous curation.

## Concepts
- autonomus curation

## Files
- `/references/export-500-invocation-stopped.md`

_Importance: 6 · Confidence: 0.9_
