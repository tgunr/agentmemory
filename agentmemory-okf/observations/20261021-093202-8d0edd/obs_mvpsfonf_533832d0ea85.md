---
type: FileRead
title: Restore Nextcloud instance
description: Restore Nextcloud server from data directory
resource: agentmemory://observation/obs_mvpsfonf_533832d0ea85
tags: ["NC 29", "NC 30", "PHP-FPM", "ZFS", "Cron", "fileread"]
timestamp: 2026-10-26T21:47:57.960295+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 5
confidence: 0.9
---
# Summary

A Nextcloud instance usually survives a \"total loss\" better than it looks; the database, data directory, and TLS certs are what matter.

## Facts
- Database was down, 500s page, or blank pages after update or host rebuild.
- The web root, Apache vhost, or `config.php` was deleted, but the database and data directory survive.

## Concepts
- NC 29
- NC 30
- PHP-FPM
- ZFS
- Cron

## Files
- `/var/log/nextcloud/nextcloud.log`

_Importance: 5 · Confidence: 0.9_
