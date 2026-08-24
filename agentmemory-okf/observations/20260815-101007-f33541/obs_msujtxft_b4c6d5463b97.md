---
type: file_write
title: Scan git-tracked files for literal secrets
description: (Required skill not found)
resource: agentmemory://observation/obs_msujtxft_b4c6d5463b97
tags: ["Git", "Literally Secret", "Search secret keys", "file_write"]
timestamp: 2026-08-15T15:46:49.854776+00:00
source: agentmemory
session_id: 20260815_101007_f33541
importance: 8
confidence: 0.9
---
# Summary

The script scans tracked git files for literal secrets and prints a warning if found.

## Facts
- Only git-tracked (non-submodule) files in ~/.hermes are scanned.
- The scan only looks at `git ls-files` to avoid tracking untracked files.

## Concepts
- Git
- Literally Secret
- Search secret keys

## Files
- `/home/user/project/scripts/scan_secrets.py`

_Importance: 8 · Confidence: 0.9_
