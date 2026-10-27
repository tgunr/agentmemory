---
type: file_edit
title: Nextcloud per-folder sizes
description: Cron run
resource: agentmemory://observation/obs_mvpkzbkz_0a842e9c6ed3
tags: ["React hooks", "file_edit"]
timestamp: 2026-10-26T18:19:17.211724+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 4
confidence: 0.9
---
# Summary

The Nextcloud cron job ran, displaying per-folder sizes for 'davec' and 'admin'. Additionally, it displayed cron progress, including jobs not run in the last 15 minutes, and errors from the last 10 minutes.

## Facts
- Command: ssh -o ConnectTimeout=15 pve.root &quot;set +e && cd /var/www/nextcloud && echo &&sudo -u www-data php -r \\'\''
- Total jobs: 949589, not checked in 15min: 949543

## Concepts
- React hooks

## Files
- `/var/www/nextcloud/config/config.php`

_Importance: 4 · Confidence: 0.9_
