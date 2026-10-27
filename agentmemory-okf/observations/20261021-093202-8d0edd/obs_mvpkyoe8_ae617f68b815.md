---
type: CommandRun
title: NextCloud PHP error
description: Running PHP command on NextCloud
resource: agentmemory://observation/obs_mvpkyoe8_ae617f68b815
tags: ["PDO exceptions", "SQL clause errors", "commandrun"]
timestamp: 2026-10-26T18:18:47.164481+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 6
confidence: 0.9
---
# Summary

The last command run on NextCloud resulted in a PHP fatal error due to a column not found in the WHERE clause. The error occurred while executing a PDO command.

## Facts
- PDOException error
- Column not found in WHERE clause

## Concepts
- PDO exceptions
- SQL clause errors

## Files
- `/var/www/nextcloud/config/config.php`
- `/var/www/nextcloud/logs/nextcloud.log`

_Importance: 6 · Confidence: 0.9_
