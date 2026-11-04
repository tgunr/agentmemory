---
type: file_edit
title: Command to retrieve and analyze zpool data from offsite server
description: Retrieve data from pve.root with ssh
resource: agentmemory://observation/obs_mw14ssbd_b29377acf318
tags: ["zpool", "ssh", "file_edit"]
timestamp: 2026-11-03T20:19:32.560492+00:00
source: agentmemory
session_id: 20261030_014348_d4bddf
importance: 8
confidence: 0.9
---
# Summary

The command retrieved data from an offsite server using ssh and zpool commands. The retrieved data includes information about disk usage and storage pool configurations.

## Facts
- Command: ssh pve.root '(echo "HOST=$(hostname -s) $(date)"; ...)

## Concepts
- zpool
- ssh

## Files
- `/home/pve.root/script.sh`

_Importance: 8 · Confidence: 0.9_
