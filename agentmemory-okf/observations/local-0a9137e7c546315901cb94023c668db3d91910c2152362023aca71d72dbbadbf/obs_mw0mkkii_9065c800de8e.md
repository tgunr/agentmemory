---
type: Observation
title: Asterisk command execution
description: Command executed on a remote server.
resource: agentmemory://observation/obs_mw0mkkii_9065c800de8e
tags: ["ssh command execution", "outbound registration", "observation"]
timestamp: 2026-11-03T11:49:16.111056+00:00
source: agentmemory
session_id: local-0a9137e7c546315901cb94023c668db3d91910c2152362023aca71d72dbbadbf
importance: 6
confidence: 1
---
# Summary

The script executed a series of commands on a remote server using ssh, resulting in a 403 Forbidden error.

## Facts
- Tool used: ssh
- Timeout: 180 seconds
- Command executed: `asterisk -rx ...`

## Concepts
- ssh command execution
- outbound registration

## Files
- `/var/log/asterisk/full`

_Importance: 6 · Confidence: 1_
