---
type: FileRead
title: Restore Nextcloud Server
description: Restore a broken Nextcloud server
resource: agentmemory://observation/obs_mvqjbaqe_185f58f87ed4
tags: ["Nextcloud", "Restore", "Database", "Data Directory", "fileread"]
timestamp: 2026-10-27T10:20:22.928997+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 8
confidence: 0.9
---
# Summary

A Nextcloud instance usually survives a total loss far better than it looks: the database, data directory, and TLS certs are what matter.

## Facts
- Nextcloud needs restore, upgrade or admin work.
- The web root, Apache vhost, or config.php was deleted but the database and data dir survive.

## Concepts
- Nextcloud
- Restore
- Database
- Data Directory

## Files
- `/var/www/nextcloud/config/config.php`

_Importance: 8 · Confidence: 0.9_
