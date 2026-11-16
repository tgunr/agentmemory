---
type: file_write
title: Restore local bundle using Hermes
description: No local restore yet, update the desktop bundle
resource: agentmemory://observation/obs_mwi2hc5d_ec769006abc7
tags: ["local bundle, Hermes, desktop bundle, restore, update", "file_write"]
timestamp: 2026-11-15T16:46:44.146385+00:00
source: agentmemory
session_id: local-e1e6499998c2ef29d74e9457a59fa7878a3c72c854a9497ca9e7d3769fa21a57
importance: 7
confidence: 0.9
---
# Summary

Tool `skill_manage` successfully deployed script to create a local bundle for Hermes using the `restore-local-build.sh` script. This allows Hermes to use the local bundle instead of the desktop bundle, which may improve performance and ensure a fresh build after updating.

## Facts
- The package `hermes` is used by the script

## Concepts
- local bundle, Hermes, desktop bundle, restore, update

## Files
- `scripts/restore-local-build.sh`

_Importance: 7 · Confidence: 0.9_
