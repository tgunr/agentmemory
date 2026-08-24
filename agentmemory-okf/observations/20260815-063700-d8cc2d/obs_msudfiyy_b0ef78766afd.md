---
type: file_write
title: samba-mount-access update failed due to TCC sandbox denial
description: Samba Mount Access skill is unable to push edit using Samba protocol
resource: agentmemory://observation/obs_msudfiyy_b0ef78766afd
tags: ["TCC access control system", "file_write"]
timestamp: 2026-08-15T12:47:40.224189+00:00
source: agentmemory
session_id: 20260815_063700_d8cc2d
importance: 5
confidence: 0.9
---
# Summary

The Hermes agent failed to write file due to TCC sandbox denial. Pushing writes through Samba protocol was suggested as an alternative, but still encountering issues.

## Facts
- TCC (the macOS Access Control System) denies backend process writes on certain volumes
- Diretory not empty / Not a directory error when trying to rm -rf with `Directory is Not Empty` error over the mount

## Concepts
- TCC access control system

_Importance: 5 · Confidence: 0.9_
