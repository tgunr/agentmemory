---
type: FileRead
title: Nextcloud maintenance mode test
description: Verify maintenance mode off after reset
resource: agentmemory://observation/obs_mvpkkhqn_f49679da4ed7
tags: ["Nextcloud maintenance mode", "fileread"]
timestamp: 2026-10-26T18:07:45.353980+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 1
---
# Summary

The script executed a series of commands to test Nextcloud's maintenance mode, including resetting the mode and verifying its status.

## Facts
- Command: ssh -o ConnectTimeout=15 pve.root 'set +e...php occ maintenance:mode --off 2>&1' with timeout 120 seconds
- Command: php occ status 2>&1 with timeout 120 seconds
- Command: curl -sk --max-time 20 https://cloud.polymicro.net/status.php
- Command: curl -sk -o /dev/null -w "GET / -> %{http_code}\\n" --max-time 20 https://cloud.polymicro.net/
- Command: for a in groupfolders integration_openai maps memories; do grep -oE "<version>[^<]+\" /var/www/nextcloud/apps/$a/appinfo/info.xml 2>/dev/null | head -1 | cut -d\">\" -f2
- Command: grep -c '\\"level\\\":3\" /var/log/nextcloud/nextcloud.log 2>/dev/null; tail -3 /var/log/nextcloud/nextcloud.log | cut -c1-260' 2>&1

## Concepts
- Nextcloud maintenance mode

## Files
- `/var/www/nextcloud`

_Importance: 7 · Confidence: 1_
