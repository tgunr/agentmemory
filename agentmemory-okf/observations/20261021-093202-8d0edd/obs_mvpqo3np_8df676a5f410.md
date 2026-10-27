---
type: file_edit
title: Locate and list Cleanup.php file
description: Used ssh command to find files on nextcloud server
resource: agentmemory://observation/obs_mvpqo3np_8df676a5f410
tags: ["php command", "cleanup files", "ssh", "file cache", "file_edit"]
timestamp: 2026-10-26T20:58:31.424400+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 0.9
---
# Summary

The script executed a shell command on a remote server to locate and list the Cleanup.php file.
  It then ran the provided PHP command `oc files:cleanup` and output the help text.
  The operation concluded successfully with an exit code of 0.

## Facts
- Command: timeout 180 ssh -o ConnectTimeout=15 pve.root 'cd /var/www/nextcloud; find core lib -name \"Cleanup*.php\" -path \"*Command*\" 2>/dev/null; grep -rn \"class Cleanup\" core/Command/Files/ 2>/dev/null;
- Command timeout: 240 seconds

## Concepts
- php command
- cleanup files
- ssh
- file cache

## Files
- `/var/www/nextcloud/core/Command/Files/Cleanup.php`

_Importance: 7 · Confidence: 0.9_
