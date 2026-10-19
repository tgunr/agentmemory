---
type: file_edit
title: zfs receive process details
description: No output
resource: agentmemory://observation/obs_mvdujqli_eae886edf02e
tags: ["zfs receive", "property validation", "file_edit"]
timestamp: 2026-10-18T13:13:52.224356+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 6
confidence: 1
---
# Summary

The output from running the `zfs get` command on the `received` property yielded an error message indicating an invalid property list, along with usage instructions.

## Facts
- Command: ssh pve.root 'ssh -o BatchMode=yes -o ConnectTimeout=10 -o ServerAliveInterval=15 root@syncoid.polymicro.net "echo \\"=== zfs receive processes ===\\\"; ps aux | grep -iE \\"zfs receive|syncoid|mbuffer\\\" | grep -v grep; echo \\"=== data1/sources receive state ===\\\"; zfs get -H -o value received data1/sources 2>&1; zfs list -H -o name data1/sources/.zfs 2>&1 | head -5""'
- Output: ...[command output truncated]
- Received properties: <ul><li>bad property list: invalid property 'received'</li><li>get [-rHp] [-d max] [-o \"all\" | field[,...]] ...</li></ul>

## Concepts
- zfs receive
- property validation

## Files
- `/Users/davec/.hermes/profiles/systems/workspace/pveroot`

_Importance: 6 · Confidence: 1_
