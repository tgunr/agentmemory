---
type: file_edit
title: Failed to start mariadb and php8.4-fpm services
description: No apparent impact on system functionality so far
resource: agentmemory://observation/obs_mw4usoul_ebd9c3b64efa
tags: ["Service initialization failures", "file_edit"]
timestamp: 2026-11-06T10:50:36.610916+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 5
confidence: 0.9
---
# Summary

The command execution timed out, but the output indicates that both mariadb and php8.4-fpm services failed to start, though they do not appear to have had any adverse impact on the system's functionality so far.

## Facts
- Timed out after 120 seconds waiting for mariadb and php8.4-fpm services to finish
- Output:
    
    === mariadb ===
    mariadb.service: Main process exited, code=exited, status=1/FAILURE
    mariadb.service: Failed with result 'exit-code'.
    mariadb.service: Service will not restart (restart setting)
    Failed to start mariadb.service - MariaDB 11.8.6 database server.

    === php8.4-fpm ===
    php8.4-fpm.service: Scheduled restart job, restart counter is at 7.
    php8.4-fpm.service: Start request repeated too quickly.
    php8.4-fpm.service: Failed with result 'exit-code'.
    php8.4-fpm.service: Service restart not allowed.
    Failed to start php8.4-fpm.service - The PHP 8.4 FastCGI Process Manager.

    === only-app ===
    only-app.service: Scheduled restart job, restart counter is at 3.
    only-app.service: Start request repeated too quickly.
    only-app.service: Failed with result 'exit-code'.
    only-app.service: Service restart not allowed.
    Failed to start only-app.service - Only What I Ask - app.

## Concepts
- Service initialization failures

_Importance: 5 · Confidence: 0.9_
