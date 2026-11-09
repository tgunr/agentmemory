---
type: Observation
title: Verify Mariadb package
description: System run Mariadb
resource: agentmemory://observation/obs_mw4x6c0o_0284faf80aa5
tags: ["MariaDB package verification", "observation"]
timestamp: 2026-11-06T11:57:12.404024+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 6
confidence: 0.9
---
# Summary

The system executed a Mariadb script to verify a package. The script output indicates the correct version of Mariadb installed is 11.8.6-MariaDB-0+deb13u1. Additionally, the script confirmed the existence of the symbolic link /usr/sbin/mysqld that points to /usr/sbin/mariadbd.

## Facts
- Mariadb version 11.8.6-MariaDB-0+deb13u1
- /usr/sbin/mysqld is symlink to mariadbd

## Concepts
- MariaDB package verification

## Files
- `/usr/sbin/mariadbd`
- `/usr/sbin/mysqld`

_Importance: 6 · Confidence: 0.9_
