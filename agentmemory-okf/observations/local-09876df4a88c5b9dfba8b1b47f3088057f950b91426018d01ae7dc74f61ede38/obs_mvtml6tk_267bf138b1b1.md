---
type: file_edit
title: Updating syncoid-runner defaults
description: Confirming replication fix took effect after edits
resource: agentmemory://observation/obs_mvtml6tk_267bf138b1b1
tags: ["syncoid-runner configuration", "zpool/quotas", "docker/podman", "file_edit"]
timestamp: 2026-10-29T14:15:21.794288+00:00
source: agentmemory
session_id: local-09876df4a88c5b9dfba8b1b47f3088057f950b91426018d01ae7dc74f61ede38
importance: 5
confidence: 0.9
---
# Summary

Two configuration files were updated to correct issues with replication. Editing one file had no effect, while the other successfully changed the runner's behavior. A log check confirmed the fix. A second operation ensured that the same issue didn't happen again.

## Facts
- Syncoid-runner's --config default is /etc/syncoid/syncoid.conf

## Concepts
- syncoid-runner configuration
- zpool/quotas
- docker/podman

_Importance: 5 · Confidence: 0.9_
