---
type: file_edit
title: Gateway SSH connection debugging (desktop → remote gateway over SSH)
description: 
resource: agentmemory://observation/obs_mvp9xtxc_b0c8256de742
tags: ["SSH connection troubleshooting", "file_edit"]
timestamp: 2026-10-26T13:10:11.901002+00:00
source: agentmemory
session_id: local-62f7e4da81c7f51bea7914b959f8cd75566c6624dcb518a00dab360e6e04e58e
importance: 8
confidence: 0.9
---
# Summary

When the desktop's gateway switcher shows a real entry but clicking it errors with `Could not reach davec@<host> over SSH… ssh: connect to host <host>\nport 22: No route to host`, it is not a real network outage and not an app bug, but a hostname-resolution trap or stale cached error. This note records the decisive diagnostic path and how to tell the two apart.

## Facts
- The app spawns `ssh` system via `spawnFn('ssh', args, {...})` in `electron/ssh-connection.ts` without `ssh2` library involvement.

## Concepts
- SSH connection troubleshooting

## Files
- `references/gateway-ssh-connection-debug.md`

_Importance: 8 · Confidence: 0.9_
