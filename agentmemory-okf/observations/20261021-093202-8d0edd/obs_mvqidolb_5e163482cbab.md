---
type: file_edit
title: Restore Nextcloud server
description: Restore Nextcloud server following a crash or migration
resource: agentmemory://observation/obs_mvqidolb_5e163482cbab
tags: ["Nextcloud server restoration", "file_edit"]
timestamp: 2026-10-27T09:54:14.585317+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 1
---
# Summary

To restore a broken Nextcloud server, first establish the version the database expects. Then, salvage config.php and app code from the updater's backup, build the new config.php without printing secrets, and code, ownership, and extensions.

## Facts
- Use the latest code version for the database.
- Install the code in the DB's version, not the newest release.
- Check the major version for EOL and note the upgrade path.

## Concepts
- Nextcloud server restoration

## Files
- `mysql -N -e "select configvalue from <db>.oc_appconfig where appid='core' and configkey='lastupdateResult';"`
- `mysql -N -e "select app,version from <db>.oc_migrations where app='core' order by version desc limit 3;"`
- `mysql -N -e "select configvalue from <db>.oc_appconfig where appid='core' and configkey='lastcron';"`

_Importance: 7 · Confidence: 1_
