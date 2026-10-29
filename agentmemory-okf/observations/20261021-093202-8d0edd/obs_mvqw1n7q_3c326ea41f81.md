---
type: file_edit
title: Restoring Nextcloud
description: A procedure for dealing with a broken Nextcloud server after an update or host rebuild
resource: agentmemory://observation/obs_mvqw1n7q_3c326ea41f81
tags: ["Nextcloud restoration", "PHP-FPM", "Apache", "zfs", "Cron", "file_edit"]
timestamp: 2026-10-27T16:16:47.553435+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 5
confidence: 0.9
---
# Summary

A Nextcloud instance usually survives a "total loss" far better than it looks, with the database, data directory, and TLS certs being what matter. Establish the version the database expects, salvage config.php and app code from the updater's backup, and then code, ownership, and extensions.

## Facts
- Running `mysql -N -e "select configvalue from <db>.oc_appconfig where appid='core' and configkey='lastupdateResult';"` to determine the correct version
- Salvaging config.php and app code from the updater's backup

## Concepts
- Nextcloud restoration
- PHP-FPM
- Apache
- zfs
- Cron

_Importance: 5 · Confidence: 0.9_
