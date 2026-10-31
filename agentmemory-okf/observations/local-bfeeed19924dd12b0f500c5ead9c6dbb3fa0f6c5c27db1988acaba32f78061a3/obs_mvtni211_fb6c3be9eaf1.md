---
type: file_edit
title: QEMU Server Locks
description: Locks in QEMU Server
resource: agentmemory://observation/obs_mvtni211_fb6c3be9eaf1
tags: ["SQL migration", "file_edit"]
timestamp: 2026-10-29T14:40:55.229791+00:00
source: agentmemory
session_id: local-bfeeed19924dd12b0f500c5ead9c6dbb3fa0f6c5c27db1988acaba32f78061a3
importance: 7
confidence: 1
---
# Summary

In this observation, the script ran a series of commands to inspect locks in QEMU Server, revealing locks related to 111 and 'qemu'.

## Facts
- lsof /var/lock/qemu-server/lock-111.conf 2>&1 || true
- fuser -v /var/lock/qemu-server/* 2>&1 || true
- grep -E \"111|qemu\" /proc/locks | head

## Concepts
- SQL migration

## Files
- `/var/lock/qemu-server/lock-111.conf`

_Importance: 7 · Confidence: 1_
