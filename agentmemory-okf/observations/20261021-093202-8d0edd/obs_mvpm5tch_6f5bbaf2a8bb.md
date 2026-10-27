---
type: file_write
title: Unstick Nextcloud cron task
description: Clean Nextcloud cron lock tables and remove stale jobs
resource: agentmemory://observation/obs_mvpm5tch_6f5bbaf2a8bb
tags: ["cleaning Nextcloud cron lock tables", "removing stale jobs", "file_write"]
timestamp: 2026-10-26T18:52:19.790478+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 1
---
# Summary

This script unsticks the Nextcloud cron task by cleaning the lock tables and removing stale jobs. The script writes 2196 bytes and creates a new directory. Linting is skipped due to the lack of a linter for .sh files. The resolved path of the script is provided. The files modified are listed.

## Facts
- Bytes written: 2196
- Dirs created: true
- Verified: true
- Lint status: skipped
- Linter message: No linter for .sh files
- Resolved path: /Users/davec/.hermes/profiles/systems/cache/scratch/nc30/nc_unstick_cron.sh
- Files modified: ['/Users/davec/.hermes/profiles/systems/cache/scratch/nc30/nc_unstick_cron.sh']

## Concepts
- cleaning Nextcloud cron lock tables
- removing stale jobs

## Files
- `/Users/davec/.hermes/profiles/systems/cache/scratch/nc30/nc_unstick_cron.sh`

_Importance: 7 · Confidence: 1_
