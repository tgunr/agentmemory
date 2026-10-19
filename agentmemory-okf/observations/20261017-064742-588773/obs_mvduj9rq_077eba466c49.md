---
type: file_edit
title: Failed syncoid command
description: Pve system, syncoid version, and source paths involved
resource: agentmemory://observation/obs_mvduj9rq_077eba466c49
tags: ["syncoid command", "zfs receive process", "file_edit"]
timestamp: 2026-10-18T13:13:30.416628+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 6
confidence: 1
---
# Summary

The syncoid command failed and raised a warning, likely due to the data1/sources already being used by a zfs receive process.

## Facts
- Using ssh to run syncoid on polymicro network
- Command timed out within 600 seconds
- Expected a successful response, got a warning error

## Concepts
- syncoid command
- zfs receive process

## Files
- `/usr/local/bin/syncoid`
- `/Users/davec/.hermes/profiles/systems/workspace/pveroot`
- `/root/.ssh/id_rsa.pve.root`
- `/usr/local/bin/syncoid --no-privilege-elevation --sshkey /root/.ssh/id_rsa.pve.root alpha/sources root@syncoid.polymicro.net:data1/sources`

_Importance: 6 · Confidence: 1_
