---
type: file_edit
title: Syncoid failed due to pending zfs receive
description: Executing ssh command on syncoid polymicro net
resource: agentmemory://observation/obs_mve66dej_f8632f3430f4
tags: ["zfs receive timeout", "file_edit"]
timestamp: 2026-10-18T18:39:23.948654+00:00
source: agentmemory
session_id: 20261017_064742_588773
importance: 8
confidence: 1
---
# Summary

Syncoid failed during an update attempt due to the system still processing a zfs receive operation on the data1/sources target.

## Facts
- Syncoid failed with exit code 0
- Current workdir is /Users/davec/.hermes/profiles/systems/workspace/pveroot
- Cmd issued to syncoid: ssh pve.root &#39;/usr/local/bin/syncoid --no-privilege-elevation --sshkey /root/.ssh/id_rsa.pve.root alpha/sources root@syncoid.polymicro.net:data1/sources 2>&1 | tail -40&#39;

## Concepts
- zfs receive timeout

## Files
- `/usr/local/bin/syncoid`
- `/root/.ssh/id_rsa.pve.root`
- `/Users/davec/.hermes/profiles/systems/workspace/pveroot`

_Importance: 8 · Confidence: 1_
