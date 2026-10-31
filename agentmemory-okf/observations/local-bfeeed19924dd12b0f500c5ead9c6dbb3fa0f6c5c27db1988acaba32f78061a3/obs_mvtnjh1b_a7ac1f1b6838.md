---
type: CommandRun
title: Tool: terminal; Command: ssh
description: Cross-check referenced vm-beta volumes exists in tank/vm
resource: agentmemory://observation/obs_mvtnjh1b_a7ac1f1b6838
tags: ["SSH", "vm-beta", "commandrun"]
timestamp: 2026-10-29T14:42:01.339861+00:00
source: agentmemory
session_id: local-bfeeed19924dd12b0f500c5ead9c6dbb3fa0f6c5c27db1988acaba32f78061a3
importance: 5
confidence: 1
---
# Summary

The post_tool_call hook with tool terminal is executed, which runs a series of commands using SSH to check for referenced vm-beta volumes in tank/vm. The output indicates the cross-check was successful.

## Facts
- HOST=pve
- PATH=/bin/ssh
- TIMEOUT=60

## Concepts
- SSH
- vm-beta

## Files
- `/dev/zvol/tank/vm/`
- `/etc/pve/qemu-server/*.conf`
- `/etc/pve/storage.cfg`
- `/etc/pve/qemu-server/`

_Importance: 5 · Confidence: 1_
