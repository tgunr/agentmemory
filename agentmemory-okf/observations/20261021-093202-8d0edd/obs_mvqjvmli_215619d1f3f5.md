---
type: CommandRun
title: Stop Nextcloud app job
description: Park a Nextcloud app's background work, then resume it automatically at a chosen time.
resource: agentmemory://observation/obs_mvqjvmli_215619d1f3f5
tags: ["SQL migration", "app job blocking", "cron lock", "fpm pool", "commandrun"]
timestamp: 2026-10-27T10:36:11.427050+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 0.9
---
# Summary

An OCA \&quot;Findling\&quot; app job was parked, disabling the app to prevent a huge table lock, and ensuring a resume at a specified time.

## Facts
- Nextcloud app running background work
- Park app job to prevent huge table lock

## Concepts
- SQL migration
- app job blocking
- cron lock
- fpm pool

## Files
- `/templates/park-unpark-app-jobs.sh`
- `/usr/local/bin/unpark-app-jobs.sh`
- `/etc/systemd/system/unpark-app-jobs.service`

_Importance: 7 · Confidence: 0.9_
