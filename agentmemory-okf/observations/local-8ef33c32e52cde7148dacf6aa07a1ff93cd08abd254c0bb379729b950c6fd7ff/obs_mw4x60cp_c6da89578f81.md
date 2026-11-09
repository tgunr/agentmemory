---
type: file_edit
title: SSH to PVE, check mariadb service.
description: Running ssh command to create systemd service for mariadb.
resource: agentmemory://observation/obs_mw4x60cp_c6da89578f81
tags: ["systemd services", "mariadb", "file_edit"]
timestamp: 2026-11-06T11:56:57.284441+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 6
confidence: 1
---
# Summary

Connection to PVE server was made via SSH. The command was flagged for approval and passed the approval. The service check for mariadb failed. The directory /run/mysqld/wsrep-start-position did not exist. The systemctl commands were issued with a timeout of 180 seconds.

## Facts
- Timeout: 180 seconds
- Command: ssh root@10.1.2.1 'mkdir -p /etc/systemd/system/mariadb.service.d\nprintf \"[Service]\\n# the unit\\x27s galera ExecStartPre writes /run/mysqld/wsrep-start-position;\\n# let systemd create that directory in the unit namespace before it runs\\nRuntimeDirectory=mysqld\\nRuntimeDirectoryMode=0755\\n\" > /etc/systemd/system/mariadb.service.d/10-rundir.conf\nsystemctl daemon-reload; systemctl reset-failed mariadb; systemctl start --no-block mariadb; sleep 25; echo \"mariadb: $(systemctl is-active mariadb)\"; journalctl -b -u mariadb -o short --no-pager 2>&1 | grep -E \"ready for connections|ERROR|cannot create\" | tail -3' 2>&1'
- Output: mariadb: failed\nNov 06 04:58:40 pve mariadbd[128431]: 2026-11-06  4:58:40 0 [Note] /usr/sbin/mariadbd: ready for connections.\nNov 06 04:59:31 pve sh[130792]: /bin/sh: 1: cannot create /run/mysqld/wsrep-start-position: Directory nonexistent\nNov 06 05:55:05 pve sh[311735]: /bin/sh: 1: cannot create /run/mysqld/wsrep-start-position: Directory nonexistent

## Concepts
- systemd services
- mariadb

## Files
- `/etc/systemd/system/mariadb.service.d/10-rundir.conf`

_Importance: 6 · Confidence: 1_
