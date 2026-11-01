---
type: file_edit
title: samba-mount-access
description: Use with Samba writes fail, hang, or crawl; avoid TCC
resource: agentmemory://observation/obs_mvw9wqnv_a10c72f9cf48
tags: ["TCC", "Samba mounts", "file_edit"]
timestamp: 2026-10-31T10:43:44.246706+00:00
source: agentmemory
session_id: local-ed0c0a7d24e64e4d15234e09288ba6272aa62ac29e0296c321232b0f08a0b936
importance: 7
confidence: 0.9
---
# Summary

The agent's SSH terminal backend cannot write to Samba mounts due to TCC sandboxing, causing errors.

## Facts
- TCC sandbox denying the backend process, NOT a share permission problem
- `Operation not permitted` (EPERM / TCC) error, permission denied (EACCES)

## Concepts
- TCC
- Samba mounts

_Importance: 7 · Confidence: 0.9_
