---
type: file_write
title: Sync shared skills
description: Synchronizing hermes-knowledge skills mirror
resource: agentmemory://observation/obs_mvwk82by_77a2f6f25b4f
tags: ["rsync", "file_write"]
timestamp: 2026-10-31T15:32:28.741701+00:00
source: agentmemory
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
importance: 8
confidence: 0.9
---
# Summary

The script used rsync with --delete and --timeout options to refresh the mirror.

## Facts
- The local mirror of the shared skills was out of sync due to a degraded mount.
- The mirror is local, and the job refreshes it in the background.

## Concepts
- rsync

## Files
- `/Users/davec/usr/bin/sync-shared-skills.sh`

_Importance: 8 · Confidence: 0.9_
