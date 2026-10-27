---
type: file_edit
title: Restore Nextcloud instance
description: Restoring a broken Nextcloud server
resource: agentmemory://observation/obs_mvpqn4wc_d32a099d5d71
tags: ["Nextcloud restore", "Database backup", "PHP-FPM pool management", "file_edit"]
timestamp: 2026-10-26T20:57:46.364199+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 0.9
---
# Summary

A Nextcloud instance usually survives a \"total loss\" far better than it looks: the database, data directory, and TLS certs are what matter, and they are rarely what got deleted.

## Facts
- Use when Nextcloud is down or stuck in maintenance mode
- The web root, Apache vhost, or `config.php` was deleted but the database and data dir survive

## Concepts
- Nextcloud restore
- Database backup
- PHP-FPM pool management

## Files
- `mysql -N -e \"select configvalue from <db>.oc_appconfig where appid='core' and configkey='lastupdateResult';\"`
- `mysql -N -e \"select app,version from <db>.oc_migrations where app='core' order by version desc limit 3;\"`
- `mysql -N -e \"select configvalue from <db>.oc_appconfig where appid='core' and configkey='lastcron';\"`
- `config/config.php`

_Importance: 7 · Confidence: 0.9_
