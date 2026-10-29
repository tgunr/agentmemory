---
type: file_edit
title: Nextcloud minimal bootstrap test
description: Ran PHP command to test Nextcloud bootstrap
resource: agentmemory://observation/obs_mvqhko57_c9f5ced007db
tags: ["Nextcloud bootstrap", "file_edit"]
timestamp: 2026-10-27T09:31:40.983926+00:00
source: agentmemory
session_id: 20261021_093202_8d0edd
importance: 7
confidence: 0.9
---
# Summary

Ran a PHP command to test the Nextcloud bootstrap process.

## Facts
- Command: timeout 360 ssh -o ConnectTimeout=15 pve.root 'set +e cd /var/www/nextcloud echo "=== minimal bootstrap test ===" printf "%s\\n" "<?php require_once '/var/www/nextcloud/lib/base.php'; echo booted php 8.4.27; server class: OC\\Server; exit=$?"; > /tmp/t1.php'; chmod 644 /tmp/t1.php'; sudo -u www-data /usr/bin/php8.4 /tmp/t1.php; echo "exit=$?"; echo; echo "=== with app load + class probe ===" printf "%s\\n" "<?php require_once '/var/www/nextcloud/lib/base.php'; OCA \\\\\\\\\\\\\\\\\\\\\\Mcp\\\\\\\\\\\\\\\\\\\\Service\\\\\\\\\\\\\\\\Policy\\\\\\\\\\\\\\\\PolicyWriter\\\\\\\\\\\\\\\\\\\;\; echo app loaded\\\\n\\\\\;\; var_dump(class_exists(\\\\\\\\\\\\"OCA\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Mcp\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\PolicyWriter\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\;\;)"; > /tmp/t2.php'; chmod 644 /tmp/t2.php'; sudo -u www-data /usr/bin/php8.4 /tmp/t2.php; echo "exit=$?'" 2>&1

## Concepts
- Nextcloud bootstrap

_Importance: 7 · Confidence: 0.9_
