---
type: CommandRun
title: Resync of dpool
description: Launch of syncoid-runner command
resource: agentmemory://observation/obs_mvtm4no9_dea5b72edbca
tags: ["command wrapper usage", "syncoid-runner", "commandrun"]
timestamp: 2026-10-29T14:02:30.484388+00:00
source: agentmemory
session_id: local-09876df4a88c5b9dfba8b1b47f3088057f950b91426018d01ae7dc74f61ede38
importance: 8
confidence: 1
---
# Summary

The command to resync dpool was executed with errors due to shell wrapper usage.

## Facts
- zfs list -H -o name,used
- zfs get -H -o value clones tank/dpool/podman@syncoid_pve_2026-07-08_21:35:15-GMT00:00
- nfs list -H -o name,used

## Concepts
- command wrapper usage
- syncoid-runner

## Files
- `/root/resync-dpool.sh`

_Importance: 8 · Confidence: 1_
