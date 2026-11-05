---
type: CommandRun
title: Failed Nextcloud Dashboard Update
description: Command to update Nextcloud dashboard layout produced an error
resource: agentmemory://observation/obs_mw2246jt_d42d9c726cb0
tags: ["Nextcloud", "php occ", "User settings", "commandrun"]
timestamp: 2026-11-04T11:52:11.555701+00:00
source: agentmemory
session_id: local-63e9557e22775d01f76f74f836eac4e0e7033ea9e1e8c0b5d790c3929d9a2243
importance: 5
confidence: 1
---
# Summary

The update of the Nextcloud dashboard layout using `php occ user:setting` resulted in a conflict due to type mismatch

## Facts
- Post-commands output:
- Command executed: ssh -o ConnectTimeout=20 pve.root 'cd /var/www/nextcloud && sudo -u www-data php occ user:setting -- davec dashboard layout "recommendations,files-favorites,activity" 2>&1 | tail -5; echo "--- readback ---"; sudo -u www-data php occ user:setting davec dashboard layout 2>&1'
- Post-commands output trimmed:
- /dev/null | tail -5; echo "--- readback ---"; sudo -u www-data php occ user:setting davec dashboard layout 2>&1

## Concepts
- Nextcloud
- php occ
- User settings

_Importance: 5 · Confidence: 1_
