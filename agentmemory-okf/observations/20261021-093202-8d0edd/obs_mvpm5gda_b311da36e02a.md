---
type: file_edit
title: MySQL processlist (long queries)
description: 
resource: agentmemory://observation/obs_mvpm5gda_b311da36e02a
tags: ["MySQL query output", "Job queue composition", "Cron process monitoring", "file_edit"]
timestamp: 2026-10-26T18:52:02.970825+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 0.9
---
# Summary

The script executed a custom MySQL command to display the current processlist, including long queries, and then performed further commands related to job queue composition, in-flight jobs, and cron processes.

## Facts
- The MySQL processlist displayed the current processes and their status.
- The output showed the id, user, time, state, and query for each process.

## Concepts
- MySQL query output
- Job queue composition
- Cron process monitoring

## Files
- `/var/log/nextcloud/nextcloud.log`

_Importance: 7 · Confidence: 0.9_
