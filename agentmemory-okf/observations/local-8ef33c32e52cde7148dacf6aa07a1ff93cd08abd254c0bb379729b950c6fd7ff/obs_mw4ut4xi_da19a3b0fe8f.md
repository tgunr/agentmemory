---
type: file_edit
title: Failed to start multiple PHP services
description: No operation completed successfully
resource: agentmemory://observation/obs_mw4ut4xi_da19a3b0fe8f
tags: ["systemctl command", "file_edit"]
timestamp: 2026-11-06T10:50:57.456005+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 6
confidence: 1
---
# Summary

The script failed to start multiple PHP services (mariadb, php8.4-fpm, and php8.2-fpm) due to timeouts, and successfully started php8.2-fpm, but failed to apply it.

## Facts
- Command: ssh root@10.1.2.1 'for u in mariadb php8.4-fpm php8.2-fpm only-app; do ...'; timeout 300 seconds
- Mariadb: job failed with error code 1, activating service failed
- PHP 8.4-fpm: job failed with error code 1, activating service failed
- PHP 8.2-fpm: activating service failed, job finished successfully

## Concepts
- systemctl command

_Importance: 6 · Confidence: 1_
