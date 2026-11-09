---
type: file_edit
title: Fix for mount issues
description: Rebinds all addresses via systemctl
resource: agentmemory://observation/obs_mw56jiea_42f371ba6e8a
tags: ["Samba SMB mount", "file_edit"]
timestamp: 2026-11-06T16:19:23.743481+00:00
source: agentmemory
session_id: local-b4c0c5ea0cd42343f37a9b2e9be66dd067f0fe4fbea2382d801d6c1ec6ab8fd7
importance: 7
confidence: 0.9
---
# Summary

The mount script swallowed the real error with 2>/dev/null, now logs mount_smbfs stderr. Read the share-level reason before touching keychain or IP-vs-netbios settings.

## Facts
- Samba resolves interface names to addresses at startup, so a NIC that is down
- Fix: systemctl restart smbd on the server (rebinds all addresses)

## Concepts
- Samba SMB mount

## Files
- `/etc/samba/smb.conf`

_Importance: 7 · Confidence: 0.9_
