---
type: file_write
title: Samba Mount Access
description: Use when Samba writes fail, hang, or crawl. TCC vs small-file latency;
resource: agentmemory://observation/obs_mw56jcku_3720965bea45
tags: ["TCC", "file_write"]
timestamp: 2026-11-06T16:19:16.186490+00:00
source: agentmemory
session_id: local-b4c0c5ea0cd42343f37a9b2e9be66dd067f0fe4fbea2382d801d6c1ec6ab8fd7
importance: 8
confidence: 0.9
---
# Summary

The agent's **SSH terminal backend cannot write to Samba mounts**. Write commands fail due to the macOS **TCC sandbox denying the backend process**, not a share permission problem. If the mount is served by a box that can be accessed via SSH, use this to sidestep both TCC write-block and Samba protocol's `rm -rf` quirks.

## Facts
- The agent's **SSH terminal backend cannot write to Samba mounts**

## Concepts
- TCC

## Files
- `/Volumes/Work`
- `/Volumes/davec`
- `/Volumes/projects`
- `/Volumes/AI`

_Importance: 8 · Confidence: 0.9_
