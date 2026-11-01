---
type: file_edit
title: samba-mount-access
description: Use when Samba writes fail, hang, or crawl. TCC vs small-file latency; guish.sh and local-stage+rsync.
resource: agentmemory://observation/obs_mvwlw36h_545b7c4b2a10
tags: ["TCC sandbox", "Samba protocol", "file_edit"]
timestamp: 2026-10-31T16:19:09.203471+00:00
source: agentmemory
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
importance: 7
confidence: 0.9
---
# Summary

The agent's SSH terminal backend cannot write to Samba mounts. Write commands fail due to TCC sandbox denial. Preferred fix is to use SSH to operate on the native filesystem.

## Facts
- TCC sandbox denying the backend process
- ssh to the server and operate on the native filesystem

## Concepts
- TCC sandbox
- Samba protocol

_Importance: 7 · Confidence: 0.9_
