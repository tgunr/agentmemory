---
type: file_edit
title: Custom SSH command to restart Plex service
description: Restarting Plex service with custom SSH command for mounting ZFS datasets
resource: agentmemory://observation/obs_mvsazw62_c81320bb7fd9
tags: ["SSH mount point verification", "Systemd service management", "file_edit"]
timestamp: 2026-10-28T16:03:06.261721+00:00
source: agentmemory
session_id: local-03df3b8fbea0cd363df33aa504e53e0f929b740c314800b2ba1abab0d9be7856
importance: 8
confidence: 0.9
---
# Summary

Plex service was restarted with custom SSH command after a failed start due to ZFS dataset mounts. This is an example of a system service being restarted and verified for proper operation.

## Facts
- Command used to start Plex service: scp -q /Users/davec/.hermes/profiles/systems/cache/scratch/plex-ordering.conf pve.root:/etc/systemd/system/plexmediaserver.service.d/ordering.conf && ssh pve.root 'systemctl daemon-reload; ...'

## Concepts
- SSH mount point verification
- Systemd service management

## Files
- `/Users/davec/.hermes/profiles/systems/cache/scratch/plex-ordering.conf`
- `/etc/systemd/system/plexmediaserver.service.d/ordering.conf`

_Importance: 8 · Confidence: 0.9_
