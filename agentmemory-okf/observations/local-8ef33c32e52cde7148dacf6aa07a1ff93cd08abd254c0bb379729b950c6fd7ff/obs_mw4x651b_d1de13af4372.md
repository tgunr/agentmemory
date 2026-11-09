---
type: CommandRun
title: Systemd service status check
description: Check the status of the MariaDB service on 10.1.2.1
resource: agentmemory://observation/obs_mw4x651b_d1de13af4372
tags: ["systemd services", "MariaDB database server", "commandrun"]
timestamp: 2026-11-06T11:57:03.354200+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 7
confidence: 0.9
---
# Summary

The terminal was used to run a command to check the status of the MariaDB service. The output indicated that the service is currently failed, and the last unit log showed the error message.

## Facts
- Command executed: ssh root@10.1.2.1 'systemctl status mariadb --no-pager -l 2>&1 | sed -n \"1,14p\"; echo \"=== last unit log ===\"; journalctl -b -u mariadb -o short --no-pager 2>&1 | grep -vE \"Sent message|Got message|varlink\" | tail -6' 2>&1'
- Tool executed: terminal

## Concepts
- systemd services
- MariaDB database server

_Importance: 7 · Confidence: 0.9_
