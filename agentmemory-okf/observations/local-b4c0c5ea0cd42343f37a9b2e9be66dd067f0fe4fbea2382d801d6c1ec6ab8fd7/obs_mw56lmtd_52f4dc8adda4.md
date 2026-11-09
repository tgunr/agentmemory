---
type: file_edit
title: Update SMBD configuration
description: Update SMBD configuration to enable wait-for-smb-nics functionality
resource: agentmemory://observation/obs_mw56lmtd_52f4dc8adda4
tags: ["systemd service management", "SMBD configuration", "file_edit"]
timestamp: 2026-11-06T16:21:02.779463+00:00
source: agentmemory
session_id: local-b4c0c5ea0cd42343f37a9b2e9be66dd067f0fe4fbea2382d801d6c1ec6ab8fd7
importance: 7
confidence: 0.9
---
# Summary

Updated SMBD configuration to enable wait-for-smb-nics functionality using hermes-tools. The update ensured that the SMBD service can bind to all available network interfaces.

## Facts
- Updated waiting time from 5 seconds to 30 seconds for NICs
- Updated SMBD service status to enabled

## Concepts
- systemd service management
- SMBD configuration

## Files
- `/etc/systemd/system/smbd.service.d/10-wait-nics.conf`
- `/tmp/hermes-verify-wait-nics.sh`
- `/usr/local/sbin/wait-for-smb-nics.sh`
- `/etc/systemd/system/smbd.service`

_Importance: 7 · Confidence: 0.9_
