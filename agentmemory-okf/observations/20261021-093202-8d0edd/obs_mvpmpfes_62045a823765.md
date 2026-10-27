---
type: file_edit
title: Restoring nextcloud instance
description: Use when Nextcloud is down or stuck in maintenance mode.
resource: agentmemory://observation/obs_mvpmpfes_62045a823765
tags: ["React hooks", "SQL migration", "file_edit"]
timestamp: 2026-10-26T19:07:34.849595+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 8
confidence: 0.9
---
# Summary

This is the procedure to restore a broken Nextcloud server. The database, data directory, and TLS certs matter.

## Facts
- Install to the DB's version, not the newest release.
- check whether that major is EOL and note the upgrade path separately

## Concepts
- React hooks
- SQL migration

## Files
- `/var/www/nextcloud/config/config.php`

_Importance: 8 · Confidence: 0.9_
