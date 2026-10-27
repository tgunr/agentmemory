---
type: file_edit
title: Checking nextcloud .htaccess and app boot errors
description: No .htaccess present, routing tests failed
resource: agentmemory://observation/obs_mvpksd27_3e8cbda1c7d4
tags: ["nextcloud", "routing", "Apache", "groupfolders", "file_edit"]
timestamp: 2026-10-26T18:13:52.540778+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 1
---
# Summary

The terminal command checked if .htaccess present and retrieved its content. However, a routing test failed, indicating an error with nextcloud's routing. Additionally, no .htaccess file was present in /var/www/nextcloud/. The log also contains errors with apache and groupfolders.

## Facts
- Terminal command was: ssh -o ConnectTimeout=15 pve.root 'set +e\ncd /var/www/nextcloud\necho "=== .htaccess present? ==="'; ls -la .htaccess 2>&1;
- Output of ls -la .htaccess was: "-rw-r----- 1 www-data www-data 4446 Oct 26 13:03 .htaccess"
- Output of curl -s --max-time 15 https://cloud.polymicro.net/login | head -5 was:
- Output of curl -s --max-time 15 https://cloud.polymicro.net/login | tail -2 | grep "level":3" was:
- Output of tail -3 /var/log/apache2/cloud-error.log was:
- Output of groupfolders:list was:
- Output of grep "level":3 /var/log/nextcloud/nextcloud.log | tail -2 | cut -c1-400 was:

## Concepts
- nextcloud
- routing
- Apache
- groupfolders

## Files
- `/var/www/nextcloud/.htaccess`

_Importance: 7 · Confidence: 1_
