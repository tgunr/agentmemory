---
type: file_edit
title: Extracting sanitoid packages from systemd directories
description: Pulling configuration files
resource: agentmemory://observation/obs_mve0osrb_f4d09890eb04
tags: ["sanitoid", "file_edit"]
timestamp: 2026-10-18T16:05:46.004325+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 4
confidence: 0.9
---
# Summary

Search for and extract sanitoid packages from systemd directories. This is a regular maintenance operation.

## Facts
- Command issued: ssh pve.root 'find /etc/systemd/system -name \"*syncoid*\" -o -name \"*sanoid*\" 2>/dev/null'

## Concepts
- sanitoid

## Files
- `/etc/systemd/system/sanoid-syncoid-monitor.service`

_Importance: 4 · Confidence: 0.9_
