---
type: file_edit
title: New bug fixes
description: A series of bug fixes for storage, networking and certificates
resource: agentmemory://observation/obs_mvs9eo5s_76da6bca859e
tags: ["file_edit"]
timestamp: 2026-10-28T15:18:36.490643+00:00
source: agentmemory
session_id: local-03df3b8fbea0cd363df33aa504e53e0f929b740c314800b2ba1abab0d9be7856
importance: 8
confidence: 0.85
---
# Summary

A series of bug fixes were made for storage, networking and certificates on pve.root, including removing stale syncoid.conf blocks, creating a new ifupdown2-pre drop-in to fix networking, and updating certificates to resolve an AttributeError. The fixes were made to pve.root to ensure a more stable system.

## Facts
- pve.root: syncingoid-runner has a --cleanup early-return (~line 694) so cleanup runs but the sync loop never does
- pve.root: syncoid-runner (/usr/local/bin/syncoid-runner) has a --cleanup early-return bug
- pve.root: Removed stale syncoid.conf blocks
- pve.root: Created a new ifupdown2-pre drop-in that swallows the timeout to fix networking issue
- pve.root: Updated certificates to remove the pyOpenSSL 26.4 + cryptography 50 installed outside apt (epoch 100) vs josepy 1.13 → OpenSSL.crypto.X509Req AttributeError

## Files
- `/etc/syncoid.conf`
- `/etc/usr/local/bin/sanoid-syncoid-monitor.sh`
- `/etc/usr/local/bin/ifupdown2-pre`
- `/usr/local/bin/syncoid-runner`

_Importance: 8 · Confidence: 0.85_
