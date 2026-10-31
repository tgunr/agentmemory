---
type: file_edit
title: Ssh syncoid
description: Syncing live config to disk and generating cron
resource: agentmemory://observation/obs_mvtmhng0_3f8ef880f691
tags: ["syncoid configuration", "file_edit"]
timestamp: 2026-10-29T14:12:36.714569+00:00
source: agentmemory
session_id: local-09876df4a88c5b9dfba8b1b47f3088057f950b91426018d01ae7dc74f61ede38
importance: 8
confidence: 0.9
---
# Summary

The server syncs the live syncoid configuration with the local copy, then generates a new cron script using the live configuration. The old local copy was removed and a symlink was created to the live version.

## Facts
- Updated /root/syncoid/syncoid.conf to point to /etc/syncoid/syncoid.conf
- Copied /root/syncoid/syncoid.conf to /root/syncoid/syncoid.conf.duplicate-20261029

## Concepts
- syncoid configuration

## Files
- `/etc/syncoid/syncoid.conf`
- `/root/syncoid/syncoid.conf`
- `/root/syncoid/syncoid.conf.duplicate-20261029`

_Importance: 8 · Confidence: 0.9_
