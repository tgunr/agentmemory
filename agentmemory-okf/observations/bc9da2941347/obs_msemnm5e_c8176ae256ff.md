---
type: FileRead
title: SMB share list from terminal
description: View SMB shares on pve.local using ssh
resource: agentmemory://observation/obs_msemnm5e_c8176ae256ff
tags: ["smbutil", "fileread"]
timestamp: 2026-08-04T12:21:35.325950+00:00
source: agentmemory
session_id: bc9da2941347
importance: 6
confidence: 0.9
---
# Summary

The output displays a list of available SMB shares on pve.local, which can be useful for accessing remote storage or other network resources. This observation is relevant to understanding and utilizing SMB shares for file sharing and access.

## Facts
- PVEMounter is used to view the list of available shares
- The shares include various directories such as desktop, documents, etc.

## Concepts
- smbutil

## Files
- `/var/log/syslog`

_Importance: 6 · Confidence: 0.9_
