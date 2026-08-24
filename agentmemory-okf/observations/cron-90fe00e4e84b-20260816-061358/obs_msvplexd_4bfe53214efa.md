---
type: file_edit
title: S.Syncoid automated backup cron jobs
description: Maintenance of backup configuration
resource: agentmemory://observation/obs_msvplexd_4bfe53214efa
tags: ["cron management", "Syncoid configuration", "file_edit"]
timestamp: 2026-08-16T11:15:56.480753+00:00
source: agentmemory
session_id: cron_90fe00e4e84b_20260816_061358
importance: 6
confidence: 1
---
# Summary

The Syncoid automated backup cron jobs file was edited, containing maintenance commands and update rules for various datasets.

## Facts
- SHELL=/bin/bash
- PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
- /usr/local/bin/syncoid-runner --cleanup --dataset alpha/applications
- 0 14 * * 6 root /usr/local/bin/syncoid-runner --cleanup --dataset alpha/applications
- /usr/local/bin/syncoid-runner --cleanup --dataset alpha/archive
- 0 10 * * 5 root /usr/local/bin/syncoid-runner --cleanup --dataset alpha/archive
- /usr/local/bin/syncoid-runner --cleanup --dataset alpha/data
- 0 19 */1 * * root /usr/local/bin/syncoid-runner --cleanup --dataset alpha/data

## Concepts
- cron management
- Syncoid configuration

_Importance: 6 · Confidence: 1_
